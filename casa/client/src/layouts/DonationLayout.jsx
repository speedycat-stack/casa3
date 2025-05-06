import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';

const DonationLayout = () => {
  return (
    <>
      <Navbar variant="donation" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DonationLayout;