import React, { useState } from 'react';
import {
    Box, Typography, Button, List, ListItem, ListItemText, Divider, TextField, MenuItem, Select, FormControl, InputLabel, Grid
} from '@mui/material';
interface ServiceRequesterItemProps {
    data: {
        serviceProdviderType?: string
        items?: Array<{ name: string; qty: number }>;
        date?: string;
        desc?: string;
        location?: string;
    };
    showDetails: boolean;
    setShowDetails: (value: boolean) => void;
}
const ServiceRequesterItem: React.FC<ServiceRequesterItemProps> = ({ data, showDetails, setShowDetails }) => {

    const handleApplyClick = () => {
        setShowDetails(!showDetails);
    };

    const timeOptions = ['1-2 days', '3-5 days', '1 week', '2 weeks'];

    return (
        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={showDetails ? 6 : 12}>
                <Box sx={{ backgroundColor: '#1A1A1A', p: 2 }}>
                    <Box display='flex' alignSelf='center' justifyContent='space-between'>
                        <Typography variant="subtitle1">{data?.serviceProdviderType}</Typography>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderColor: '#B20000' }} variant="outlined" onClick={handleApplyClick}>
                            Apply
                        </Button>
                    </Box>
                    {(data.items?.length ?? 0) > 0 && (
                        <Box my={2}>
                            <Typography variant="subtitle2">
                                Items
                            </Typography>
                            <List>
                                {data && data?.items && data.items.map((item: any, idx: number) => (
                                    <React.Fragment key={idx}>
                                        <ListItem secondaryAction={`(${item.qty})`} sx={{ fontSize: '12px !important' }}>
                                            <ListItemText primary={item.name} sx={{ fontSize: '12px !important' }} />
                                        </ListItem>
                                        <Divider sx={{ border: '0.1px solid #fff' }} />
                                    </React.Fragment>
                                ))}
                            </List>
                        </Box>
                    )}
                    {data.date &&
                        <Box my={2}>
                            <Typography variant="subtitle2">
                                Date
                            </Typography>
                            <Typography variant="body2" my={1}>
                                {data.date}
                            </Typography>
                            <Divider sx={{ border: '0.2px solid #fff' }} />
                        </Box>}
                    {data.desc &&
                        <Box my={2}>
                            <Typography variant="subtitle2">
                                Description
                            </Typography>
                            <Typography variant="body2" my={1}>
                                {data.desc}
                            </Typography>
                            <Divider sx={{ border: '0.2px solid #fff' }} />
                        </Box>}
                    {data.location &&
                        <Box my={2}>
                            <Typography variant="subtitle2">
                                Location
                            </Typography>
                            <Typography variant="body2" my={1}>
                                {data.location}
                            </Typography>
                            <Divider sx={{ border: '0.2px solid #fff' }} />
                        </Box>}
                </Box>
            </Grid>

            {showDetails && (
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: '#1A1A1A', p: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Apply for {data?.serviceProdviderType}
                        </Typography>
                        <Box sx={{ my: 4.5 }}>
                            <TextField
                                label="Price"
                                variant="outlined"
                                type='number'
                                fullWidth
                                InputProps={{
                                    sx: { color: '#fff', borderColor: '#fff' }
                                }}
                                InputLabelProps={{
                                    sx: { color: '#fff', fontSize: '14px' }
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel sx={{ color: '#fff' }}>Time Option</InputLabel>
                                <Select
                                    label="Time Option"
                                    sx={{
                                        fontSize: '14px',
                                        color: '#fff',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#fff',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#fff',
                                        },
                                    }}
                                    defaultValue=""
                                >
                                    {timeOptions.map((option, index) => (
                                        <MenuItem key={index} value={option}>{option}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <TextField
                                label="Notes"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                InputProps={{
                                    sx: { color: '#fff', borderColor: '#fff' }
                                }}
                                InputLabelProps={{
                                    sx: { color: '#fff', fontSize: '14px' }
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                    },
                                }}
                            />
                        </Box>
                        <Button variant="outlined" sx={{ textTransform: 'none', color: '#fff', border: '1px solid #B20000' }}>
                            Submit
                        </Button>
                    </Box>
                </Grid>
            )
            }
        </Grid >
    );
};

export default ServiceRequesterItem;
