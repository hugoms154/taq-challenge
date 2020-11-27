import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from './api/api';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />

    <Home />
  </ApolloProvider>
);

export default App;
