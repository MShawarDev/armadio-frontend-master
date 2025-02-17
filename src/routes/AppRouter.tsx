import React from 'react';
import { Route, Outlet, Routes, } from 'react-router-dom';
import AuthRoutes from './authRoutes/routes.auth';
import Main from '../layout/Main';
import AppRoutes from './mainRoutes/routes.main';
import ProtectedRoute from './protectedRoutes/ProtectedRoute';
import UserRoute from './userRoutes/routes.user';



const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                {AppRoutes()}
            </Route>

            <Route path={`/auth`} element={<Outlet />}>
                {AuthRoutes()}
            </Route>


            <Route path="/authenticated" element={<ProtectedRoute />}>
                {UserRoute()}
            </Route>
        </Routes>
    );
};

export default AppRouter;
