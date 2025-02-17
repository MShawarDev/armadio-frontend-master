import React from 'react';
import { Box, Grid, Typography, Icon } from '@mui/material';
import './ServiceSection.scss'
import LocalShippingIcon from "../../../../assest/home/services/LocalShippingIcon.jpeg"
import BuildIcon from "../../../../assest/home/services/BuildIcon.jpeg"
import SecurityIcon from "../../../../assest/home/services/SecurityIcon.jpeg"
import SupportIcon from "../../../../assest/home/services/SupportIcon.jpeg"

const services = [
    {
        icon: LocalShippingIcon,
        title: 'Custom Design Platform',
        description: 'Our platform specializes in the fashion industry, allowing users to select and customize designs by professional designers, bringing detailed textile creations to life.',
    },
    {
        icon: BuildIcon,
        title: 'Virtual Drawing Board',
        description: 'A space for aspiring designers to create unique designs or request custom designs from fashion designers, fostering creativity and innovation.',
    },
    {
        icon: SecurityIcon,
        title: 'Virtual Shop and AI Tools',
        description: 'A marketplace for designers to showcase their products, featuring AI search algorithms for trend identification, 3D modeling, and comprehensive administrative tools..',
    },
    {
        icon: SupportIcon,
        title: 'Freelance Marketplace',
        description: 'Connect with fashion models, photographers, tailors, and 3D graphic designers for service requests, secure payments, and high-quality project delivery.',
    },
];
interface ServiceSectionProps {
    home?: boolean;
}
const ServiceSection: React.FC<ServiceSectionProps> = ({ home }) => {

    return (
        <Box className={home ? 'service-section' : 'service-section-2'}>
            <h3 className='service-section-title'>Our Services</h3>

            <Grid container sx={{ justifyContent: 'center', p: home ? '5rem' : '2rem', mt: 1 }}>
                {services.map((service, index) => (
                    <Grid
                        item
                        xs={12}
                        md={3}
                        lg={3}
                        key={index}
                        className={index === services.length - 1 ? "last-service-item" : "service-item "}
                        sx={{ color: "#fff" }}
                    >
                        <img src={service.icon} alt={service.title} width={75} height={75} />
                        <Typography variant="h6">{service.title}</Typography>
                        <Typography variant="body1">{service.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceSection;
