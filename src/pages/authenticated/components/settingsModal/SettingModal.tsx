import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, Grid, IconButton, Badge, TextField, InputAdornment } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { SettingListEnumType } from '../../../../enumerate/components';
import { ChromePicker } from 'react-color';
import ImageIcon from "../../../../assest/createDesign/image-icon.png"
import TextIcon from "../../../../assest/createDesign/text-icon.png"
import DeaclSettingSelector from '../deaclSettingSelector/DeaclSettingSelector';
import ActionButtonsBox from '../actionButtonsBox/ActionButtonsBox';
import ImageUpload from '../imageUpload/ImageUpload';
interface SettingOption {
    label: string;
    icon: React.ReactNode;
    new?: boolean
}

interface SettingsModalProps {
    top?: boolean;
    open: boolean;
    handleClose: () => void;
    options: SettingOption[];
    selectedCategory: string | null;
    setSelectedSetting: (setting: string) => void;
    selectedSetting: string | null;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ top = false, open, handleClose, options, selectedCategory, setSelectedSetting, selectedSetting }) => {
    const [color, setColor] = useState<string>('');
    const [value, setValue] = useState('');

    const handleChange = (color: { hex: React.SetStateAction<string>; }) => {
        setColor(color.hex);
    };

    const handleChangeComplete = (color: { hex: any; }) => {
        console.log('Color selected:', color.hex);
        setColor(color.hex);

    };

    const selectedSettingHandler = (label: string) => {
        setSelectedSetting(label)
    }

    const handleChangeDecalText = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        setValue('');
    };
    const handleCancel = () => {
        // Handle cancel action
    };

    const handleSave = () => {
        // Handle save action
    };
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'fixed',
                // top: top ? '2rem' : 0,
                bottom: !top ? "2rem" : '12rem',
                right: "0.5rem",
                width: '400px',
                bgcolor: "#F7F7F7",
                boxShadow: 24,
                p: 1,
                borderRadius: '8px',
                backdropFilter: "blur(30px)",
                overflowY: 'scroll'
            }}>
                <Box display="flex" alignItems="center">

                    {selectedSetting ? <ArrowBackIcon onClick={() => setSelectedSetting("")} /> : <SettingsIcon />}

                    <Typography fontWeight='300' sx={{ ml: 1 }}>
                        {selectedSetting ? (selectedSetting === SettingListEnumType.I || selectedSetting === SettingListEnumType.T) ? `Decal ${selectedSetting}` : selectedSetting : `${selectedCategory} Settings`}
                    </Typography>
                    <IconButton onClick={handleClose} sx={{ ml: 'auto' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                {selectedSetting ?
                    <Box p={1}>
                        {selectedSetting === SettingListEnumType.C ? <ChromePicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} /> :

                            selectedSetting === SettingListEnumType.D ? <DeaclSettingSelector setSelectedSetting={setSelectedSetting} /> :

                                selectedSetting === SettingListEnumType.T ?
                                    <Box p={3}>
                                        <TextField
                                            label={'Input Text'}
                                            value={value}
                                            onChange={handleChangeDecalText}
                                            fullWidth
                                            InputProps={{
                                                endAdornment: (
                                                    value && (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={handleClear}>
                                                                <Typography sx={{ color: '#6D7278', fontSize: '12px' }}>
                                                                    Clear
                                                                </Typography>
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                ),
                                            }}
                                        />
                                        <ActionButtonsBox onCancel={handleCancel} onSave={handleSave} />
                                    </Box>
                                    : selectedSetting === SettingListEnumType.I ? <ImageUpload/>

                                        : <div></div>

                        }
                    </Box>
                    :
                    <Grid container gap={1} display='flex' justifyContent='center' m={1} height={200} >
                        {options.map((option, index) => (
                            <Grid item key={index} md={4} bgcolor='#fff' alignSelf='center' height={100}  >
                                <Box onClick={() => selectedSettingHandler(option.label)} display="flex" alignItems="center" flexDirection='column' gap="1rem" textAlign='center' py="1rem">
                                    {/* {option.new && (
                                        <Badge
                                            badgeContent="New"
                                            color="primary"
                                            sx={{ alignSelf: 'end' }}
                                        />
                                    )} */}
                                    {option.icon}
                                    <Typography variant="body2" >
                                        {option.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                }
            </Box>
        </Modal >
    );
};

export default SettingsModal;
