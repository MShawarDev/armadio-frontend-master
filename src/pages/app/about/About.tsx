import { Box, Container, Typography } from '@mui/material';
import CoverSection from '../../authenticated/components/coverSection/CoverSection';
import ServiceSection from '../../home/components/serviceSection/ServiceSection';
import "./about.scss"
import Client from '../../../assest/fashionMarket/clients.png';
import Person1 from "../../../assest/home/data/fashion/1.jpeg"
import Person2 from "../../../assest/home/data/fashion/2.jpeg"
import Person3 from "../../../assest/home/data/fashion/3.jpeg"
import Person4 from "../../../assest/home/data/fashion/4.jpeg"
import FashionBusinesses from './components/fashionBusinesses/FashionBusinesses';

const About = () => {
    const items = [
        { image: Person1, name: 'Person 1', position: 'Designer' },
        { image: Person2, name: 'Person 2', position: 'Model' },
        { image: Person3, name: 'Person 3', position: 'Photographer' },
        { image: Person4, name: 'Person 4', position: 'Photographer' },
        { image: Person4, name: 'Person 4', position: 'Photographer' },
        { image: Person4, name: 'Person 4', position: 'Photographer' },
        { image: Person4, name: 'Person 4', position: 'Photographer' },
    ];
    const stat_data = [
        {
            number: "49+",
            label: "TAILORS"
        },
        {
            number: "200+",
            label: "FASHION DESIGNERS"
        },
        {
            number: "20+",
            label: "FASHION DESIGN HOUSES"
        },
        {
            number: "700+",
            label: "USERS"
        },
    ]
    const clients = [
        Client,
        Client,
        Client,
        Client,
        Client,
        Client,
    ];
    return (
        <Box bgcolor={'#000'}>
            <CoverSection
                title="About"
                breadcrumb="About"
            />
            <Container
                sx={{
                    color: '#FFFFFF80',
                    display: 'flex',
                    gap: 5,
                    flexDirection: 'column'
                }}
            >
                <Box p={'3rem'}>
                    <ServiceSection />
                </Box>



            </Container>
            <div className="about-container">
                <div className="about-overlay">
                    <Box className="about-content-box">
                        <Typography className="about-title">
                            Create your new favorite collection
                        </Typography>
                        <Typography variant="body1" className="about-description">
                            Welcome to our innovative virtual fashion design platform, where creativity knows no bounds! Elevate your fashion journey by seamlessly connecting with clients, skilled fashion designers, and expert tailors. Our user-friendly interface empowers you to bring your unique designs to life in a virtual space, providing a dynamic canvas for your creativity. Whether you're a client seeking personalized designs, a designer looking to showcase your talent, or a tailor ready to bring visions to reality, our platform is the nexus where fashion dreams meet skilled craftsmanship. Embrace the future of fashion with collaborative virtual design, where the possibilities are limitless, and the connections are as vibrant as your imagination. Join our community and embark on a digital fashion revolution that transcends boundaries and celebrates the artistry of design.                            </Typography>
                        <Box className="about-stats-container">
                            {stat_data.map((item, index) => {
                                return <Box className="stat-box" key={index}>
                                    <Typography variant="h4" className="stat-number">{item?.number}</Typography>
                                    <Typography variant="subtitle1" className="stat-label">{item?.label}</Typography>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </div>
            </div>

            <FashionBusinesses fashionImages={items} />
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                }}
            >
                {clients.map((client, index) => (
                    <Box key={index} sx={{ minWidth: '150px', flexShrink: 0 }}>
                        <img src={client} alt={`Client ${index + 1}`} style={{ width: 300, height: 150, border: "solid #fff 0.3px" }} />
                    </Box>
                ))}
            </Box>
        </Box >
    );
};

export default About;
