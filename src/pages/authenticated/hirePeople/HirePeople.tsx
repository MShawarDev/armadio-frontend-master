import React, { useState } from 'react';
import { Box, Tabs, Tab, Button, Typography } from '@mui/material';
import './HirePeople.scss';
import Person from "../../../assest/home/data/fashion/4.jpeg"
import { useNavigate } from 'react-router-dom';

const peopleData = [
    // Sample data
    { id: 1, name: 'John Doe', position: 'Fashion Designer', image: Person },
    { id: 2, name: 'Jane Smith', position: 'Fashion Designer', image: Person },
    { id: 2, name: 'Jane Smith', position: 'Fashion Designer', image: Person },
    { id: 2, name: 'Jane Smith', position: 'Fashion Designer', image: Person },
    { id: 2, name: 'Jane Smith', position: 'Fashion Designer', image: Person },
    { id: 2, name: 'Jane Smith', position: 'Fashion Designer', image: Person },
    { id: 2, name: 'Jane Smith', position: 'Fashion Designer', image: Person },
    // Add more data as needed
];

const HirePeople: React.FC = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
    const handleBoxClick = (id: number) => {
        navigate(`/authenticated/my-profile/${id}`);
    };
    return (
        <Box className="hire-people-page">
            <Box className="header">
                <Typography className="hire-people-title">Meet the Fashion Design Houses & Fashion Designers</Typography>
                <Button className="hire-people-join-button">Join our community</Button>
            </Box>
            <Box className="tabs-container">
                <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit" TabIndicatorProps={{
                    style: { display: 'none' }
                }}>
                    <Tab label="Fashion Designers" className='tab' />
                    <Tab label="Fashion Design Houses" className='tab' />
                    {/* Add more tabs as needed */}
                </Tabs>
                <Box>
                    {activeTab === 0 && (
                        <Box className="person-grid">
                            {peopleData.map((person) => (
                                <Box key={person.id} className="person-item" onClick={() => handleBoxClick(person?.id)} >
                                    <img src={person.image} alt={person.name} />
                                    <Box className="person-info">
                                        <Typography>{person.name}</Typography>
                                        <Typography>{person.position}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    )}
                    {activeTab === 1 && (
                        <Box className="person-grid">
                            {/* Add content for Fashion Design Houses */}
                        </Box>
                    )}
                    {/* Add more content for additional tabs */}
                </Box>
            </Box>
        </Box>
    );
};

export default HirePeople;
