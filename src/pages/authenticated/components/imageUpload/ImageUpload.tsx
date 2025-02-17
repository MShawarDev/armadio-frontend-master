
import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
    modalContainer: {
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // width: 400,
        // backgroundColor: 'white',
        // boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        // padding: '2rem',
    },
    closeButton: {
        position: 'absolute',
        top: 1,
        right: 1,
    },
    uploadButton: {
        marginTop: '4rem',
    },
}));

const ImageUpload = () => {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        // Handle the file upload
        console.log(selectedFile);
    };

    return (

        <Box className={classes.modalContainer}>

            <Typography variant="subtitle2" component="h2">
                Upload Image
            </Typography>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.uploadButton}
                onClick={handleUpload}
                disabled={!selectedFile}
            >
                Upload
            </Button>
        </Box>

    );
};

export default ImageUpload;
