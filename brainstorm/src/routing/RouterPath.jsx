import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUp";
import LoginPage from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/dashboard/Layout";
import Gaming from "../pages/Gaming";
import Development from "../pages/Development";
import Research from "../pages/Research";
import MyPosts from "../pages/MyPosts";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Post from "../components/app/Post";

function RouterPath() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="gaming" element={<Gaming />} />
        <Route path="development" element={<Development />} />
        <Route path="research" element={<Research />} />
        <Route path="myposts" element={<MyPosts />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="post" element={<Post />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default RouterPath;
