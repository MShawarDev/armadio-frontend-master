import React, { lazy, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AuthRoutesPath } from '../../enumerate/routesPath';
import { LazyLoading } from '../../components/lazyLoading';
import SignUp from '../../pages/auth/signup/SignUp';
import ForgetPassword from '../../pages/auth/forgetPassword/ForgetPassword';
import UpdatePassword from '../../pages/auth/updatePassword/UpdatePassword';



const SignIn: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import('../../pages/auth/signin/SignIn'),
);


const routes: Array<RouteProps> = [
  {
    element: (
      <Suspense fallback={<LazyLoading />}>
        <SignIn />
      </Suspense>
    ),
    path: `${AuthRoutesPath.SignIn}`,
  },
  {
    element: (
      <Suspense fallback={<LazyLoading />}>
        <SignUp />
      </Suspense>
    ),
    path: `${AuthRoutesPath.SignUp}`,
  },
  {
    element: (
      <Suspense fallback={<LazyLoading />}>
        <ForgetPassword />
      </Suspense>
    ),
    path: `${AuthRoutesPath.ForgetPassword}`,
  },
  {
    element: (
      <Suspense fallback={<LazyLoading />}>
        <UpdatePassword />
      </Suspense>
    ),
    path: `${AuthRoutesPath.UpdatePassword}`,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (): React.ReactElement[] =>
  routes.map((route: RouteProps) => <Route key={route.path} {...route} />);
