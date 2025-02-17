import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label = 'Back' }) => {

    const navigate = useNavigate();


    const handleBack = () => {
        navigate(-1)
    };

    return (
        <Box display='flex' alignItems='center' p='0.5rem' >
            <IconButton onClick={handleBack} sx={{ color: '#675E5E' }}>
                <ArrowBackIosNewOutlinedIcon />
            </IconButton>
            <Typography color='#261A1A'>{label}</Typography>
        </Box>
    );
};

export default BackButton;
