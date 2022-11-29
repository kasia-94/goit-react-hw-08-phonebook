import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';
// import { Title, Section } from './App.styled';
import { Layout } from './Layout';

export function App() {
  const Register = lazy(() => import('../pages/Register/Register'));
  const Login = lazy(() => import('../pages/Login/Login'));
  const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
