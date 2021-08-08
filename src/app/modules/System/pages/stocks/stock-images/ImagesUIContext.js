/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState } from "react";

const ImagesUIContext = createContext();

export const useImagesUIContext= () =>useContext(ImagesUIContext);
export const ImagesUIConsumer  = ImagesUIContext.Consumer;

export function ImagesUIProvider({ currentStockId, children }) {
  const [stockId, setStockId] = useState(currentStockId);
  const [selectedId, setSelectedId] = useState(null);
  const [ids, setIds] = useState([]);
 
  useEffect(()=> { setStockId(currentStockId); }, [currentStockId]);

  const [showAddImagesDialog, setShowAddImagesDialog] = useState(false);
  const openAddImagesDialog = () => {
    setShowAddImagesDialog(true);
  };
  const closeAddImagesDialog = () => {
    setShowAddImagesDialog(false);
  };

  const [showDeleteImageDialog, setShowDeleteImageDialog] = useState(false);
  const openDeleteImageDialog = id => {
    setSelectedId(id);
    setShowDeleteImageDialog(true);
  };
  const closeDeleteImageDialog = () => {
    setSelectedId(undefined);
    setShowDeleteImageDialog(false);
  };

  const [showDeleteImagesDialog, setShowDeleteImagesDialog] = useState(false);
  const openDeleteImagesDialog = () => {
    setShowDeleteImagesDialog(true);
  };
  const closeDeleteImagesDialog = () => {
    setShowDeleteImagesDialog(false);
  };

  const value = {
    ids,
    setIds,
    stockId,
    setStockId,
    selectedId,
    showAddImagesDialog,
    openAddImagesDialog,
    closeAddImagesDialog,
    showDeleteImageDialog,
    openDeleteImageDialog,
    closeDeleteImageDialog,
    showDeleteImagesDialog,
    openDeleteImagesDialog,
    closeDeleteImagesDialog,
  };
  
  return (
    <ImagesUIContext.Provider value={value}>
      {children}
    </ImagesUIContext.Provider>
  );
}
