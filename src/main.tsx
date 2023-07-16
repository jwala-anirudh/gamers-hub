import React from 'react';
import ReactDOM from 'react-dom/client';

// Chakra UI
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme.ts';

import App from './App.tsx';
import './index.css';

const appRootElement = document.getElementById('root') as HTMLElement;

const appRoot = ReactDOM.createRoot(appRootElement);

appRoot.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
