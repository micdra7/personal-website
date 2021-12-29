import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Layout } from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page';

const GlobalRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <GlobalRoutes />
    </Layout>
  </ChakraProvider>
);
