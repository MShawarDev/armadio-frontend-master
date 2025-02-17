// ActionButtonsBox.jsx

import React from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'center',
        paddingTop: '4rem'
    },
    cancelButton: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        border: '1px solid #000000',
        '&:hover': {
            backgroundColor: '#F5F5F5',
        },
    },
    saveButton: {
        backgroundColor: '#B20000',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#A10000',
        },
    },
}));

const ActionButtonsBox = ({ onCancel, onSave }: { onCancel: () => void; onSave: () => void }) => {
    const classes = useStyles();

    return (
        <Box className={classes.buttonContainer}>
            <Button className={classes.cancelButton} onClick={onCancel}>
                Cancel
            </Button>
            <Button className={classes.saveButton} onClick={onSave}>
                Save
            </Button>
        </Box>
    );
};

export default ActionButtonsBox;
