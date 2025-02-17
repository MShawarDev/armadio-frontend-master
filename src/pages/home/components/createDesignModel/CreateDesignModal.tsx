import React from 'react';
import { Box, Typography } from '@mui/material';
import './CreateDesignModal.scss';
import Man from "../../../../assest/home/man.svg"
import Women from "../../../../assest/home/women.svg"
import { useNavigate } from 'react-router-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateDesignModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Box className="box" onClick={() => navigate(`/authenticated/create-design/women`)}>
                    <img src={Women} alt='Women' />
                    <Typography mx='2rem'>
                        Women
                    </Typography>
                </Box>
                <Box className="box" onClick={() => navigate(`/authenticated/create-design/man`)}>
                    <img src={Man} alt='Man' />
                    <Typography mx='2rem'>
                        Man
                    </Typography>
                </Box>
            </div>
        </div >
    );
};

export default CreateDesignModal;
