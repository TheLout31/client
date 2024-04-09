import { createContext, useState, useContext } from "react";
import React from "react";

const DocumentIDContext = createContext();

export const DocumentIDProvider = ({ children }) => {
  const [documentID, setDocumentID] = useState([]);
  return (
    <DocumentIDContext.Provider value={{ documentID, setDocumentID }}>
      {children}
    </DocumentIDContext.Provider>
  );
};

export const useDocumentId = () => useContext(DocumentIDContext);
