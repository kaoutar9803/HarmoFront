import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../pages/templates/header';  
import Footer from '../pages/templates/footer';  
import Login from '../pages/login';
import Register from '../pages/register';
import HomePage from '../pages/index';
import IntranetPage from '../pages/Profil/intranet.js'; 
import UserForm from '../pages/Profil/profil.js'; 
import UserProgrammes from '../pages/Profil/userprogrammes.js'; 
import Programmes from '../pages/Profil/programmes.js'; 
import Articles from '../pages/Profil/articles'; 
import Offres from '../pages/Profil/offres'; 
import User from '../pages/Profil/user'; 
import Chat from '../pages/Profil/chat.js'; 

import { useAuth } from '../pages/Profil/AuthProvider'; 



const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return <div>Chargement...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutWithHeaderAndFooter main={<HomePage />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/intranet" element={<ProtectedRoute component={IntranetPage} />} />
      <Route path="/profil" element={<ProtectedRoute component={UserForm} />} />
      <Route path="/mes-programmes" element={<ProtectedRoute component={UserProgrammes} />} />
      <Route path="/programmes" element={<ProtectedRoute component={Programmes} />} />
      <Route path="/articles" element={<ProtectedRoute component={Articles} />} />
      <Route path="/offres" element={<ProtectedRoute component={Offres} />} />
      <Route path="/user" element={<ProtectedRoute component={User} />} />
      <Route path="/chat" element={<ProtectedRoute component={Chat} />} />
      <Route path="/" element={<LayoutWithHeaderAndFooter />} />
    </Routes>
  );
};

const LayoutWithHeaderAndFooter = ({ main }) => {
  return (
    <>
      <Header />
      <div>
        {main}
      </div>
      <Footer />
    </>
  );
};

export default AppRouter;
