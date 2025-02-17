import { Box, Container, Typography } from '@mui/material';
import CoverSection from '../../authenticated/components/coverSection/CoverSection';
import CoverImage from "../../../assest/app/termsCover.png"

const TermsAndConditions = () => {


    return (
        <Box bgcolor={'#000'}>
            <CoverSection
                title="Terms and Conditions"
                breadcrumb="Terms and Conditions"
                coverImage={CoverImage}
            />
            <Container
                sx={{
                    padding: '3rem',
                    color: '#FFFFFF80',
                    display: 'flex',
                    gap: 10,
                    flexDirection: 'column'
                }}
            >
                <Typography variant='body2'>
                    Sed non dui aliquam, ullamcorper est non, aliquet mauris. Quisque lacus ligula, dapibus nec dignissim non, tincidunt vel quam. Etiam porttitor iaculis odio. Cras sagittis nunc lectus, in condimentum ligula ornare at. Etiam sagittis malesuada nisl. Duis volutpat ligula ante. Sed cursus, tortor a pellentesque pulvinar, lorem ipsum gravida elit, id posuere elit neque in est. Mauris ex justo, tincidunt at suscipit quis, pretium a mi. Quisque consequat nisl nulla, dignissim gravida ipsum ultrices et. Morbi pharetra non massa at cursus. Vivamus convallis dui eu nisl blandit, vel convallis nisi dapibus.
                </Typography>
            </Container>
        </Box >
    );
};

export default TermsAndConditions;
