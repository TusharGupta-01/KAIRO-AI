import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
const FolderContext = createContext();

export const FolderProvider = ({ children }) => {
  // --------------------------
  // Folder State
  // --------------------------

const [folders, setFolders] = useState(() => {
  try {
    const saved = localStorage.getItem("kv-folders");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});
  const [searchQuery, setSearchQuery] = useState("");
const [activities, setActivities] = useState(() => {
  try {
    const saved = localStorage.getItem("kv-activities");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});  // --------------------------
  // Folder Modal
  // --------------------------

  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

  // --------------------------
  // Upload Modal
  // --------------------------

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const [isImportLinkModalOpen, setIsImportLinkModalOpen] = useState(false);

  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false);

  // --------------------------
  // Chat Modal
  // --------------------------

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  // Keeps track of which folder opened the upload modal
  const [activeFolderId, setActiveFolderId] = useState(null);

const addActivity = (text) => {
  setActivities((previous) => [
    {
      id: Date.now(),
      text,
      createdAt: new Date(),
    },
    ...previous,
  ]);
};

  // --------------------------
  // Folder CRUD
  // --------------------------

  const createFolder = (folder) => {
    setFolders((previous) => [...previous, folder]);
    addActivity(`📁 Created folder "${folder.name}"`);
  };

  const deleteFolder = (id) => {

  const folder = folders.find((folder) => folder.id === id);

  if (folder) {
    addActivity(`🗑 Deleted folder "${folder.name}"`);
  }

  setFolders((previous) =>
    previous.filter((folder) => folder.id !== id)
  );

};

  const updateFolder = (id, updatedFolder) => {
    setFolders((previous) =>
      previous.map((folder) => (folder.id === id ? updatedFolder : folder)),
    );
  };

  // --------------------------
  // Resource CRUD
  // --------------------------

  const addResource = (folderId, resource) => {

  if (resource.type === "note") {
    addActivity(`📝 Created note "${resource.name}"`);
  }

  else if (resource.type === "link") {
    addActivity(`🔗 Saved link "${resource.name}"`);
  }

  else {
    addActivity(`📄 Uploaded "${resource.name}"`);
  }

  setFolders((previous) =>
    previous.map((folder) =>
      folder.id === folderId
        ? {
            ...folder,
            resources: [...folder.resources, resource],
            updatedAt: new Date(),
          }
        : folder
    )
  );

};

  const deleteResource = (folderId, resourceId) => {
    setFolders((previousFolders) =>
      previousFolders.map((folder) => {
        if (folder.id !== folderId) return folder;
const deletedResource = folder.resources.find(
  (resource) => resource.id === resourceId
);

if (deletedResource) {
  addActivity(`🗑 Deleted "${deletedResource.name}"`);
}
        return {
          ...folder,

          resources: folder.resources.filter(
            (resource) => resource.id !== resourceId,
          ),

          updatedAt: new Date(),
        };
      }),
    );
  };

  const updateResource = (folderId, resourceId, updatedResource) => {
    setFolders((previous) =>
      previous.map((folder) =>
        folder.id === folderId
          ? {
              ...folder,
              resources: folder.resources.map((resource) =>
                resource.id === resourceId ? updatedResource : resource,
              ),
              updatedAt: new Date(),
            }
          : folder,
      ),
    );
  };

  // --------------------------
  // Toggle Favorite
  // --------------------------

  const toggleFavorite = (folderId, resourceId) => {
    setFolders((previousFolders) =>
      previousFolders.map((folder) => {
        if (folder.id !== folderId) return folder;
const current = folder.resources.find(
  (resource) => resource.id === resourceId
);

if (current) {
  addActivity(
    current.favorite
      ? `⭐ Removed "${current.name}" from Favorites`
      : `⭐ Added "${current.name}" to Favorites`
  );
}
        return {
          ...folder,
          resources: folder.resources.map((resource) =>
            resource.id === resourceId
              ? {
                  ...resource,
                  favorite: !resource.favorite,
                }
              : resource,
          ),
        };
      }),
    );
  };
  // --------------------------
  // Folder Modal Controls
  // --------------------------

  const openCreateModal = () => {
    setIsCreateFolderModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateFolderModalOpen(false);
  };

  // --------------------------
  // Upload Modal Controls
  // --------------------------

  const openUploadModal = (folderId = null) => {
    setActiveFolderId(folderId);
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    setActiveFolderId(null);
  };

  const openImportLinkModal = (folderId = null) => {
    setActiveFolderId(folderId);
    setIsImportLinkModalOpen(true);
  };

  const closeImportLinkModal = () => {
    setIsImportLinkModalOpen(false);
    setActiveFolderId(null);
  };

  // --------------------------
  // Create Note Modal Controls
  // --------------------------

  const openCreateNoteModal = (folderId = null) => {
    setActiveFolderId(folderId);
    setIsCreateNoteModalOpen(true);
  };

  const closeCreateNoteModal = () => {
    setIsCreateNoteModalOpen(false);
    setActiveFolderId(null);
  };

  // --------------------------
  // Chat Modal Controls
  // --------------------------

  const openChatModal = (folderId = null) => {
    setActiveFolderId(folderId);
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
  setIsChatModalOpen(false);
  setActiveFolderId(null);
};

// --------------------------
// Save to Local Storage
// --------------------------

useEffect(() => {
  localStorage.setItem(
    "kv-folders",
    JSON.stringify(folders)
  );
}, [folders]);

useEffect(() => {
  localStorage.setItem(
    "kv-activities",
    JSON.stringify(activities)
  );
}, [activities]);

return (
  <FolderContext.Provider
    value={{
        // Folder State
        folders,

        // Folder CRUD
        createFolder,
        deleteFolder,
        updateFolder,

        // Resource CRUD
        addResource,
        deleteResource,
        updateResource,
        toggleFavorite,

        // Folder Modal
        isCreateFolderModalOpen,
        openCreateModal,
        closeCreateModal,

        // Upload Modal
        isUploadModalOpen,
        openUploadModal,
        closeUploadModal,

        // Active Folder
        activeFolderId,

        searchQuery,
        setSearchQuery,

        isImportLinkModalOpen,
        openImportLinkModal,
        closeImportLinkModal,

        // Create Note Modal
        isCreateNoteModalOpen,
        openCreateNoteModal,
        closeCreateNoteModal,

        // Chat Modal
        isChatModalOpen,
        openChatModal,
        closeChatModal,

        activities,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export const useFolders = () => useContext(FolderContext);
