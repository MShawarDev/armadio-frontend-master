import React from 'react';
import './ArmadioVirtualeTestimonials.scss';
import User from "../../../../assest/home/data/user.jpeg"
import { Box, Grid, Card, CardContent, Rating, Typography, Avatar } from '@mui/material';


const ArmadioVirtualeTestimonials: React.FC = () => {
    const list: any = [
        {
            rate: 3,
            text: 'ArmadioVirtuale is a really great site with really great people and the quality of content is excellent. Some of the best stylish in the world use this',
            user: {
                image: User,
                name: 'David Nyoman',
                role: "Fashion Designer"
            },
        },
        {
            rate: 5,
            text: 'ArmadioVirtuale is a really great site with really great people and the quality of content is excellent. Some of the best stylish in the world use this',
            user: {
                image: User,
                name: 'Angela Karamoy',
                role: "Fashion Stylist"
            },
        }
    ]
    return (
        <div className="testimonials-section-container">
            <h3 className='testimonials-section-title'>ArmadioVirtuale Testimonial’s</h3>
            <Box sx={{ flexGrow: 1, mt: '3rem' }}>
                <Grid container spacing={4}>
                    {list.map((review: any, index: number) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card className='testimonials-section'>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Rating value={review.rate} readOnly size="large" sx={{ color: 'red' }} />
                                    <Typography variant="body1" paragraph mt='2rem'>
                                        {review.text}
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt={review.user.name} src={review.user.image} />
                                    <Box sx={{ marginLeft: 2 }}>
                                        <Typography variant="subtitle1">{review.user.name}</Typography>
                                        <Typography variant="body2" color="#262626">{review.user.role}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default ArmadioVirtualeTestimonials;
