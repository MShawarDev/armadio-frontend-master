import { FC, useState } from 'react';
import BackButton from '../../../components/backButton/BackButton';
import InputText from '../../../components/inputText/InputText';
import GradientButton from '../../../components/gradientButton/GradientButton';
import '../signin/SignInFormStyles.scss'
import Pic from '../../../assest/login/login-pic.jpeg';
import Lock from '../../../assest/login/lock.svg';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, IconButton, InputAdornment, Typography, } from '@mui/material';
import { Visibility, VisibilityOff, } from '@mui/icons-material';

const { displayName } = require('../../../app.json');


const UpdatePassword: FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const navigate = useNavigate();




    const handleClick = () => {

    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    return (
        <Grid container >

            <Grid item xs={6} md={5} >
                <BackButton label="Back" />
                <Box className="login-form-container" >
                    <Typography className="form-title">{displayName}</Typography>

                    <Typography variant='h6' marginTop='4rem !important'>Update password</Typography>

                    <form className="form" >
                        <InputText
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            setValue={setPassword}
                            placeholder="New password"
                            startAdornment={<img src={Lock} />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff sx={{ color: '#98A2B3' }} /> : <Visibility sx={{ color: '#98A2B3' }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <InputText
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="password"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            placeholder="Confirm password"
                            startAdornment={<img src={Lock} />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showConfirmPassword ? <VisibilityOff sx={{ color: '#98A2B3' }} /> : <Visibility sx={{ color: '#98A2B3' }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        <GradientButton variant="contained" onClick={handleClick}>
                            Set new password
                        </GradientButton>
                        <Box className='typography-container' flexDirection='column'>
                            <Typography
                                variant="caption"
                                className="welcome-message"
                            >
                                If you need further assistance
                            </Typography>
                            <Typography
                                variant="caption"
                                className="signup-typography"
                            >
                                contact our support team
                            </Typography>
                        </Box>

                    </form>

                </Box>

            </Grid >
            <Grid item xs={6} md={7} >
                <img src={Pic} />
            </Grid>
        </Grid >
    );
};

export default UpdatePassword;
