import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { useDispatch } from 'react-redux';
import { useAuth } from 'redux/auth/useAuth';
import { refreshUser } from 'redux/auth/operations';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { lazy } from 'react';

// при імпортуванні через lazy,треба робити дефолтні експорти
const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
