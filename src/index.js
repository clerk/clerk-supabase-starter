import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

import App from './App';
import { Layout, NoMatch, SignIn, SignUp } from './components';

import './styles/index.css';

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider frontendApi={frontendApi}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
