import { useEffect, FC, } from 'react';
import {
    Outlet,
    useLocation,
    useNavigate,
    NavigateFunction,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './main.scss';
import { IRootState } from '../redux/store';
import TransparentHeader from './TransparentHeader';
import Footer from './Footer';

const Main: FC = () => {

    const pathName: string | undefined = useLocation()?.pathname;

    const navigate: NavigateFunction = useNavigate();


    const { accessToken: userToken, } = useSelector(
        (state: IRootState) => state?.Auth,
    );


    useEffect(() => {
        if (Boolean(userToken)) {

        } else if (!Boolean(userToken) && pathName === '/') {
            // navigate('/#/auth/signIn');
        }
    }, [navigate, pathName, userToken]);


    return (
        <main className="Main">

            <TransparentHeader />

            <Outlet />

            <Footer />
        </main>
    );
};

export default Main;
