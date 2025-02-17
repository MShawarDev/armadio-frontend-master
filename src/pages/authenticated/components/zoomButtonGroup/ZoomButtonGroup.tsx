import React, { useState } from 'react';
import { ButtonGroup, Button, Typography, Divider } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ZoomButtonGroup = () => {
    const [zoomLevel, setZoomLevel] = useState(100);

    const handleZoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 10, 100)); // Limit max zoom level to 100%
    };

    const handleZoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 10, 50)); // Limit min zoom level to 10%
    };

    return (
        <ButtonGroup variant="outlined" aria-label="zoom button group" sx={{
            p: 1, backgroundColor: "#EEEEEE", border: "1px solid #FFFFFF57"
        }}>


            <Button onClick={handleZoomIn} variant='text' sx={{ backgroundColor: '#fff', width: '2rem', height: '2rem' }}>
                <Add sx={{ color: "#000" }} />
            </Button>

            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <Button onClick={handleZoomOut} variant='text' sx={{ backgroundColor: '#fff', width: '2rem', height: '2rem' }}>
                <Remove sx={{ color: "#000" }} />
            </Button>

            <Button disabled sx={{ width: "fit-content", height: '2rem' }} variant='text'>
                <Typography color='#000'>{zoomLevel}%</Typography>
            </Button>
        </ButtonGroup>
    );
};

export default ZoomButtonGroup;
