import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../../modules/aiMentor/pages/dashboard/dashboard";
import MentorChat from "../../modules/aiMentor/pages/mentorChat/MentorChat";
// import Roadmap from "../../modules/aiMentor/pages/roadmap/Roadmap";
// import Profile from "../../modules/aiMentor/pages/profile/Profile";
// import KnowledgeVault from "../../modules/knowledgeVault/pages/myLibrary/MyLibrary";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/mentor" element={<MentorChat />} />

          {/* <Route path="/roadmap" element={<Roadmap />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/vault" element={<KnowledgeVault />} /> */}

          {/* Always keep this last */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
