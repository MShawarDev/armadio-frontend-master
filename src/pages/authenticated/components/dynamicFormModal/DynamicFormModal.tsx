import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, Grid, ToggleButton, ToggleButtonGroup, CssBaseline } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Height from "../../../../assest/createDesign/measuring/height.jpeg"
import Waist from "../../../../assest/createDesign/measuring/waist.jpeg"
import Weight from "../../../../assest/createDesign/measuring/weight.jpeg"
import SettingsIcon from '@mui/icons-material/Settings';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import "./DynamicFormModal.scss"

interface DynamicFormModalProps {
    open: boolean;
    handleClose: () => void;
    category: string | null;
}

const formFields = [
    { label: 'Height', type: 'text', image: Height },
    { label: 'Weight', type: 'text', image: Weight },
    { label: 'Waist', type: 'text', image: Waist },
    { label: 'Bust', type: 'text', image: '' },
    { label: 'Chest', type: 'text', image: '' },
    { label: 'Sleeve Length', type: 'text', image: '' }
]

const DynamicFormModal: React.FC<DynamicFormModalProps> = ({ open, handleClose, category }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [changedField, setChangedField] = useState<any>();
    // const fields = category ? formFields[category] : [];
    const [unit, setUnit] = useState('cm');

    const handleUnitChange = (event: any, newUnit: React.SetStateAction<string> | null) => {
        if (newUnit !== null) {
            setUnit(newUnit);
        }
    };
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setChangedField(formFields.find(cat => cat.label === name))
    };

    const submitForm = () => {
        console.log('formData', formData)
        handleClose()
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 550,
                bgcolor: '#F7F7F7',
                boxShadow: 24,
                p: 1,
                border: "1px solid #FFFFFF57",
                borderRadius: "8px",
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <SettingsIcon sx={{ mr: '0.5rem' }} />
                        <Typography variant="h6" component="h2" >
                            {category ? `${category} Settings` : 'Settings'}
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={handleClose} >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box width='fit-content !important' bgcolor='#fff' mx='auto !important' p='0.5rem'>

                    <Box display='flex' alignItems='center'>
                        <TipsAndUpdatesOutlinedIcon sx={{ mr: '0.5rem' }} />
                        <Typography> Make it Fit </Typography>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Typography color='#6D7278' fontWeight='300' variant="body2" ml='1.8rem' >*That will not affect on 3D model it just data will exported in PDF</Typography>

                        <CssBaseline />
                        <ToggleButtonGroup
                            value={unit}
                            exclusive
                            onChange={handleUnitChange}
                            aria-label="unit selection"
                        >
                            <ToggleButton value="cm" aria-label="centimeters">
                                CM
                            </ToggleButton>
                            <ToggleButton value="inch" aria-label="inches">
                                Inch
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Grid item container columnSpacing={{ xs: 2, sm: 4, md: 6 }} my="1rem" >
                        <Grid item xs={8}>
                            <Grid item container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {formFields?.map((field, index) => (
                                    <Grid item xs={2} sm={4} md={6} key={index}>
                                        <TextField
                                            key={index}
                                            margin="normal"
                                            fullWidth
                                            label={field.label}
                                            type={field.type}
                                            name={field.label}
                                            variant="outlined"
                                            onChange={handleInputChange}
                                            onFocus={handleInputChange}
                                            onBlur={handleInputChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <Typography>{unit}</Typography>
                                                )
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            {changedField!?.image && <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <img src={changedField!?.image} alt="Height Explanation" style={{ width: '100%' }} />
                                <Typography variant="caption">Explanation of how to measure your {changedField?.label}.</Typography>
                            </Box>}
                        </Grid>
                    </Grid>
                    <Box display='flex' alignSelf='center' justifyContent='center'>
                        <Button className='daynamic-cancel-btn' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='daynamic-submit-btn' onClick={submitForm}>
                            Submit
                        </Button>
                    </Box>

                </Box>

            </Box>
        </Modal >
    );
};

export default DynamicFormModal;
