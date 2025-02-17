
import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import './FashionBusinesses.scss';

const FashionBusinesses = ({ fashionImages }: any) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };



    return (
        <Box className="fashion-businesses">
            <Box className="left-column">
                <Typography  className="fashion-title">Our various fashion business is value-driven</Typography>
                <Typography variant="body1" className="fashion-description">
                Join our community and embark on a digital fashion revolution that transcends boundaries and celebrates the artistry of design.
                </Typography>
                <Button variant="contained" className="fashion-join-button">Join our community</Button>
            </Box>
            <Box className="right-column">
                <Slider {...settings} >
                    {fashionImages.map((image: any, index: any) => (
                        <div key={index} className="fashion-image-container">
                            <img src={image.image} alt={image.name} className="fashion-slider-image" />
                            <Box className="fashion-image-overlay">
                                <Typography >{image.name}</Typography>
                                <Typography variant="body2">{image.position}</Typography>
                            </Box>
                        </div>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default FashionBusinesses;
