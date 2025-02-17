import React from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import CoverSection from '../components/coverSection/CoverSection';
import NewsSection, { NewsItem } from '../../home/components/newsSection/NewsSection';
import Image from "../../../assest/home/data/news/1.png"

const Blog = () => {

    const recentNews: NewsItem[] = [
        { id: 1, src: Image, date: 'OCTOBER, 2023', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore1' },
        { id: 2, src: Image, date: 'MAY, 2024', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore2' },
        { id: 3, src: Image, date: 'JUNE, 2024', title: '7 Diffreent Types and Style Of Blazers', link: '#readmore3' },
    ];



    return (
        <Box bgcolor={'#000'}>
            <CoverSection
                title="Blog"
                breadcrumb="Blog"
            />
            <Grid container spacing={1} p={5}>
                <Grid item xs={9}>
                    <NewsSection blog />
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ background: '#1A1A1A', padding: '1rem', color: '#fff' }}>
                        <Typography variant="subtitle1" py={2}>
                            Recent Articles
                        </Typography>
                        {recentNews.map((item, index) => {
                            return (
                                <Box key={item.id} sx={{ display: 'flex', gap: 2,p:1 }}>
                                    <img src={item?.src} alt={item?.title} height={50} width={100} />
                                    <Box>
                                        <Typography variant='body1' color="#E02020">
                                            {item?.date}
                                        </Typography>
                                        <Box>
                                            <Typography variant='body2' width={200}>
                                                {item?.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Grid>

            </Grid>

        </Box >
    );
};

export default Blog;
