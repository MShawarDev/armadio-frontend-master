import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Link, Checkbox, FormControl, FormControlLabel, FormGroup, styled, Button, Tabs, Tab, List, ListItem, ListItemText, IconButton, InputLabel, MenuItem, Modal, Select, TextField, FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants, TextFieldProps } from '@mui/material';
import "./FashionMarket.scss"
import { AddCircleOutline } from '@mui/icons-material';
import ServiceRequesterCard from './components/serviceRequesterCard/ServiceRequesterCard';
import LongArrow from "../../../assest/fashionMarket/see-all.png"
import Client from '../../../assest/fashionMarket/clients.png';
import CoverSection from '../components/coverSection/CoverSection';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';






const FashionMarket = () => {

    const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
        color: '#fff',
        '&.Mui-checked': {
            color: '#fff',
        },
        '&.MuiCheckbox-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                borderRadius: '2px',

            },
        },
        '&.Mui-checked .MuiSvgIcon-root': {
            fill: '#fff',
        },
    }));
    const StyledTabs = styled(Tabs)(({ theme }) => ({
        '& .MuiTabs-flexContainer': {
            gap: theme.spacing(1), // space between tabs
        },
        '& .MuiTabs-indicator': {
            display: 'none',
        },
    }));

    const StyledTab = styled(Tab)(({ theme }) => ({
        textTransform: 'none',
        padding: theme.spacing(1, 3),
        border: " 1px solid #667085",
        borderRaduis: "6px",
        fontSize: '14px',
        color: '#fff',
        '&.Mui-selected': {
            backgroundColor: "#950707",
            color: '#fff',
            border: " 1px solid #B20000",
        },
        '&:hover': {
            backgroundColor: "#950707",
        },
    }));

    const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any; }) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    };

    type SelectedServicesType = Record<string, boolean>;

    const [selectedServices, setSelectedServices] = React.useState<SelectedServicesType>({});
    const [selectedLocation, setSelectedLocation] = React.useState<SelectedServicesType>({});
    const [tabValue, setTabValue] = React.useState(0);
    const [showDetails, setShowDetails] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [serviceType, setServiceType] = useState('');
    const [items, setItems] = useState('');
    const [qty, setQty] = useState(1);
    const [date, setDate] = useState(null);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleQtyChange = (delta: number) => {
        setQty((prevQty) => Math.max(prevQty + delta, 1));
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission
        console.log({
            serviceType,
            items,
            qty,
            date,
            location,
            description
        });
        handleClose();
    };
    const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
        setTabValue(newValue);
    };

    const handleServiceChange = (event: { target: { name: any; checked: any; }; }) => {
        setSelectedServices({
            ...selectedServices,
            [event.target.name]: event.target.checked,
        });
    };
    const handleLocationChange = (event: { target: { name: any; checked: any; }; }) => {
        setSelectedLocation({
            ...selectedLocation,
            [event.target.name]: event.target.checked,
        });
    };

    const serviceProviders = [
        { name: 'Models' },
        { name: '3D Graphic Designers' },
        { name: 'Tailors' },
    ];

    const locations = [
        { name: 'Amman' },
        { name: 'Aqaba' },
        { name: 'Madaba' },
        { name: 'Irbid' },
    ];

    const serviceRequesters: any = [
        {
            serviceProdviderType: "3D Graphic Designers",
            date: '20.01.2024',
            desc: 'Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.',
            location: 'Amman, Jordan',
            items: [],
            showDetails: false
        },
        {
            serviceProdviderType: "3D Graphic Designers",
            date: '20.01.2024',
            desc: 'Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.',
            location: 'Amman, Jordan',
            items: [],
            showDetails: false
        },
        {
            serviceProdviderType: "3D Graphic Designers",
            date: '20.01.2024',
            desc: 'Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.',
            location: 'Amman, Jordan',
            items: [],
            showDetails: false
        },
        {
            serviceProdviderType: "Tailors",
            date: '20.01.2024',
            desc: 'Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.',
            location: 'Amman, Jordan',
            items: [
                {
                    name: 'Men Pants',
                    qty: 2,
                },
                {
                    name: 'Women Shirts',
                    qty: 1,
                },
            ],
            showDetails: false
        },
        {
            serviceProdviderType: "Models",
            date: '20.01.2024',
            desc: 'Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.',
            location: 'Amman, Jordan',
            items: [],
            showDetails: false
        },
    ]

    const clients = [
        Client,
        Client,
        Client,
        Client,
        Client,
        Client,
    ];

    const filteredRequesters = serviceRequesters.filter((requester: { serviceProdviderType: string | number; }) => selectedServices[requester.serviceProdviderType]);

    const groupedRequesters = filteredRequesters.reduce((groups: { [x: string]: any[]; }, requester: { serviceProdviderType: string | number; }) => {
        if (!groups[requester.serviceProdviderType]) {
            groups[requester.serviceProdviderType] = [];
        }
        groups[requester.serviceProdviderType].push(requester);
        return groups;
    }, {});



    return (
        <Box>
            {/* Cover Image Section */}
            <CoverSection
                title="Fashion Market"
                breadcrumb="Fashion Market"
            />

            {/* <Container className='fashion-market-container'> */}
            <Grid container spacing={3} className='fashion-market-container'>
                {/* Service Provider Type Section */}
                <Grid item xs={12} md={3} lg={3}>
                    <Box className="service-provider-container" >
                        <Typography variant="subtitle1" my={'1rem !important'}>
                            Service Provider Type
                        </Typography>
                        <FormControl component="fieldset">
                            <FormGroup>
                                {serviceProviders.map((provider) => (
                                    <FormControlLabel
                                        control={
                                            <CustomCheckbox
                                                checked={selectedServices[provider?.name] || false}
                                                onChange={handleServiceChange}
                                                name={provider.name}
                                            />
                                        }
                                        label={provider.name}
                                        key={provider.name}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                        <Typography variant="subtitle1" my={'1rem !important'} >
                            Location
                        </Typography>
                        <FormControl component="fieldset">
                            <FormGroup>
                                {locations.map((provider) => (
                                    <FormControlLabel
                                        control={
                                            <CustomCheckbox
                                                checked={selectedLocation[provider?.name] || false}
                                                onChange={handleLocationChange}
                                                name={provider.name}
                                            />
                                        }
                                        label={provider.name}
                                        key={provider.name}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'start'}>
                        <Box>
                            <StyledTabs
                                value={tabValue}
                                onChange={handleTabChange}
                                aria-label="styled tabs example"
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <StyledTab label="Service Requester" />
                                <StyledTab label="Service Provider" />
                            </StyledTabs>
                            <TabPanel value={tabValue} index={0}>
                                {Object.keys(groupedRequesters).map(serviceType => (
                                    <Box key={serviceType} sx={{ mb: 4, }} >
                                        <Box key={serviceType} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                            <Typography variant="h5" >
                                                {serviceType}
                                            </Typography>
                                            <Link sx={{ color: '#fff' }} underline='none'>
                                                See all results
                                                <img src={LongArrow} alt='sell all results icon not found' style={{ marginLeft: '0.5rem' }} />
                                            </Link>
                                        </Box>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                            {groupedRequesters[serviceType].map((requester: any, index: React.Key | null | undefined) => (
                                                <Grid item xs={2} sm={4} md={showDetails ? 8 : 6} key={index} mt={2}>
                                                    <ServiceRequesterCard
                                                        data={requester}
                                                        showDetails={showDetails}
                                                        setShowDetails={setShowDetails}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                ))}
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                Content for Tab 2
                            </TabPanel>

                        </Box>
                        <Box>
                            <Button
                                variant="outlined"
                                startIcon={<AddCircleOutline sx={{ color: "#fff" }} />}
                                sx={{ width: 200, padding: '0.5rem', fontSize: '14px', borderColor: '1px solid #667085', textTransform: 'none', color: "#fff", backgroundColor: '#1A1A1A' }}
                                onClick={handleOpen}
                            >
                                Add Request
                            </Button>
                        </Box>
                    </Box>


                </Grid >
            </Grid >

            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                }}
            >
                {clients.map((client, index) => (
                    <Box key={index} sx={{ minWidth: '150px', flexShrink: 0 }}>
                        <img src={client} alt={`Client ${index + 1}`} style={{ width: 300, height: 150, border: "solid #fff 0.3px" }} />
                    </Box>
                ))}
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: '#262626',
                        p: 4,
                        color: '#fff'
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
                        New  Request
                    </Typography>

                    <FormControl fullWidth margin="normal" sx={{ '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' } }, '& .MuiSvgIcon-root': { color: '#fff' } }}>
                        <InputLabel id="service-type-label">Service Provider Type</InputLabel>
                        <Select
                            labelId="service-type-label"
                            value={serviceType}
                            label="Service Provider Type"
                            onChange={(e) => setServiceType(e.target.value)}
                            style={{ color: "#fff" }}
                        >
                            <MenuItem value="3D Graphic Designers">3D Graphic Designers</MenuItem>
                            <MenuItem value="Tailors">Tailors</MenuItem>
                            <MenuItem value="Models">Models</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="normal" sx={{ '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' } }, '& .MuiSvgIcon-root': { color: '#fff' } }}>
                        <InputLabel id="items-label">Items</InputLabel>
                        <Select
                            labelId="items-label"
                            value={items}
                            label="Items"
                            onChange={(e) => setItems(e.target.value)}
                            style={{ color: "#fff" }}

                        >
                            <MenuItem value="Men Pants">Men Pants</MenuItem>
                            <MenuItem value="Women Shirts">Women Shirts</MenuItem>
                        </Select>
                    </FormControl>

                    <Box display="flex" alignItems="center" marginY={2}>
                        <IconButton onClick={() => handleQtyChange(-1)} sx={{ color: '#fff' }}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography>{qty}</Typography>
                        <IconButton onClick={() => handleQtyChange(1)} sx={{ color: '#fff' }}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            label="Select Date"
                            value={date}
                            onChange={(newDate: any) => setDate(newDate)}
                            minDate={moment()}

                            sx={{
                                width: '100%',
                                color: "#fff",
                                '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': { color: '#fff', },
                                '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': { color: '#fff', },
                                '& .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root': { color: '#fff', },
                                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': { color: '#fff', },
                                '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, },
                                '& .MuiInputLabel-root': { color: '#fff' },
                                '& .MuiSvgIcon-root': { color: '#fff' }
                            }}
                        />
                    </LocalizationProvider>

                    <FormControl fullWidth margin="normal" sx={{ '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' } }, '& .MuiSvgIcon-root': { color: '#fff' } }}>
                        <InputLabel id="location-label">Location</InputLabel>
                        <Select
                            labelId="location-label"
                            value={location}
                            label="Location"
                            onChange={(e) => setLocation(e.target.value)}
                            style={{ color: "#fff" }}

                        >
                            <MenuItem value="Amman, Jordan">Amman, Jordan</MenuItem>
                            <MenuItem value="Cairo, Egypt">Cairo, Egypt</MenuItem>
                            <MenuItem value="Dubai, UAE">Dubai, UAE</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff', color: '#fff !important' } }, '& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root': { color: '#fff' } }}

                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, backgroundColor: '#B20000', color: '#fff' }}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Box>
            </Modal >
        </Box >
    );
};

export default FashionMarket;
