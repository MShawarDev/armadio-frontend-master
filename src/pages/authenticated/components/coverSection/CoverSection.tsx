import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import CoverImage from "../../../../assest/fashionMarket/cover.png"

interface CoverSectionProps {
    coverImage?: string;
    title: string;
    breadcrumb: string;
}
const CoverSection: React.FC<CoverSectionProps> = ({ coverImage, title, breadcrumb }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '275px',
                backgroundImage: `url(${coverImage ? coverImage : CoverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 90,
                    width: '100%',
                    color: '#fff',
                }}
            >
                <Container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="subtitle2" color='#B9B7B7'>
                        <Link href='/' underline='none' color="#B9B7B7">Home</Link> / {breadcrumb}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default CoverSection;
