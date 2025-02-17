import React, { useState } from 'react';
import { ButtonGroup, Button, IconButton, Divider } from '@mui/material';
import Redo from "../../../../assest/createDesign/redo-icon.png"
import Undo from "../../../../assest/createDesign/undo.png"

const UndoRedoButtonGroup = () => {

    const handleUndo = () => {

    };

    const handleRedo = () => {

    };



    return (
        <ButtonGroup sx={{
            backgroundColor: "#EEEEEE", border: "1px solid #FFFFFF57", mx: 2
        }}>
            <IconButton onClick={handleUndo} sx={{ fontSize: '16px', }} >
                <img src={Undo} alt='Undo Icon' /> Undo
            </IconButton>

            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

            <IconButton onClick={handleRedo} sx={{ fontSize: '16px' }} >
                <img src={Undo} alt='Redo Icon' />  Redo
            </IconButton>
        </ButtonGroup>
    );
};

export default UndoRedoButtonGroup;
