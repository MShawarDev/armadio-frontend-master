import { FC, useState } from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import BackButton from '../../../components/backButton/BackButton';
import InputText from '../../../components/inputText/InputText';
import GradientButton from '../../../components/gradientButton/GradientButton';
import Email from '../../../assest/login/email.svg';
import '../signin/SignInFormStyles.scss'
import Pic from '../../../assest/login/login-pic.jpeg';
import { useNavigate } from 'react-router-dom';
import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';
import { signInValidtions } from '../../../helpers/authValidtions';
import { IRegisterRequestPaylod } from '../../../types/api/api.types';
import { authRoute } from '../../../api/axios/apiRoute';
import { toastify } from '../../../helpers/toastify/toastify';
import { AxiosError } from 'axios';
import { LazyLoading } from '../../../components/lazyLoading';

const { displayName } = require('../../../app.json');

const ForgetPassword: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [sentEmail, setSentEmail] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();


    const handleClick = async (): Promise<void> => {
        const vaild: boolean = signInValidtions(email, "00000000")
        if (vaild) {
            try {
                setLoading(true);

                const body: IRegisterRequestPaylod = {
                    email: email,
                    password: "00000000"
                };

                const { data, status } = await authRoute.ForgetPassword(body);
                console.log(data, 'data')
                setSentEmail(true)
                if (status === 200) {
                    setSentEmail(true)
                } else {
                    toastify(data?.responseMessage, 'error', 2000);
                }
                setLoading(false);
            } catch (error: AxiosError | any) {
                setSentEmail(true)
                const errorMessage = error?.response?.data?.title || 'An error occurred';
                toastify(errorMessage, 'warn', 2000);
                setLoading(false);
            }
        }

    };
    return (
        <Grid container >

            <Grid item xs={6} md={5} >
                <BackButton label="Back" />
                <Box className="login-form-container" >
                    <Typography className="form-title">{displayName}</Typography>
                    {!sentEmail ? <>
                        <Typography className="login-title">Recover your password</Typography>
                        <Typography
                            variant="caption"
                            className="welcome-message"
                            textAlign='center' width='24rem' >
                            Enter the email that you used when you signed up to recover your password.
                            You will receive a password reset link.
                        </Typography>
                        <form className="form" >
                            <InputText
                                type='email'
                                placeholder='Email'
                                value={email}
                                setValue={setEmail}
                                startAdornment={<img src={Email} alt="email" />}
                            />

                            <GradientButton variant="contained" onClick={handleClick} disabled={loading}>
                                {loading && <LazyLoading />}
                                Send link
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
                    </> :
                        <Box className='typography-container' flexDirection='column' width='22rem'>
                            <MarkEmailUnreadTwoToneIcon sx={{ color: '#667085', fontSize: '5rem', mt: '2rem' }} />
                            <Typography textAlign='center'>We've sent you an email with a link to reset your password.</Typography>
                            <Typography variant="caption" textAlign='center'>
                                Check your spam and promotions folder if it doesn't appear in your main mailbox.
                            </Typography>
                            <Typography sx={{ cursor: 'pointer', mt: '1rem' }}>
                                Didn’t receive the email?
                            </Typography>
                        </Box>}
                </Box>

            </Grid >
            <Grid item xs={6} md={7} >
                <img src={Pic} />
            </Grid>
        </Grid >
    );
};

export default ForgetPassword;
