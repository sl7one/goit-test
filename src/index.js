import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/modern-normalize.css';
import './styles/reset.css';
import './styles/index.css';
import { App } from './pages/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';
import { User } from 'pages/User';

const publicRouter = createBrowserRouter([
   {
      path: '/goit-test',
      element: <App />,
      errorElement: <ErrorPage />,
   },
   { path: '/goit-test/:userId', element: <User /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <React.StrictMode>
   <RouterProvider router={publicRouter} />
   // </React.StrictMode>
);
