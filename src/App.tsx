import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';
import { BACKGROUND_IMAGE } from './config';

const AppWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background-image: url(./${BACKGROUND_IMAGE});
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
