import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Dashboard from "../../modules/aiMentor/pages/dashboard/dashboard";
import MentorChat from "../../modules/aiMentor/pages/mentorChat/MentorChat";
import Roadmap from "../../modules/aiMentor/pages/roadmap/Roadmap";
import Profile from "../../modules/aiMentor/pages/profile/Profile";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import ProfileSetup from "../pages/ProfileSetup";

import KnowledgeVaultRoutes from "../../modules/knowledgeVault/routes/knowledgeVaultRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/mentor" element={<MentorChat />} />

          <Route path="/roadmap" element={<Roadmap />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/vault/*" element={<KnowledgeVaultRoutes />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;