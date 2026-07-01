import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import { FolderProvider } from "../modules/knowledgeVault/hooks/folderContext";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <FolderProvider>

      <App />

    </FolderProvider>

  </StrictMode>

);