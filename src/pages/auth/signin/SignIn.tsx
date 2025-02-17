import React, { FC, useEffect, useState } from 'react';
import { Box, Grid, IconButton, InputAdornment, Typography, Checkbox, FormControlLabel, } from '@mui/material';
import { Visibility, VisibilityOff, Circle } from '@mui/icons-material';
import BackButton from '../../../components/backButton/BackButton';
import InputText from '../../../components/inputText/InputText';
import GradientButton from '../../../components/gradientButton/GradientButton';
import Email from '../../../assest/login/email.svg';
import Lock from '../../../assest/login/lock.svg';
import './SignInFormStyles.scss'
import SocialButtons from '../components/SocialButtons';
import Pic from '../../../assest/login/login-pic.jpeg';
import { redirect, useNavigate } from 'react-router-dom';
import { ILoginRequestPaylod } from '../../../types/api/api.types';
import { authRoute } from '../../../api/axios/apiRoute';
import UAParser from 'ua-parser-js';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../../redux/store';
import { setAuthToken, setUserCredential } from '../../../redux/actions/authActions';
import { signInValidtions } from '../../../helpers/authValidtions';
import { toastify } from '../../../helpers/toastify/toastify';
import { AxiosError } from 'axios';
import { LazyLoading } from '../../../components/lazyLoading';

const { displayName } = require('../../../app.json');

const SignIn: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [deviceInfo, setDeviceInfo] = useState({
        appVersion: '',
        deviceId: '',
        deviceManufacture: '',
        deviceOs: '',
        playerId: '',
        osVersion: '',
        deviceModel: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { accessToken: userToken } = useSelector(
        (state: IRootState) => state?.Auth,
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleForgotPasswordClick = () => {
        navigate('/auth/forgetPassword')
    };
    const handleClick = async (): Promise<void> => {
        const vaild: boolean = signInValidtions(email, password)
        if (vaild) {
            try {
                setLoading(true);

                const body: ILoginRequestPaylod = {
                    emailOrPhoneNumber: email,
                    password: password,
                    deviceInfo: deviceInfo
                };

                const { data, status } = await authRoute.Login(body);

                if (status === 200) {
                    dispatch(setAuthToken(data?.Data?.AccessToken));
                    dispatch(setUserCredential({
                        fullName: data?.Data?.FullName,
                        password: data?.Data?.Password,
                        email: data?.Data?.Email,
                        userRole: data?.Data?.UserRole
                    }));
                    navigate('/')
                } else {
                    toastify(data?.ResponseMessage, 'error', 2000);
                }
                setLoading(false);
            } catch (error: AxiosError | any) {
                const errorMessage = error.response.data?.data || error?.response?.data?.responseMessage || error.request || error.message || error.title || 'An error occurred';
                toastify(errorMessage, 'warn', 2000);
                setLoading(false);
            }
        }

    };
    const handleFacebookLogin = () => {
        console.log('Facebook login clicked');
    };
    const handleGoogleLogin = () => {
        console.log('Google login clicked');
    };
    useEffect(() => {
        const parser = new UAParser();
        const result = parser.getResult();

        const deviceId = uuidv4();
        const appVersion = '1.0.0';
        const playerId = 'player123';

        setDeviceInfo({
            appVersion,
            deviceId,
            deviceManufacture: result.device.vendor || 'Unknown',
            deviceOs: result.os.name || 'Unknown',
            playerId,
            osVersion: result.os.version || 'Unknown',
            deviceModel: result.device.model || 'Unknown',
        });
    }, []);
    useEffect(() => {

        if (Boolean(userToken)) {
            navigate('/');
        } else {
            navigate('/auth/signIn');
        }
    }, []);

    return (
        <Grid container >

            <Grid item xs={6} md={5} >
                <BackButton label="Back" />
                <Box className="login-form-container">
                    <Typography className="form-title">{displayName}</Typography>
                    <Typography className="login-title">Log in</Typography>
                    <Typography className="welcome-message">Welcome back!</Typography>
                    <form className="form">
                        <InputText
                            type='email'
                            placeholder='Email'
                            value={email}
                            setValue={setEmail}
                            startAdornment={<img src={Email} alt='email' />}
                        />

                        <InputText
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            setValue={setPassword}
                            placeholder="Password"
                            startAdornment={<img src={Lock} alt='Password' />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff sx={{ color: '#98A2B3' }} /> : <Visibility sx={{ color: '#98A2B3' }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        <Box className="checkbox-container">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        icon={<Circle className="unchecked-icon" />}
                                        checkedIcon={<Circle className="checked-icon" sx={{ color: '#B20000' }} />}
                                    />
                                }
                                label="Remember Me"
                                className="remember-me-label"
                                color='#667085'
                            />
                            <Typography
                                onClick={handleForgotPasswordClick}
                                className="forgot-password-text"
                            >
                                Forgot password?
                            </Typography>
                        </Box>
                        <GradientButton variant="contained" onClick={handleClick}
                            disabled={loading}>
                            {loading && <LazyLoading />}
                            Login
                        </GradientButton>
                        <Typography textAlign='center'>
                            Or log in with
                        </Typography>

                        <SocialButtons
                            onGoogleLogin={handleGoogleLogin}
                            onFacebookLogin={handleFacebookLogin}
                        />

                        <Box className="typography-container">
                            <Typography >
                                Don't have an account?
                            </Typography>
                            <Typography className="signup-typography"
                                onClick={() => navigate('/auth/signUp')}
                            >
                                Sign up
                            </Typography>
                        </Box>
                    </form>
                </Box>

            </Grid >
            <Grid item xs={6} md={7} >
                <img src={Pic} alt='pic' />
            </Grid>
        </Grid >
    );
};

export default SignIn;
