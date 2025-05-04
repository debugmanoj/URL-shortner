<<<<<<< HEAD
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
=======
import LandingPage from "../Components/LandingPage";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/signIn";
import Home from "../Components/Home"
import Authenticate from "../Components/Authenticate"
import CreateUrl from "../Components/CreateUrl";
import AllLinks from "../Components/AllLinks";
import ResetPassword from "../Components/ResetPassword";
import ResetForm from "../Components/ResetForm";
import ThankYou from "../Components/ThankYou";



const AppRoutes=[
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/thankYou",
        element:<ThankYou/>
    },
    {
        path:"/signUp",
        element:<SignUp/>
    },
    {
        path:"/signIn",
        element:<SignIn/>
    },
    {
        path:"/home/:name",
        element:<Home/>,
        children:[
        {
            path:"createUrl",
            element:<CreateUrl/>
        },
        {
            path:"AllLinks",
            element:<AllLinks/>
        }
    ],
    },
    {
        path:"/authenticate/:id",
        element:<Authenticate/>
    },
    {
        path:"/resetPassword",
        element:<ResetPassword/>
    },
    {

        path:"/resetPassword/:token/:email",
        element:<ResetForm/>
    },

]

export default AppRoutes
>>>>>>> 4d7ac20eaa2e317d1f45dc5d4ee3b47d7a6ef74c
