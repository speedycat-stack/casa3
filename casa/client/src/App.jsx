import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BackButton from "./components/BackButton/BackButton";

// Lazy-loaded feature components
const Home = lazy(() => import("./features/home/pages/Home"));
const Products = lazy(() => import("./features/products/pages/ProductsPage"));
const Contact = lazy(() => import("./Pages/ContactP"));
const Auth = lazy(() => import("./features/auth/pages/AuthPage"));
const Profile = lazy(() => import("./Pages/ProfileP"));
const Map = lazy(() => import("./Pages/MapP"));
const Donation = lazy(() => import("./features/donation/pages/DonationPage"));
const Volunteer = lazy(() => import("./Pages/VolunteerP"));
const DetailProduct = lazy(() => import("./components/Products/DetailProduct/DetailProduct"));

// Layouts
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));
const DonationLayout = lazy(() => import("./layouts/DonationLayout"));

const Orders = lazy(() => import("./components/Orders/Orders"));
const Traceability = lazy(() => import("./components/Traceability/Traceability"));
const Account = lazy(() => import("./components/Account/Account"));
const Box = lazy(() => import("./components/Box/Box"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Payment = lazy(() => import("./components/Payment/Payment"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Route>

        {/* Profile routes */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route 
            path="orders" 
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Orders />
              </Suspense>
            } 
          />
          <Route 
            path="traceability" 
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Traceability />
              </Suspense>
            } 
          />
          <Route 
            path="account" 
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Account />
              </Suspense>
            } 
          />
        </Route>

        {/* Donation routes */}
        <Route path="/donation" element={<DonationLayout />}>
          <Route index element={<Box />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
