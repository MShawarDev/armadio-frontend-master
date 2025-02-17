import React, { lazy, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { LazyLoading } from '../../components/lazyLoading';
import About from '../../pages/app/about/About';
import ContactUs from '../../pages/app/contactUs/ContactUs';
import FAQs from '../../pages/app/faqs/FAQs';
import PrivacyPolicy from '../../pages/app/privacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../../pages/app/termsAndConditions/TermsAndConditions';

const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import('../../pages/home/Home'),
);

const mainRoutes: RouteProps[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <ContactUs />
    ),
  },
  {
    path: '/faqs',
    element: (
      <FAQs />
    ),
  },
  {
    path: '/terms-and-conditions',
    element: (
      <TermsAndConditions />
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <PrivacyPolicy />
    ),
  },
  {
    path: '/about',
    element: (
      <About />
    ),
  },
]

const AppRoutes = (): React.ReactElement[] =>
  mainRoutes.map((route: RouteProps) => <Route key={route.path} {...route} />);

export default AppRoutes;