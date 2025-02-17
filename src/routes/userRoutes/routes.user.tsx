import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import JoinOurCommunity from '../../pages/authenticated/joinOurCommunity/JoinOurCommunity';
import RegistrationForm from '../../pages/authenticated/registrationForm/RegistrationForm';
import CreateDesign from '../../pages/authenticated/createDesign/CreateDesign';
import SpecialDesignRequest from '../../pages/authenticated/specialDesignRequest/SpecialDesignRequest';
import FashionMarket from '../../pages/authenticated/fashionMarket/FashionMarket';
import Blog from '../../pages/authenticated/blog/Blog';
import GraphicDesignRequirements from '../../pages/authenticated/3DGraphicDesignRequirements/3DGraphicDesignRequirements';
import HirePeople from '../../pages/authenticated/hirePeople/HirePeople';
import Profile from '../../pages/authenticated/profile/Profile';
import UserProfile from '../../pages/authenticated/userProfile/UserProfile';


const userRoutesList: RouteProps[] = [
  {
    path: '/authenticated/joinOurCommunity',
    element: <JoinOurCommunity />
  },
  {
    path: "/authenticated/registrationForm/:id",
    element: <RegistrationForm />
  },
  {
    path: "/authenticated/my-profile/:id",
    element: <UserProfile />
  },
  {
    path: "/authenticated/create-design/:gender",
    element: <CreateDesign />
  },
  {
    path: "/authenticated/request-design",
    element: <SpecialDesignRequest />
  },
  {
    path: "/authenticated/fashion-market",
    element: <FashionMarket />
  },
  {
    path: "/authenticated/blog",
    element: <Blog />
  },
  {
    path: "/authenticated/3DGraphicDesignRequirements",
    element: <GraphicDesignRequirements />
  },
  {
    path: "/authenticated/hire-people",
    element: <HirePeople />
  },
  {
    path: "/authenticated/profile",
    element: <Profile />
  },

];
const UserRoute = (): React.ReactElement[] =>
  userRoutesList.map((route: RouteProps, _) => (
    <Route key={route.path} {...route} />
  ));

export default UserRoute;
