import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar';
import BackButton from '../components/common/BackButton/BackButton';
import Footer from '../components/common/Footer/Footer';

const ProfileLayout = () => {
  return (
    <>
      <Navbar variant="profile" />
      <BackButton />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProfileLayout;