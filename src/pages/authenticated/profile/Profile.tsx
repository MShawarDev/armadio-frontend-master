import React, { useState } from 'react';
import { Box, Button, Tabs, Tab, Avatar, Typography, Divider, Modal, IconButton, FormControlLabel, InputAdornment, MenuItem, Switch, TextField, createTheme, ThemeProvider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './Profile.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';


const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputLabel-root': {
                        color: '#fff',
                    },
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
                        '& input': {
                            color: '#fff',
                        },
                    },
                },
            },
        },
    },
});
type ShowPasswordKeys = 'currentPassword' | 'newPassword' | 'confirmNewPassword';
type FormError = {
    [key: string]: string | undefined;
};
interface Measurements {
    height?: string | undefined;
    sleeves?: string | undefined;
    chest?: string | undefined;
    waist?: string | undefined;
    [key: string]: string | undefined;
}
const ProfilePage = () => {
    const { fullName, password, email } = useSelector(
        (state: IRootState) => state?.Auth,
    );
    const [activeTab, setActiveTab] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedRequest, setSelectedRequest] = useState<any>(null);
    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmNewPassword: false,
    });
    const [formValues, setFormValues] = useState<{
        fullName: string;
        email: string;
        phoneNumber: string;
        gender: string;
        about: string;
        currentPassword: string;
        newPassword: string;
        confirmNewPassword: string;
        measurements: Measurements; // Use the Measurements interface here
    }>({
        fullName: fullName,
        email: email,
        phoneNumber: '123-456-7890',
        gender: 'Male',
        about: 'This is an about text.',
        currentPassword: password,
        newPassword: '',
        confirmNewPassword: '',
        measurements: {
            height: '',
            sleeves: '',
            chest: '',
            waist: '',
        },
    });
    const [formErrors, setFormErrors] = useState<FormError>({});
    const [unit, setUnit] = useState('cm');



    const handleTogglePasswordVisibility = (field: ShowPasswordKeys) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const requests = [
        {
            id: 1,
            applies: 2,
            type: "3D Graphic Designer",
            date: "20.01.2024",
            description: "Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.",
            location: "Amman, Jordan",
            appliesDetails: [
                {
                    id: 1,
                    name: "Ahmad Jadallah",
                    image: "https://via.placeholder.com/50",
                    price: "500",
                    notes: "Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.",
                },
                {
                    id: 2,
                    name: "Samar Ahmad",
                    image: "https://via.placeholder.com/50",
                    price: "600",
                    notes: "Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.",
                },
            ],
        },
        {
            id: 2,
            applies: 1,
            type: "3D Graphic Designer",
            date: "20.01.2024",
            description: "Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.",
            location: "Amman, Jordan",
            appliesDetails: [
                {
                    id: 1,
                    name: "Samar Ahmad",
                    image: "https://via.placeholder.com/50",
                    price: "500",
                    notes: "I am experienced in 3D design.",
                },
            ],
        },

    ];
    const handleTabChange = (event: any, newValue: any) => {
        setActiveTab(newValue);
    };
    const handleOpenModal = (request: any) => {
        setSelectedRequest(request);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedRequest(null);
    };


    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleMeasurementChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            measurements: {
                ...prevValues.measurements,
                [name]: value,
            },
        }));
    };

    const validateForm = () => {
        let errors: FormError = {}; // Initialize errors as an empty object

        // Password validation
        if (formValues.newPassword.length < 7) {
            errors.newPassword = 'Password must be at least 7 characters long';
        }
        if (!/[a-z]/.test(formValues.newPassword) || !/[A-Z]/.test(formValues.newPassword)) {
            errors.newPassword = 'Password must contain at least one lowercase and one uppercase letter';
        }
        if (!/[0-9]/.test(formValues.newPassword)) {
            errors.newPassword = 'Password must contain at least one number';
        }
        if (formValues.newPassword !== formValues.confirmNewPassword) {
            errors.confirmNewPassword = 'Passwords do not match';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form (e.g., make an API call)
            console.log('Form submitted successfully', formValues);
        }
    };
    return (
        <ThemeProvider theme={theme} >
            <Box className="profile-page">
                <Box className="cover-container">
                    <img
                        src="https://via.placeholder.com/1200x300"
                        alt="Cover"
                        className="cover-image"
                    />
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        className="edit-cover-button"
                    >
                        Edit Cover
                    </Button>
                    <Avatar
                        src="https://via.placeholder.com/200"
                        alt="Profile"
                        className="profile-image"
                    />
                </Box>
                <Box className="profile-info-container">

                    <Box className="profile-text-container">
                        <Typography variant="h5" className="profile-name">
                            Khaled Hadia
                        </Typography>
                        <Typography variant="body1" className="profile-intro">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </Typography>
                    </Box>
                </Box>
                <Box className="tabs-container">
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        aria-label="profile tabs"
                        variant="fullWidth"
                        TabIndicatorProps={{
                            style: {
                                display: "none"
                            }
                        }}
                    >
                        <Tab label="About" className={`tab ${activeTab === 0 ? 'active' : ''}`} />
                        <Tab label="My Requests" className={`tab ${activeTab === 1 ? 'active' : ''}`} />
                        <Tab label="Settings" className={`tab ${activeTab === 2 ? 'active' : ''}`} />
                    </Tabs>
                    <Box className={`${activeTab === 0 ? 'tab-content' : 'tab-content-2'}`}>

                        {activeTab === 0 &&
                            <Box>
                                <Typography variant='h6'>About</Typography>
                                <Typography variant='body2' mt={2} sx={{ color: '#939393' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                            </Box>}

                        {activeTab === 1 && (
                            <Box className="requests-container">
                                {requests.map((request) => (
                                    <Box key={request.id} className="request-item">
                                        <Box onClick={() => handleOpenModal(request)}>
                                            <Typography className="request-applies">{request.appliesDetails.length} Applies</Typography>
                                        </Box>
                                        <Box className="request-details">
                                            <Typography variant="h6" >{request.type}</Typography>
                                            <Typography variant="subtitle2">Date:</Typography>
                                            <Typography variant="body2">{request.date}</Typography>
                                            <Divider sx={{ border: '0.2px solid #667085' }} />
                                            <Typography variant="subtitle2">Description: </Typography>
                                            <Typography variant="body2"> {request.description}</Typography>
                                            <Divider sx={{ border: '0.2px solid #667085' }} />
                                            <Typography variant="subtitle2">Location: </Typography>
                                            <Typography variant="body2"> {request.location}</Typography>
                                            <Divider sx={{ border: '0.2px solid #667085' }} />
                                        </Box>
                                    </Box>
                                ))}
                                <Modal open={openModal} onClose={handleCloseModal}>
                                    <Box className="modal-content">
                                        <IconButton className="close-button" onClick={handleCloseModal}>
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="h6" className="apply-type">{selectedRequest && selectedRequest?.type}</Typography>
                                        {selectedRequest && selectedRequest.appliesDetails.map((apply: any) => (
                                            <Box key={apply.id} className="apply-item">
                                                <Box display={'flex'}>
                                                    <Avatar src={apply.image} alt={apply.name} className="apply-image" />
                                                    <Typography variant="h6" className="apply-details">{apply.name}</Typography>
                                                </Box>

                                                <Box className="apply-details">
                                                    <Box display={'flex'} gap={10} my={2}>
                                                        <Box display={'flex'} gap={1} flexDirection={'column'}>
                                                            <Typography variant="subtitle2">Price (JOD)</Typography>
                                                            <Typography variant="subtitle2">{apply.price}</Typography>
                                                            <Divider sx={{ border: '0.2px solid #667085' }} />
                                                        </Box>
                                                        <Box display={'flex'} gap={1} flexDirection={'column'}>
                                                            <Typography variant="subtitle2">Time</Typography>
                                                            <Typography variant="subtitle2">{'3-5 Days'}</Typography>
                                                            <Divider sx={{ border: '0.2px solid #667085' }} />
                                                        </Box>
                                                    </Box>

                                                    <Typography variant="subtitle2">Notes</Typography>
                                                    <Typography variant="body2" mt={2}>{apply.notes}</Typography>
                                                    <Divider sx={{ border: '0.2px solid #667085', my: 2 }} />

                                                    <Box className="apply-actions">
                                                        <Button variant="contained" className='decline-btn' fullWidth>
                                                            Decline
                                                        </Button>
                                                        <Button variant="contained" className='approve-btn' fullWidth >
                                                            Accept
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Modal>
                            </Box>
                        )}
                        {activeTab === 2 && (
                            <form onSubmit={handleSubmit} className="settings-container">
                                <Box className="settings-box">
                                    <Typography variant="h6">Personal Information</Typography>
                                    <Box className="personal-info-row">
                                        <TextField
                                            className='personal-info-input'
                                            label="Full Name"
                                            name="fullName"
                                            value={formValues.fullName}
                                            onChange={handleInputChange}
                                        />

                                        <TextField
                                            className='personal-info-input'
                                            label="Email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleInputChange}
                                        />
                                        <TextField
                                            className='personal-info-input'
                                            label="Phone Number"
                                            name="phoneNumber"
                                            value={formValues.phoneNumber}
                                            onChange={handleInputChange}
                                        />
                                        <TextField className='personal-info-input' select
                                            label="Gender"
                                            name="gender"
                                            value={formValues.gender}
                                            onChange={handleInputChange}>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                        </TextField>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box className="settings-box">
                                    <Typography variant="h6">About</Typography>
                                    <TextField
                                        name="about"
                                        value={formValues.about}
                                        onChange={handleInputChange}
                                        multiline sx={{ mt: 1 }}
                                        rows={4}
                                        fullWidth />
                                </Box>
                                <Divider />
                                <Box className="settings-box">
                                    <Typography variant="h6">Password</Typography>
                                    <Box className="password-section">
                                        <TextField
                                            type={showPassword.currentPassword ? 'text' : 'password'}
                                            label="Current Password"
                                            name="currentPassword"
                                            value={formValues.currentPassword}
                                            onChange={handleInputChange}
                                            InputLabelProps={{ style: { color: '#fff' } }}
                                            InputProps={{
                                                style: { color: '#fff', borderColor: '#fff' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => handleTogglePasswordVisibility('currentPassword')}>
                                                            {showPassword.currentPassword ? <Visibility style={{ color: '#fff' }} /> : <VisibilityOff style={{ color: '#fff' }} />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}

                                        />
                                        <TextField
                                            type={showPassword.newPassword ? 'text' : 'password'}
                                            label="New Password"
                                            name="newPassword"
                                            value={formValues.newPassword}
                                            onChange={handleInputChange}
                                            error={Boolean(formErrors.newPassword)}
                                            helperText={formErrors.newPassword}
                                            InputLabelProps={{ style: { color: '#fff' } }}
                                            InputProps={{
                                                style: { color: '#fff', borderColor: '#fff' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => handleTogglePasswordVisibility('newPassword')}>
                                                            {showPassword.newPassword ? <Visibility style={{ color: '#fff' }} /> : <VisibilityOff style={{ color: '#fff' }} />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{ fieldset: { borderColor: '#fff' }, input: { color: '#fff' } }}
                                        />
                                        <TextField
                                            type={showPassword.confirmNewPassword ? 'text' : 'password'}
                                            label="Confirm New Password"
                                            name="confirmNewPassword"
                                            value={formValues.confirmNewPassword}
                                            onChange={handleInputChange}
                                            error={Boolean(formErrors.confirmNewPassword)}
                                            helperText={formErrors.confirmNewPassword}
                                            InputLabelProps={{ style: { color: '#fff' } }}
                                            InputProps={{
                                                style: { color: '#fff', borderColor: '#fff' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => handleTogglePasswordVisibility('confirmNewPassword')}>
                                                            {showPassword.confirmNewPassword ? <Visibility style={{ color: '#fff' }} /> : <VisibilityOff style={{ color: '#fff' }} />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}

                                        />
                                        <Typography variant="caption">
                                            At least 7 characters<br />
                                            One lowercase and one uppercase letter<br />
                                            One Number
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box className="settings-box">
                                    <Typography variant="h6">Make it Fit</Typography>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={unit === 'cm'}
                                                onChange={(e) => setUnit(e.target.checked ? 'cm' : 'inch')}
                                                name="unitSwitch"
                                                color="primary"
                                            />
                                        }
                                        label={unit === 'cm' ? 'Centimeters' : 'Inches'}
                                    />
                                    <Box className="measurements-row">
                                        {['Height', 'Sleeves', 'Chest', 'Waist'].map((measure) => (
                                            <TextField
                                                key={measure}
                                                label={measure}
                                                name={measure.toLowerCase()}
                                                value={formValues.measurements[measure.toLowerCase()]}
                                                onChange={handleMeasurementChange}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,

                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                                <Button className="update-button" type="submit">Update</Button>
                            </form>
                        )}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>

    );
};

export default ProfilePage;
