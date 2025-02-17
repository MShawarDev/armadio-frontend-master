import React, { FC, useState } from 'react';
import { Box, Grid, IconButton, InputAdornment, Typography, Checkbox, FormControlLabel, } from '@mui/material';
import { Visibility, VisibilityOff, } from '@mui/icons-material';
import BackButton from '../../../components/backButton/BackButton';
import InputText from '../../../components/inputText/InputText';
import GradientButton from '../../../components/gradientButton/GradientButton';
import Email from '../../../assest/login/email.svg';
import Lock from '../../../assest/login/lock.svg';
import Name from '../../../assest/signup/name.svg';
import '../signin/SignInFormStyles.scss'
import SocialButtons from '../components/SocialButtons';
import Pic from '../../../assest/signup/signUp.jpeg';
import { useNavigate } from 'react-router-dom';
import { StrengthIndicator } from '../../../types/components.types';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { signUpValidtions } from '../../../helpers/authValidtions';
import { IRegisterRequestPaylod } from '../../../types/api/api.types';
import { authRoute } from '../../../api/axios/apiRoute';
import { toastify } from '../../../helpers/toastify/toastify';
import { AxiosError } from 'axios';
import { LazyLoading } from '../../../components/lazyLoading';

const { displayName } = require('../../../app.json');

const SignUp: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [strength, setStrength] = useState<StrengthIndicator | null>(null);
    const [name, setName] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? strength?.color : '#308fe8',
        },
    }));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleClick = async (): Promise<void> => {
        const vaild: boolean = signUpValidtions(name, email, password, checked)
        if (vaild) {
            try {
                setLoading(true);

                const body: IRegisterRequestPaylod = {
                    email: email,
                    password: password,
                    fullName: name
                };

                const { data, status } = await authRoute.Register(body);
                if (status === 200 && data?.httpStatusCode === 200) {
                    toastify("You have been registered successfully. Please proceed to login.", 'error', 2000);
                    //dispatch(setAuthToken(data?.data?.accessToken));
                } else {
                    toastify(data?.responseMessage || data?.data || 'An error occurred', 'error', 2000);
                }
                setLoading(false);

            } catch (error: AxiosError | any) {
                const errorMessage = error.response.data?.data || error.request || error.message || 'An error occurred';
                toastify(errorMessage, 'error', 2000);
                setLoading(false);
            }

        }
    }
    const handleFacebookLogin = () => {
        console.log('Facebook login clicked');
    };
    const handleGoogleLogin = () => {
        console.log('Google login clicked');
    };
    const handlePasswordChange = (event: { target: { value: any; }; }) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        const strengthIndicator = testPasswordStrength(newPassword);
        setStrength(strengthIndicator);
    };

    const testPasswordStrength = (password: string | any[]) => {
        let passwordStrengthobj;
        if (password.length < 8) {
            passwordStrengthobj = {
                label: 'Weak',
                hint: 'This password is easy to guess. Please use at least 8 characters.',
                count: 33.33,
                color: '#E02020'
            };
        } else if (password.length < 12) {
            passwordStrengthobj = {
                label: 'Fair',
                hint: 'Ready to use but still guessable. Please use over 12 characters.',
                count: 66.67,
                color: '#FA6400'
            };
        } else {
            passwordStrengthobj = {
                label: 'Strong',
                hint: 'Your password is excellent. You are good to go!',
                count: 100,
                color: '#54A102'
            };
        }
        return passwordStrengthobj;
    };

    return (
        <Grid container >

            <Grid item xs={6} md={5} >
                <BackButton label="Back" />
                <Box className="login-form-container">
                    <Typography className="form-title">{displayName}</Typography>
                    <Typography className="login-title">Create your account</Typography>
                    <Typography className="welcome-message">Let's create an account and start a wonderful journey</Typography>
                    <form className="form">
                        <InputText
                            placeholder='Full Name'
                            value={name}
                            setValue={setName}
                            startAdornment={<img src={Name} alt='Full Name' />}
                        />
                        <InputText
                            type='email'
                            placeholder='Email'
                            value={email}
                            setValue={setEmail}
                            startAdornment={<img src={Email} alt='Email' />}
                        />

                        <InputText
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                            startAdornment={<img src={Lock} alt='password' />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff sx={{ color: '#98A2B3' }} /> : <Visibility sx={{ color: '#98A2B3' }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        {password &&
                            <Box>
                                <BorderLinearProgress variant="determinate" value={strength?.count} />
                                <Typography sx={{ color: strength?.color }}>
                                    {strength?.label}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#667085' }}>
                                    {strength?.hint}
                                </Typography>
                            </Box>}


                        <Box className="checkbox-container">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                }
                                label="I agree to all Term, Privacy Policy and Fees"
                                className="remember-me-label"
                                color='#667085'
                            />
                        </Box>
                        <GradientButton
                            disabled={loading}
                            variant="contained"
                            onClick={handleClick}>
                            {loading && <LazyLoading />}
                            sign up
                        </GradientButton>
                        <Typography textAlign='center'>
                            Or sign up with
                        </Typography>

                        <SocialButtons
                            onGoogleLogin={handleGoogleLogin}
                            onFacebookLogin={handleFacebookLogin}
                        />

                        <Box className="typography-container">
                            <Typography >
                                Already have an account?
                            </Typography>
                            <Typography className="signup-typography" onClick={() => navigate('/auth/signIn')}
                            >
                                Sign in
                            </Typography>
                        </Box>
                    </form>
                </Box>

            </Grid>
            <Grid item xs={6} md={7} >
                <img src={Pic} alt='pic' />
            </Grid>
        </Grid>
    );
};

export default SignUp;
