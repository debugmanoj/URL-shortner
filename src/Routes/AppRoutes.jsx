import React, { lazy } from 'react';

const LandingPage = lazy(() => import('../Components/LandingPage'));
const SignUp = lazy(() => import('../Components/SignUp'));
const SignIn = lazy(() => import('../Components/signIn'));
const Home = lazy(() => import('../Components/Home'));
const Authenticate = lazy(() => import('../Components/Authenticate'));
const CreateUrl = lazy(() => import('../Components/CreateUrl'));
const AllLinks = lazy(() => import('../Components/AllLinks'));
const ResetPassword = lazy(() => import('../Components/ResetPassword'));
const ResetForm = lazy(() => import('../Components/ResetForm'));
const ThankYou = lazy(() => import('../Components/ThankYou'));

const AppRoutes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/thankYou',
    element: <ThankYou />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: <Home />,
    children: [
      {
        path: 'create-link',
        element: <CreateUrl />,
      },
      {
        path: 'view-links',
        element: <AllLinks />,
      },
    ],
  },
  {
    path: '/authenticate/:id',
    element: <Authenticate />,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword />,
  },
  {
    path: '/resetPassword/:token/:email',
    element: <ResetForm />,
  },
];

export default AppRoutes;
