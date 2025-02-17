import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import CoverSection from '../../authenticated/components/coverSection/CoverSection';

const ContactUs = () => {


    return (
        <Box bgcolor={'#000'}>
            <CoverSection
                title="Contact"
                breadcrumb="Contact"
            />
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '3rem',
                    color: '#fff'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 600,
                        backgroundColor: '#1A1A1A',
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant="body2" gutterBottom>
                        PLEASE ELABORATE ON YOUR NEEDS
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Please Use This Form For Any General Queries & Concerns.
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Your Name*"
                            variant="standard"
                            margin="normal"
                            InputLabelProps={{
                                style: { color: '#fff', fontSize: '14px' },
                            }}
                            InputProps={{
                                style: { color: '#fff' },
                                disableUnderline: false,
                            }}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Your Email ID*"
                            variant="standard"
                            margin="normal"
                            type="email"
                            InputLabelProps={{
                                style: { color: '#fff', fontSize: '14px' },
                            }}
                            InputProps={{
                                style: { color: '#fff' },
                                disableUnderline: false,
                            }}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Your Message"
                            variant="standard"
                            margin="normal"
                            InputLabelProps={{
                                style: { color: '#fff', fontSize: '14px' },
                            }}
                            InputProps={{
                                style: { color: '#fff' },
                                disableUnderline: false,
                            }}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            }}
                            multiline
                            rows={4}
                        />
                        <Button
                            variant="contained"
                            sx={{ mt: 3, backgroundColor: '#B20000', color: '#fff', alignSelf: 'end' }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
};

export default ContactUs;
