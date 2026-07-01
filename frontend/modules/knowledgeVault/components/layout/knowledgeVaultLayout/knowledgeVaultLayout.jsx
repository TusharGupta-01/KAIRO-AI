import CreateNoteModal from "../../resource/createNoteModal";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import ChatModal from "../../ai/chatModal";
import Sidebar from "../../navigation/sidebar";
import Navbar from "../../navigation/navbar";

import CreateFolderModal from "../../folder/createFolderModal";
import UploadResourceModal from "../../resource/uploadResourceModal";

import ImportLinkModal from "../../resource/importLinkModal";

import { useFolders } from "../../../hooks/folderContext";

const KnowledgeVaultLayout = () => {
  const {
    folders,

    createFolder,
    addResource,

    isCreateFolderModalOpen,
    closeCreateModal,

    isUploadModalOpen,
    closeUploadModal,

    isImportLinkModalOpen,
    closeImportLinkModal,

    isCreateNoteModalOpen,
    closeCreateNoteModal,

  isChatModalOpen,
  closeChatModal,

  } = useFolders();

  

  // --------------------------
  // Create Folder States
  // --------------------------

  const [folderName, setFolderName] = useState("");

  const [description, setDescription] = useState("");

  const [selectedColor, setSelectedColor] =
    useState("#7C3AED");

  // --------------------------
  // Upload States
  // --------------------------

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [selectedFolder, setSelectedFolder] =
    useState("");

  // --------------------------
  // Create Folder
  // --------------------------

  const handleCreateFolder = () => {
    if (!folderName.trim()) return;

    createFolder({
      id: Date.now(),
      name: folderName,
      description,
      color: selectedColor,
      createdAt: new Date(),
      updatedAt: new Date(),
      resources: [],
    });

    setFolderName("");
    setDescription("");
    setSelectedColor("#7C3AED");

    closeCreateModal();
  };

  // --------------------------
  // Upload Resource
  // --------------------------

  const handleUpload = () => {
    if (!selectedFile) return;

    if (!selectedFolder) return;

    const extension = selectedFile.name
      .split(".")
      .pop()
      .toLowerCase();

    const resource = {
      id: Date.now(),
      name: selectedFile.name,
      type: extension,
      size: selectedFile.size,
      file: selectedFile,
      url: URL.createObjectURL(selectedFile),
      uploadedAt: new Date(),
      favorite: false,
      tags: [],
      notes: [],
    };

    addResource(selectedFolder, resource);

    setSelectedFile(null);
    setSelectedFolder("");

    closeUploadModal();
  };

  // --------------------------
// Import Link
// --------------------------

const handleImportLink = ({
  title,
  url,
  folderId,
}) => {

  const resource = {
    id: Date.now(),

    name:
      title.trim() ||
      new URL(url).hostname,

    type: "link",

    url,

    size: 0,

    uploadedAt: new Date(),

    favorite: false,

    tags: [],

    notes: [],
  };

  addResource(folderId, resource);

  closeImportLinkModal();

};
// --------------------------
// Create Note
// --------------------------

const handleCreateNote = ({
  title,
  content,
  folderId,
}) => {
  const resource = {
    id: Date.now(),

    name: title,

    type: "note",

    content,

    size: 0,

    uploadedAt: new Date(),

    favorite: false,

    tags: [],

    notes: [],
  };

  addResource(folderId, resource);

  closeCreateNoteModal();
};

  return (
    <div className="flex h-screen w-full bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto px-10 py-10">
          <Outlet />
        </main>
      </div>

      {/* Create Folder Modal */}

      <CreateFolderModal
        open={isCreateFolderModalOpen}
        onClose={closeCreateModal}
        folderName={folderName}
        setFolderName={setFolderName}
        description={description}
        setDescription={setDescription}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        onCreate={handleCreateFolder}
      />

      {/* Upload Resource Modal */}

      <UploadResourceModal
        open={isUploadModalOpen}
        onClose={closeUploadModal}
        folders={folders}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        onUpload={handleUpload}
      />

      <ImportLinkModal
  open={isImportLinkModalOpen}
  onClose={closeImportLinkModal}
  folders={folders}
  onImport={handleImportLink}
/>

      <CreateNoteModal
        open={isCreateNoteModalOpen}
        onClose={closeCreateNoteModal}
        folders={folders}
        onCreate={handleCreateNote}
      />

<ChatModal
  open={isChatModalOpen}
  onClose={closeChatModal}
/>

    </div>
  );
};

export default KnowledgeVaultLayout;