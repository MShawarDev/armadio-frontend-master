import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import { Slide, ToastContainer } from 'react-toastify';
import { StylesProvider, jssPreset } from '@mui/styles';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';
import rtl from 'jss-rtl';
import { create } from 'jss';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#B20000', // Customize primary color if needed
      },
      secondary: {
        main: '#fff', // Customize secondary color if needed
      },
      text: {
        primary: '#fff', // Default text color
      },
      background: {
        default: '#1A1A1A', // Customize background color if needed
      },
      action: {
        active: '#fff', // Customize active action color if needed
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputLabel-root': {
              color: '#fff', // Customize label color for text fields
            },
            '& .MuiInputBase-input': {
              color: '#fff', // Customize input text color for text fields
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff', // Customize outline border color for text fields
              },
              '&:hover fieldset': {
                borderColor: '#fff', // Customize hover outline border color for text fields
              },
            },
          },
        },
      },
    },
  });

  // const theme = createTheme({
  //   direction: 'ltr',
  //   palette: {
  //     primary: {
  //       main: '#fff',

  //     }, 'secondary': {
  //       main: '#fff'
  //     }
  //   },
  // });

  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <ToastContainer
            theme="colored"
            position={'bottom-right'}
            autoClose={5000}
            transition={Slide}
            rtl={false}
            limit={5}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            pauseOnFocusLoss={true}
            draggable={true}
            pauseOnHover={true}
          />
          <AppRouter />
        </StylesProvider>
      </ThemeProvider>
    </div>

  );
};

export default App;
