import { FC } from 'react';
import "./main.scss"
import { Link, Box, Divider, Typography } from '@mui/material';

const Footer: FC = () => {
  const quickLinks = [
    {
      path: '/#/authenticated/fashion-market',
      label: 'Fashion Market'
    },
    {
      path: '/#/authenticated/blog',
      label: 'News'
    },
    {
      path: '/teams',
      label: 'Teams'
    },
    {
      path: '/#/privacy-policy',
      label: 'Privacy Policy'
    },
    {
      path: '/#/terms-and-conditions',
      label: 'Terms and Conditions'
    },
    {
      path: '/#/faqs',
      label: 'FAQs'
    },
    {
      path: '/#/authenticated/3DGraphicDesignRequirements',
      label: '3D Specs'
    },
  ];

  const contactUs = [
    {
      title: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      title: 'X',
      link: 'https://x.com/',
    },
    {
      title: 'instagram',
      link: 'https://www.instagram.com/',
    },
    {
      title: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ];


  return (
    <footer className="Footer">
      <Box className="container">
        {quickLinks.map((link, index) => (
          <Link href={link?.path} underline="none" className="page-label" key={index}>
            {link?.label}
          </Link>
        ))}
      </Box>
      <Divider variant="fullWidth" className='divider' />

      <Box className="container">
        <Typography className='copyright-label'>
          Copyright © 2024 armadiovirtuale.com - All Rights Reserved.
        </Typography>

        <Box className="container" justifyContent="right !important">
          {contactUs.map((link, index) => (
            <Link href={link?.link} underline="none" className="contact-label" key={index}>
              {link?.title}
            </Link>
          ))}
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
