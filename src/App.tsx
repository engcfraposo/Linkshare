import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import history from './routes/history';

import HeaderComponent from './components/HeaderComponent';

import GlobalStyle from './styles/global';
import FooterComponent from './components/FooterComponent';
import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <Provider store={store}>
        <Router history={history}>
          <GlobalStyle />
          <HeaderComponent />
          <Routes />
          <FooterComponent />
        </Router>
      </Provider>
    </AppProvider>
  );
}

export default App;
