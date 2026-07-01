import { useState } from "react";

import {
  Upload,
  FolderPlus,
  Link2,
  MessageSquare,
  FolderOpen,
  FileText,
} from "lucide-react";

import WelcomeBanner from "../../components/common/welcomeBanner/welcomeBanner";
import QuickActions from "../../components/common/quickActions/quickActions";
import EmptyResourceState from "../../components/feedback/emptyResourceState/emptyResourceState";

import CreateFolderModal from "../../components/folder/createFolderModal";
import FolderList from "../../components/folder/folderList";

import { useFolders } from "../../hooks/folderContext";

const MyLibrary = () => {
  const {
  folders,
  createFolder,

  searchQuery,

  isCreateFolderModalOpen,
  openCreateModal,
  closeCreateModal,

  openUploadModal,
  openImportLinkModal,
  openCreateNoteModal,

  openChatModal,

} = useFolders();

  // --------------------------
  // Folder States
  // --------------------------

  const [folderName, setFolderName] = useState("");

  const [description, setDescription] = useState("");

  const [selectedColor, setSelectedColor] =
    useState("#7C3AED");

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
  // Search Filter
  // --------------------------

  const filteredFolders = folders.filter((folder) => {
    const query = searchQuery.toLowerCase();

    const folderMatch = folder.name
      .toLowerCase()
      .includes(query);

    const resourceMatch = folder.resources.some(
      (resource) =>
        resource.name
          .toLowerCase()
          .includes(query)
    );

    return folderMatch || resourceMatch;
  });

  return (
    <>
      <WelcomeBanner
        title="Welcome to your Knowledge Vault"
        description="Store everything related to your studies in one intelligent workspace."
        actions={[
          {
            label: "Upload Resource",
            icon: Upload,
            onClick: openUploadModal,
          },
          {
            label: "Create Folder",
            icon: FolderPlus,
            onClick: openCreateModal,
            variant: "secondary",
          },
          {
            label: "Create Note",
            icon: FileText,
            onClick: openCreateNoteModal,
          }
        ]}
      />

      <QuickActions
        actions={[
          {
            label: "Upload Resource",
            icon: Upload,
            onClick: openUploadModal,
          },
          {
            label: "Import Link",
            icon: Link2,
            onClick: openImportLinkModal,
          },
          {
            label: "Create Folder",
            icon: FolderPlus,
            onClick: openCreateModal,
          },
              {
      label: "Chat with Documents",
      icon: MessageSquare,
      onClick: openChatModal,
    },
        ]}
      />

      {folders.length === 0 ? (
        <EmptyResourceState
          icon={FolderOpen}
          title="Your Library is Empty"
          description="Create your first folder to start organizing your study materials."
          actions={[
            {
              label: "Create Folder",
              icon: FolderPlus,
              onClick: openCreateModal,
            },
          ]}
        />
      ) : filteredFolders.length === 0 ? (
        <EmptyResourceState
          icon={FolderOpen}
          title="No Matching Folder"
          description="Try another search keyword."
          actions={[]}
        />
      ) : (
        <FolderList folders={filteredFolders} />
      )}

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
    </>
  );
};

export default MyLibrary;