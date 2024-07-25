import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Dashboard from './pages/Dashboard';
import Doctor from './pages/Doctor';
import Settings from './pages/Settings';
import Consultation from './pages/Consultation';
import './css/index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard /> 
      },
      {
        path: '/doctor',
        element: <Doctor />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/consultation',
        element: <Consultation />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <h1>Not found</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);