import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import './JoinOurCommunity.scss';
import { userRoute } from '../../../api/axios/apiRoute';
import { Entities } from '../../../types/api/api.types';
import Icon from "../../../assest/home/entity-icon.svg"
import { useNavigate } from 'react-router-dom';
import { LazyLoading } from '../../../components/lazyLoading';


const JoinOurCommunity: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [items, setItems] = useState<Entities[]>([]);
    const navigate = useNavigate();



    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const { data, status } = await userRoute.GetEntity();

                if (status === 200) {
                    setItems(data?.data)
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleBoxClick = (id: number) => {
        navigate(`/authenticated/registrationForm/${id}`);
    };
    return (
        <Box className="joinOurCommunity">
            <Typography variant="h3" className="joinOurCommunity-title" >
                Join Us
            </Typography>
            {loading ?
                <LazyLoading />
                : <Grid container alignItems="center" justifyContent='center' p="5rem">
                    {items.map((item, index) => (
                        <Grid item key={index} onClick={() => handleBoxClick(item?.id)} sx={{cursor:'pointer'}}>
                            <Box className="joinOurCommunity-box">
                                <img src={Icon} className='joinOurCommunity-icon' alt={item?.entityName} />
                                <Typography variant="h6">{item?.entityName}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>}
        </Box>
    );
};

export default JoinOurCommunity;
