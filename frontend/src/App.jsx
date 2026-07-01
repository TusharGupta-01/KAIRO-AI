import { BrowserRouter, Routes, Route } from "react-router-dom";
import KnowledgeVaultRoutes from "../modules/knowledgeVault/routes/knowledgeVaultRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<KnowledgeVaultRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;