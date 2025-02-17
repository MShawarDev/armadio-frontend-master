import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import CoverSection from '../../authenticated/components/coverSection/CoverSection';
import Shape from '../../../assest/app/faqs.png';
import Shape2 from '../../../assest/signup/signUp.jpeg';
import { CustomAccordion } from './components/CustomAccordion';

const FAQs = () => {

    const faq = [
        {
            question: 'How Do I Choose The Right Style Suit?',
            answer: 'Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.'
        },
        {
            question: 'What Details Do I Require?',
            answer: 'Lorem Ipsum is simply dummy text of the printing'
        },
        {
            question: 'How do I track my order?',
            answer: 'You can track your order by...'
        },
    ];
    return (
        <Box bgcolor={'#000'}>
            <CoverSection
                title="FAQs"
                breadcrumb="FAQs"
            />
            <Container
                sx={{
                    padding: '3rem',
                    color: '#fff',
                    display: 'flex',
                    gap: 10,
                    flexDirection: 'column'
                }}
            >
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <img src={Shape} alt="Shape not found " width={300} height={400} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="body2" gutterBottom>
                            FREQUENT QUERIES
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Questions About Tools?
                        </Typography>
                        <Box sx={{ py: 2 }}>
                            {faq.map((item, index) => (
                                <CustomAccordion key={index} question={item.question} answer={item.answer} />
                            ))}
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={8}>
                        <Typography variant="body2" gutterBottom>
                            FREQUENT QUERIES
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Questions About Fashion Market?
                        </Typography>
                        <Box sx={{ py: 2 }}>
                            {faq.map((item, index) => (
                                <CustomAccordion key={index} question={item.question} answer={item.answer} />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Shape2} alt="Shape not found " width={300} height={400} />

                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default FAQs;
