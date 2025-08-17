import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/Signup";
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
import Search from "../components/dashboard/Search";
import ProtectedRoute from "../components/auth/ProtectedRoute";

function RouterPath() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="gaming" element={<Gaming />} />
        <Route path="development" element={<Development />} />
        <Route path="research" element={<Research />} />
        <Route path="myposts" element={<MyPosts />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="post" element={<Post />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default RouterPath;
