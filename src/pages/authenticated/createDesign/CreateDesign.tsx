import React, { useState } from 'react';
import { Box, IconButton, TextField, InputAdornment, Typography, Grid, Button, ButtonGroup, Divider } from '@mui/material';
import './CreateDesign.scss';
import { useParams } from 'react-router-dom';
import Export from "../../../assest/createDesign/export.png"
import LeftMenu from "../../../assest/createDesign/left-menu.svg"
import RightMenu from "../../../assest/createDesign/right-menu.svg"
import Dress from "../../../assest/createDesign/categories/dress.png"
import Pants from "../../../assest/createDesign/categories/pantes.png"
import Shirt from "../../../assest/createDesign/categories/t-shirt.png"
import Send from "../../../assest/createDesign/send.svg"
import BrainIcon from "../../../assest/createDesign/brain.png"
import DynamicFormModal from '../components/dynamicFormModal/DynamicFormModal';
import Shape from "../../../assest/createDesign/shape.png"
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsModal from '../components/settingsModal/SettingModal';
import { Remove, Add } from '@mui/icons-material';
import ZoomButtonGroup from '../components/zoomButtonGroup/ZoomButtonGroup';
import UndoRedoButtonGroup from '../components/undoRedoButtonGroup/UndoRedoButtonGroup';

const categories = [
    {
        id: 1,
        type: 'Dress',
        image: Dress,
        subCategory: [
            { type: 'Dress1', image: Dress },
            { type: 'Dress2', image: Dress },
            { type: 'Dress3', image: Dress },
            { type: 'Dress4', image: Dress },
        ],
        partType: "full"
    },
    {
        id: 2,
        type: 'T-shirt',
        image: Shirt,
        subCategory: [
            { type: 'T-shirt1', image: Shirt },
            { type: 'T-shirt2', image: Shirt },
            { type: 'T-shirt3', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
            { type: 'T-shirt4', image: Shirt },
        ],
        partType: "top"

    },
    {
        type: 'Pants', image: Pants, subCategory: [], partType: "bottom"
    },
    {
        type: 'Blazer', image: Shirt, subCategory: [], partType: "top"
    },
    {
        type: 'Skirt', image: Dress, subCategory: [], partType: "bottom"
    },
    {
        type: 'Abaya', image: Pants, subCategory: [], partType: "full"
    },
];

const CreateDesign: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTopCategoryLabel, setSelectedTopCategoryLabel] = useState<string | null>(null);
    const [selectedCategoryTopPart, setSelectedCategoryTopPart] = useState<string | null>(null);
    const [selectedCategoryBottomPart, setSelectedCategoryBottomPart] = useState<string | null>(null);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [openSettingModal, setOpenSettingModal] = useState<boolean>(false);
    const [openTopSettingModal, setOpenTopSettingModal] = useState<boolean>(false);
    const [selectedSetting, setSelectedSetting] = useState<string>('');
    const [zoomLevel, setZoomLevel] = useState(100);

    const { gender } = useParams<{ gender: string }>();



    const handleCategoryClick = (category: any) => {
        setSelectedCategory(category?.type);
        if (category?.partType === "top" || category?.partType === "full") {
            setSelectedCategoryTopPart(category?.partType);
            setSelectedTopCategoryLabel(category?.type)
        }
        category?.partType === "bottom" && setSelectedCategoryBottomPart(category?.partType);
    };
    const getSubCategory = (categoryType: string) => {
        const category = categories.find(cat => cat.type === categoryType);
        return category ? category.subCategory : null;
    };
    const actions = ['New', "Open", "Save", "Save as", "Make it fit"]
    const pantSettings = [
        { label: "Primary Fabric", icon: <SettingsIcon /> },
        { label: "Secondary Fabric", icon: <SettingsIcon /> },
        { label: "Neck Lines", icon: <SettingsIcon /> },
        { label: "Sleeve Length", icon: <SettingsIcon /> },
        { label: "Ruffles Lines", icon: <SettingsIcon /> },
        { label: "Color", icon: <SettingsIcon />, },
        { label: "Buttons", icon: <SettingsIcon /> },
        { label: "Pockets", icon: <SettingsIcon /> },
        { label: "Zipper", icon: <SettingsIcon /> },
    ];
    const topSetting = [{ label: "Decal", icon: <SettingsIcon />, new: true }, ...pantSettings];

    const handleMakeItFitClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleCloseSettingModal = (type: number) => {
        type === 1 && setOpenSettingModal(false);
        type === 2 && setOpenTopSettingModal(false);
    };




    return (
        <Grid container spacing={2} className='design-page'>
            <Grid item xs={5} key={1}>
                <Box className="left-section">

                    <Box className="left-menu-box" >
                        <img src={showMenu ? RightMenu : LeftMenu} alt="Menu Icon" onClick={() => setShowMenu(prev => !prev)} />
                        {showMenu && actions.map((action, index) => {
                            return <Box key={index} className="actionBox" onClick={handleMakeItFitClick}>
                                {action}
                            </Box>
                        })}
                    </Box>

                    <TextField
                        variant="outlined"
                        placeholder="Search with AI..."
                        sx={{ bgcolor: '#EEEEEE' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <img src={BrainIcon} alt="brain icon" style={{ borderRight: '1px solid #000', padding: '0 0.5rem' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton sx={{ bgcolor: '#fff', borderRadius: '5px' }}>
                                        <img src={Send} alt="send icon" />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Grid container spacing={1}>
                        {categories.map((category, index) => (
                            <Grid item xs={2} key={index}>
                                <Box
                                    key={index}
                                    className="category-box"
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <div className="image-container">
                                        <img src={category?.image} alt={category?.type} />
                                    </div>
                                    <Typography >{category.type}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Selected Category Items */}
                    {selectedCategory && (
                        <Box className="category-items" sx={{ overflowY: getSubCategory(selectedCategory)!?.length < 6 ? "clip" : 'scroll' }}>
                            <Grid container>
                                {getSubCategory(selectedCategory)?.map((category, index) => (
                                    <Grid key={index}>
                                        <Box
                                            key={index}
                                            className="sub-category-box"
                                            onClick={() => console.log('Clicked --')}
                                        >
                                            <div className="image-container">
                                                <img src={category?.image} alt={category?.type} />
                                            </div>
                                            <Typography >{category.type}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}
                </Box>
            </Grid>
            <Grid item xs={7} mt={4}>
                <Box className="right-section">
                    <img src={Shape} alt="shape" height='500' />
                    {selectedCategoryBottomPart && <SettingsIcon className='setting-icon' onClick={() => {
                        setSelectedSetting('')
                        setOpenSettingModal(true)
                    }} />}
                    {selectedCategoryTopPart && <SettingsIcon className='setting-top-icon' onClick={() => {
                        setSelectedSetting('')
                        setOpenTopSettingModal(true)
                    }} />}

                    <SettingsModal
                        open={openSettingModal}
                        handleClose={() => handleCloseSettingModal(1)}
                        options={[...pantSettings].sort((a, b) => a?.label.localeCompare(b?.label))}
                        selectedCategory={selectedCategory}
                        setSelectedSetting={setSelectedSetting}
                        selectedSetting={selectedSetting} />
                    <SettingsModal
                        top
                        open={openTopSettingModal}
                        handleClose={() => handleCloseSettingModal(2)}
                        options={[...topSetting].sort((a, b) => a?.label.localeCompare(b?.label))}
                        selectedCategory={selectedTopCategoryLabel}
                        setSelectedSetting={setSelectedSetting}
                        selectedSetting={selectedSetting} />
                </Box>
                <Box sx={{ position: 'absolute', bottom: 10, right: 20, }}>
                    <ZoomButtonGroup />
                    <UndoRedoButtonGroup />
                    <ButtonGroup sx={{
                        backgroundColor: "#EEEEEE", border: "1px solid #FFFFFF57",
                    }}>
                        <IconButton sx={{ fontSize: '16px', }} >
                            <img src={Export} alt='Export Icon' />  Export
                        </IconButton>
                    </ButtonGroup>
                </Box>
            </Grid>

            <DynamicFormModal
                open={isModalOpen}
                handleClose={handleCloseModal}
                category={selectedCategory}
            />
        </Grid>
    );
};

export default CreateDesign;
