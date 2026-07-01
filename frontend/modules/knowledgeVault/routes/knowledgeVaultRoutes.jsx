import { Routes, Route } from "react-router-dom";

import KnowledgeVaultLayout from "../components/layout/knowledgeVaultLayout";

import MyLibrary from "../pages/myLibrary";
import Shared from "../pages/shared";
import Favorites from "../pages/favorites";
import Trash from "../pages/trash";
import Activity from "../pages/activity";
import Settings from "../pages/settings";

import FolderPage from "../pages/folder";

const KnowledgeVaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<KnowledgeVaultLayout />}>
        <Route index element={<MyLibrary />} />

        <Route path="my-library" element={<MyLibrary />} />

        <Route path="shared" element={<Shared />} />

        <Route path="favorites" element={<Favorites />} />

        <Route path="trash" element={<Trash />} />

        <Route path="activity" element={<Activity />} />

        <Route path="settings" element={<Settings />} />

        <Route
          path="folder/:folderId"
          element={<FolderPage />}
        />
      </Route>
    </Routes>
  );
};

export default KnowledgeVaultRoutes;