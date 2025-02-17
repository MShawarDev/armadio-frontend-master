import React, { useState } from 'react';
import { Box, Button, Tabs, Tab, Avatar, Typography, Divider, Modal, IconButton, FormControlLabel, InputAdornment, MenuItem, Switch, TextField, createTheme, ThemeProvider, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import './Profile.scss';
import CloseIcon from '@mui/icons-material/Close';
import {
    LocationOn,
    Language,
    CalendarToday,
    PhotoCamera,
    Comment,
    Favorite,
    Share,
    Save,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';
import Person from '../../../assest/home/data/fashion/1.jpeg'

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
type CommentsState = {
    [key: string | number]: boolean;
};
const UserProfile = () => {
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
    const [showMore, setShowMore] = useState(false);
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: {
                name: 'Ahmad Nur Fawaid',
                profileImage: Person,
            },
            content: 'In publishing and graphic design,',
            date: '2024-07-01 10:30 AM',
            images: [Person, Person],
            comments: [{ id: 1, user: 'Jane Smith', content: 'Great post!' }],
            likes: 10,
            shares: 2,
            saves: 1,
        },
        {
            id: 2,
            user: {
                name: 'Ahmad Nur Fawaid',
                profileImage: Person,
            },
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
            date: '2024-07-05 02:15 PM',
            images: [],
            comments: [{ id: 1, user: 'Ahmad Nur Fawaid', content: 'Nice!' }],
            likes: 20,
            shares: 3,
            saves: 5,
        },
    ]);
    const [newPostContent, setNewPostContent] = useState('');
    const [showComments, setShowComments] = useState<CommentsState>({});

    const handlePost = () => {
        if (newPostContent.trim()) {
            const newPost = {
                id: posts.length + 1,
                user: {
                    name: 'Current User',
                    profileImage: 'current-user-profile.jpg',
                },
                content: newPostContent,
                date: new Date().toISOString(),
                images: [],
                comments: [],
                likes: 0,
                shares: 0,
                saves: 0,
            };
            setPosts([newPost, ...posts]);
            setNewPostContent('');
        }
    };

    const toggleComments = (postId: string | number) => {
        setShowComments((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const galleryImages = [
        Person,
        Person,
        Person,
        Person,
        Person,
        Person,
    ];
    const images = [
        { src: Person, title: 'Image 1' },
        { src: Person, title: 'Image 2' },
        { src: Person, title: 'Image 3' },
        { src: Person, title: 'Image 4' },
        { src: Person, title: 'Image 5' },
        { src: Person, title: 'Image 6' },
        // Add more images as needed
    ];

    return (

        <Box className="profile-page">
            <Box className="cover-container">
                <img
                    src="https://via.placeholder.com/1200x300"
                    alt="Cover"
                    className="cover-image"
                />

                <Avatar
                    src="https://via.placeholder.com/200"
                    alt="Profile"
                    className="profile-image"
                />
            </Box>
            <Box className="profile-info-container" alignItems={"flex-start"} justifyContent={'space-between'}>

                <Box className="profile-text-container" >
                    <Typography variant="h5" className="profile-name">
                        Khaled Hadia
                    </Typography>
                    <Typography variant="body1" className="profile-intro">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </Typography>
                </Box>
                <Box justifyContent={'center'} display={'flex'} flexDirection={'column'}>
                    <Button className='follow-btn'>
                        Follow
                    </Button>
                    <Typography variant="body1" className="profile-intro">
                        2,564   Followers
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
                    <Tab label="Feeds" className={`tab ${activeTab === 0 ? 'active' : ''}`} />
                    <Tab label="About" className={`tab ${activeTab === 1 ? 'active' : ''}`} />
                    <Tab label="Gallery" className={`tab ${activeTab === 2 ? 'active' : ''}`} />
                </Tabs>
                <Box className={`${activeTab === 1 ? 'tab-content' : 'tab-content-2'}`}>

                    {activeTab === 0 &&
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="h6">About Me</Typography>
                                    <Divider sx={{ bgcolor: '#fff', mb: 1 }} />
                                    <Typography variant="body1" sx={{ color: '#FFFFFFB3' }}>
                                        {showMore
                                            ? 'With an innate flair for aesthetics and a keen eye for detail, I meticulously craft garments that reflect my distinctive style and vision.'
                                            : 'With an innate flair for aesthetics and a keen eye for detail, I meticulously craft garments...'}
                                        <Button onClick={() => setShowMore(!showMore)} sx={{ color: '#fff' }}>
                                            {showMore ? 'Read less' : 'Read more'}
                                        </Button>
                                    </Typography>
                                    <Divider sx={{ bgcolor: '#fff', mt: 1, mb: 1 }} />
                                    <List sx={{ color: '#FFFFFFB3' }} >
                                        <ListItem>
                                            <ListItemIcon>
                                                <LocationOn sx={{ color: '#FFFFFFB3' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="Amman, Jordan" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Language sx={{ color: '#FFFFFFB3' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="dribbble.com/khaledhadia" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CalendarToday sx={{ color: '#FFFFFFB3' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="Joined June 2024" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                        <Typography variant="h6">Gallery</Typography>
                                        <Button sx={{ color: '#fff' }}>See all</Button>
                                    </Box>
                                    <Divider sx={{ bgcolor: '#fff', mb: 1 }} />

                                    <Grid container spacing={1}>
                                        {galleryImages.map((image, index) => (
                                            <Grid item xs={4} key={index}>
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={image}
                                                    alt={`Gallery image ${index + 1}`}
                                                    className="gallery-image"
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Card sx={{ bgcolor: '#1A1A1A', mb: 2, color: '#fff', borderRadius: '15px' }}>

                                    <CardContent>
                                        <Box display="flex" alignItems="center" mb={2}>
                                            <Avatar src={Person} alt="User Profile" sx={{ mr: 2 }} />
                                            <Typography variant="h6">Post Something</Typography>

                                        </Box>
                                        <Divider sx={{ bgcolor: '#fff', mb: 1 }} />
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            placeholder="What's on your mind?"
                                            value={newPostContent}
                                            onChange={(e) => setNewPostContent(e.target.value)}
                                            sx={{ color: '#000', mt: 2 }}
                                        />
                                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                            <IconButton component="label">
                                                <PhotoCamera sx={{ color: '#FFFFFFB3' }} />
                                                <input type="file" hidden />
                                            </IconButton>
                                            <Button
                                                variant="contained"
                                                sx={{ bgcolor: '#B20000', color: '#fff' }}
                                                onClick={handlePost}
                                            >
                                                Post
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                                {posts.map((post) => (
                                    <Card key={post.id} sx={{ bgcolor: '#1A1A1A', mb: 2, borderRadius: '15px' }}>
                                        <CardContent>
                                            <Box display="flex" alignItems="center" mb={2}>
                                                <Avatar src={post.user.profileImage} alt={post.user.name} sx={{ mr: 2 }} />
                                                <Box>
                                                    <Typography variant="subtitle1" color={'#fff'}>{post.user.name}</Typography>
                                                    <Typography variant="caption" display="block" color={'#92929D'}>{post.date}</Typography>
                                                </Box>
                                            </Box>
                                            <Typography variant="body1" sx={{ mb: 2, color: '#92929D' }}>{post.content}</Typography>
                                            {post.images.length > 0 && (
                                                <Grid container spacing={1} sx={{ mb: 2 }}>
                                                    {post.images.map((image, index) => (
                                                        <Grid item xs={12} md={6} key={index}>
                                                            <CardMedia
                                                                component="img"
                                                                height="200"
                                                                image={image}
                                                                alt={`Post image ${index + 1}`}
                                                                className='gallery-image '
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            )}
                                            <Divider sx={{ bgcolor: '#FFFFFFB3', mb: 2 }} />
                                            <Box display="flex" justifyContent="space-around" color={'#FFFFFFB3'}>
                                                <Box display="flex" alignItems="center">
                                                    <IconButton onClick={() => toggleComments(post.id)}>
                                                        <Comment sx={{ color: '#FFFFFFB3' }} />
                                                    </IconButton>
                                                    <Typography variant="body2">{post.comments.length}  Comments</Typography>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <IconButton>
                                                        <Favorite sx={{ color: '#FFFFFFB3' }} />
                                                    </IconButton>
                                                    <Typography variant="body2">{post.likes}  Likes</Typography>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <IconButton>
                                                        <Share sx={{ color: '#FFFFFFB3' }} />
                                                    </IconButton>
                                                    <Typography variant="body2">{post.shares}   Share</Typography>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <IconButton>
                                                        <Save sx={{ color: '#FFFFFFB3' }} />
                                                    </IconButton>
                                                    <Typography variant="body2">{post.saves}   Saved</Typography>
                                                </Box>
                                            </Box>
                                            <Divider sx={{ bgcolor: '#FFFFFFB3', mt: 2, mb: 2 }} />
                                            <Collapse in={showComments[post.id]}>
                                                {post.comments.map((comment) => (
                                                    <Box key={comment.id} display="flex" alignItems="center" mb={2} color={'#FFFFFFB3'}>
                                                        <Avatar src="comment-user-profile.jpg" alt={comment.user} sx={{ mr: 2 }} />
                                                        <Typography variant="body2">
                                                            <strong>{comment.user}</strong> {comment.content}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                                <Box display="flex" alignItems="center" mb={2}>
                                                    <Avatar src="current-user-profile.jpg" alt="Current User" sx={{ mr: 2 }} />
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        placeholder="Write your comment…"
                                                        sx={{ color: '#fff !important' }}
                                                        className="comment-box"
                                                    />
                                                </Box>
                                            </Collapse>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Grid>

                        </Grid>
                    }
                    {activeTab === 1 &&
                        <Box>
                            <Typography variant='h6'>About</Typography>
                            <Typography variant='body2' mt={2} sx={{ color: '#939393' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Box>}

                    {activeTab === 2 && <Box >

                        <Box className="gallery-grid">
                            {images.map((image, index) => (
                                <Card key={index} className="gallery-item">
                                    <CardMedia
                                        component="img"
                                        image={image.src}
                                        alt={image.title}
                                        className="gallery-image-t"
                                    />
                                </Card>
                            ))}
                        </Box>
                    </Box>}
                </Box>
            </Box >
        </Box >


    );
};

export default UserProfile;
