import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FullPageLoader from './Components/FullPageLoader';
import Loader from './Components/Loader';

// Lazy loaded components
const LandingPage = lazy(() => import('./Components/LandingPage'));
const SignUp = lazy(() => import('./Components/SignUp'));
const SignIn = lazy(() => import('./Components/signIn'));
const Home = lazy(() => import('./Components/Home'));
const Authenticate = lazy(() => import('./Components/Authenticate'));
const CreateUrl = lazy(() => import('./Components/CreateUrl'));
const AllLinks = lazy(() => import('./Components/AllLinks'));
const ResetPassword = lazy(() => import('./Components/ResetPassword'));
const ResetForm = lazy(() => import('./Components/ResetForm'));
const ThankYou = lazy(() => import('./Components/ThankYou'));

function App() {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    <>
      {isLoading && <Loader />}

      <Suspense fallback={<FullPageLoader />}>
        {/* FIX: Wrap Routes inside BrowserRouter */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thankYou" element={<ThankYou />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/authenticate/:id" element={<Authenticate />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/resetPassword/:token/:email" element={<ResetForm />} />

            {/* Nested Routes for dashboard */}
            <Route path="/dashboard" element={<Home />}>
              <Route path="create-link" element={<CreateUrl />} />
              <Route path="view-links" element={<AllLinks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
