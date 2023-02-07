import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/errorPage/errorPage';
import FeaturesPage from './pages/features/FeaturesPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signUp/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",//router route
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/features",
    element: <FeaturesPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
