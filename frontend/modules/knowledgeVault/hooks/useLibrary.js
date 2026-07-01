import { useState } from "react";

const useLibrary = () => {

    const [folders, setFolders] = useState([]);

    const [resources, setResources] = useState([]);

    return {

        folders,
        setFolders,

        resources,
        setResources,

    };

};

export default useLibrary;