import { FC, } from 'react';
import './home.scss';
import BackgroundVideo from '../../components/backgroundVideo/BackgroundVideo';
import Content from './components/VideoContent';
import ImageSection from './components/imageSection/ImageSection';
import ImageGrid from './components/bestSellerProduct/ImageGrid';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import NewsSection from './components/newsSection/NewsSection';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import ArmadioVirtualeTestimonials from './components/armadioVirtualeTestimonials/ArmadioVirtualeTestimonials';
import ServiceSection from './components/serviceSection/ServiceSection';

const Home: FC = () => {

    const { accessToken: userToken } = useSelector(
        (state: IRootState) => state?.Auth,
    );

    console.log('userToken', userToken)

    return (
        <div className="Home">

            <BackgroundVideo>
                <Content />
            </BackgroundVideo>

            <ImageSection />

            <ServiceSection home/>

            <ImageGrid />

            <ImageCarousel />

            <NewsSection />

            <ArmadioVirtualeTestimonials />
        </div>



    );
};

export default Home;
