import React, { useState } from 'react';
import { Box, Grid, Link, AppBar, Toolbar, Typography, useScrollTrigger, Slide, IconButton, Menu, MenuItem, ListItemIcon, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import "./main.scss"
import { reduxStore } from '../redux/store';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { removeUserCredential } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { ListAlt, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: React.ReactElement;
}

const HideOnScroll: React.FC<Props> = ({ children }) => {

    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};


const Offset = styled('div')(({ theme }: any) => ({
    ...theme.mixins?.toolbar,
}));

const TransparentHeader: React.FC = () => {
    const { displayName } = require('../app.json');
    const pages = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About',
            path: '/#/about'
        },
        {
            label: 'Create Design',
            path: '/#/authenticated/create-design/women'
        },
        {
            label: 'Fashion Market',
            path: '/#/authenticated/fashion-market'
        },
        {
            label: 'Hire People',
            path: '/#/authenticated/hire-people'
        },
        {
            label: 'Blog',
            path: '/#/authenticated/blog'
        },
        {
            label: 'Contact',
            path: '/#/contact-us'
        },
    ];
    const notifications = [
        {
            id: 1,
            image: 'https://via.placeholder.com/40', // Replace with actual image URL
            text: 'Notification 1',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/40', // Replace with actual image URL
            text: 'Notification 2',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/40', // Replace with actual image URL
            text: 'Notification 3',
        },
    ];
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorNotification, setAnchorNotification] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
    const accessToken = reduxStore.getState().Auth.accessToken;

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
        setAnchorNotification(null);
    }
    const handleNotificationMenu = (event: any) => {
        setAnchorNotification(event.currentTarget);
        setAnchorEl(null);

    }
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorNotification(null);
    };
    const onLogoutClick = () => {
        dispatch(removeUserCredential('remove'));
    };
    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar
                    position="fixed"
                    sx={{
                        transition: 'background-color 0.5s',
                        background: "#000000 0% 0% no-repeat padding-box"
                    }}
                >
                    <Toolbar>
                        <Box className="root">
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Typography className="app-name">
                                        <Link color='#fff' href="/" underline="none">
                                            {displayName}
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} md={6} lg={6} display='flex'>
                                    <Box className="container">
                                        {pages.map((page: any, index: number) => (
                                            <Link href={page?.path} underline="hover" className="page-label" key={index}>
                                                {page?.label}
                                            </Link>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid item xs display='flex' justifyContent='flex-end'>
                                    {!!accessToken ? (
                                        <Box display='flex' alignItems='center'>
                                            <IconButton color="inherit"
                                                edge='start'
                                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleNotificationMenu(event)}
                                                aria-label="notifications of current user"
                                                aria-haspopup="true"
                                            >
                                                <NotificationsNoneOutlinedIcon />
                                            </IconButton>
                                            <IconButton
                                                edge="end"
                                                aria-label="account of current user"
                                                aria-haspopup="true"
                                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleMenu(event)}
                                                color="inherit"
                                            >
                                                {/* {profileImage ? (
                                                    <img src={profileImage} alt="Profile" style={{ width: 30, height: 30, borderRadius: '50%' }} />
                                                ) : ( */}
                                                <AccountCircle sx={{ width: 40, height: 40 }} />
                                                {/* )} */}
                                            </IconButton>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={anchorEl}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                                sx={{
                                                    mt: 5,
                                                    color: "#1A1818",
                                                    opacity: 0.9
                                                }}
                                            >
                                                <MenuItem onClick={() => navigate('/authenticated/profile')}>
                                                    <ListItemIcon>
                                                        <AccountCircle />
                                                    </ListItemIcon>
                                                    Profile
                                                </MenuItem>
                                                <MenuItem >
                                                    <ListItemIcon>
                                                        <ListAlt />
                                                    </ListItemIcon>
                                                    My Requests
                                                </MenuItem>
                                                <MenuItem >
                                                    <ListItemIcon>
                                                        <ListAlt />
                                                    </ListItemIcon>
                                                    My Feeds
                                                </MenuItem>
                                                <MenuItem onClick={onLogoutClick}>
                                                    <ListItemIcon>
                                                        <Logout />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                            <Menu
                                                id="menu-appbar-noti"
                                                anchorEl={anchorNotification}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorNotification)}
                                                onClose={handleClose}
                                                sx={{
                                                    mt: 5,
                                                    color: "#1A1818",
                                                    opacity: 0.9
                                                }}
                                            >
                                                {notifications.map((notification) => (
                                                    <MenuItem key={notification.id} onClick={handleClose}>
                                                        <Box display="flex" alignItems="center">
                                                            <Avatar src={notification.image} sx={{ width: 40, height: 40, mr: 2 }} />
                                                            <Typography variant="body2">{notification.text}</Typography>
                                                        </Box>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                    ) : (
                                        <Box className="root" justifyContent='center'>
                                            <Link href="#/auth/signin" underline="hover" className="page-label">
                                                Log in
                                            </Link>
                                            <Link href="#/auth/signup" underline="none" className="btn">
                                                Sign up
                                            </Link>
                                        </Box>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Offset />
        </React.Fragment >
    );
};

export default TransparentHeader;
