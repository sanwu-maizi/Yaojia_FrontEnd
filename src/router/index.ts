import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const NotFound = lazy(() => import('../pages/NotFound.tsx'));
const Home = lazy(() => import('../pages/Home.tsx'));
const Login = lazy(() => import('../pages/Login.tsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/Login',
    Component: Login,
  },
  {
    path: '*',
    Component: NotFound
  }
]);
