import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { SocialButtonsProps } from '../../../types/components.types';
import GoogleIcon from '../../../assest/login/google.png';
import FacebookIcon from '../../../assest/login/facebook.svg';

const SocialButtons: React.FC<SocialButtonsProps> = ({ onGoogleLogin, onFacebookLogin }) => {
    return (
        <div className="button-container">
            <Button
                variant="outlined"
                startIcon={<img src={GoogleIcon} alt="Google" />}
                onClick={onGoogleLogin}
                className="button"
            >
                Google
            </Button>
            <Button
                variant="outlined"
                startIcon={<img src={FacebookIcon} alt="Facebook" />}
                onClick={onFacebookLogin}
                className="button"
            >
                Facebook
            </Button>
        </div>
    );
};

SocialButtons.propTypes = {
    onGoogleLogin: PropTypes.func.isRequired,
    onFacebookLogin: PropTypes.func.isRequired,
};

export default SocialButtons;
