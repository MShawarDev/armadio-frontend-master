
import { Box, Typography } from '@mui/material';
import TextIcon from '../../../../assest/createDesign/text-icon.png';
import ImageIcon from '../../../../assest/createDesign/image-icon.png';
import { SettingListEnumType } from '../../../../enumerate/components';

interface DeaclSettingSelectorProps {
    setSelectedSetting: (setting: SettingListEnumType) => void;
}

const DeaclSettingSelector: React.FC<DeaclSettingSelectorProps> = ({ setSelectedSetting }) => {

    return (
        <Box>
            <Typography color="#6D7278" variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Typography>
            <Box display="flex" p={2} justifyContent="center" gap={2}>
                <Box
                    onClick={() => setSelectedSetting(SettingListEnumType.T)}
                    sx={{
                        border: '1px solid #FFFFFF57',
                        borderRadius: '4px',
                        backgroundColor: '#fff',
                        p: '1rem',
                    }}
                >
                    <img src={TextIcon} alt="text icon not found" />
                    <Typography textAlign="center">Text</Typography>
                </Box>
                <Box
                    onClick={() => setSelectedSetting(SettingListEnumType.I)}
                    sx={{
                        border: '1px solid #FFFFFF57',
                        borderRadius: '4px',
                        backgroundColor: '#fff',
                        p: '1rem',
                        justifyContent: 'center',
                    }}
                >
                    <img src={ImageIcon} alt="icon not found" />
                    <Typography textAlign="center">Image</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default DeaclSettingSelector;
