import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Arrow from '../../../assest/home/arrow-right.svg';



const Content: React.FC = () => {
    return (
        <Box width="40rem" display="flex" flexDirection="column">
            <Typography className="title">
                Create your new favorite collection
            </Typography>
            <Typography className="desc">
                Elevate your fashion journey by seamlessly connecting with skilled fashion designers and expert tailors. Our user-friendly tools empower you to bring your unique designs to life in a virtual space.
            </Typography>
            <Box display="flex" mt="2rem">
                <Link href="#/learn-more" underline="none" className="btn">
                    Learn More
                </Link>
                <Link href="/#/authenticated/hire-people" underline="none" className="btn">
                    Register Now
                    <img src={Arrow} alt="arrow-right" style={{ marginLeft: '1rem' }} />
                </Link>
            </Box>
        </Box>
    );
};

export default Content;
