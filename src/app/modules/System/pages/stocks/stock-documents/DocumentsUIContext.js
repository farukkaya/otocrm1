/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./DocumentsUIHelper";

const DocumentsUIContext = createContext();

export function useDocumentsUIContext() {
  return useContext(DocumentsUIContext);
}

export const DocumentsUIConsumer = DocumentsUIContext.Consumer;

export function DocumentsUIProvider({ currentStockId, children }) {
  const [stockId, setStockId] = useState(currentStockId);
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback(nextQueryParams => {
    setQueryParamsBase(prevQueryParams => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);
  const [selectedId, setSelectedId] = useState(null);
  const [showEditDocumentDialog, setShowEditDocumentDialog] = useState(false);
  const initDocument = {
    id:undefined,
    stockId:stockId,
    documentOrder:"",
    documentTypeId: undefined,
    documentDate: undefined,
    amount:undefined
  };
  useEffect(()=> {
    setStockId(currentStockId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStockId]);
  const openNewDocumentDialog = () => {
    setSelectedId(undefined);
    setShowEditDocumentDialog(true);
  };
  const openEditDocumentDialog = id => {
    setSelectedId(id);
    setShowEditDocumentDialog(true);
  };
 

  const closeEditDocumentDialog = () => {
    setSelectedId(undefined);
    setShowEditDocumentDialog(false);
  };
  const [showDeleteDocumentDialog, setShowDeleteDocumentDialog] = useState(false);
  const openDeleteDocumentDialog = id => {
    setSelectedId(id);
    setShowDeleteDocumentDialog(true);
  };
  const closeDeleteDocumentDialog = () => {
    setSelectedId(undefined);
    setShowDeleteDocumentDialog(false);
  };

  const [showUpdateStatusDocumentDialog, setShowUpdateStatusDocumentDialog] = useState(false);

  const openUpdateStatusDocumentDialog = id => {
    setSelectedId(id);
    setShowUpdateStatusDocumentDialog(true);
  };
  const closeUpdateStatusDocumentDialog = () => {
    setSelectedId(undefined);
    setShowUpdateStatusDocumentDialog(false);
  };

  const [showDeleteDocumentsDialog, setShowDeleteDocumentsDialog] = useState(false);
  const openDeleteDocumentsDialog = () => {
    setShowDeleteDocumentsDialog(true);
  };
  const closeDeleteDocumentsDialog = () => {
    setShowDeleteDocumentsDialog(false);
  };

  const [showFetchDocumentsDialog, setShowFetchDocumentsDialog] = useState(false);
  const openFetchDocumentsDialog = () => {
    setShowFetchDocumentsDialog(true);
  };
  const closeFetchDocumentsDialog = () => {
    setShowFetchDocumentsDialog(false);
  };

  const value = {
    ids,
    setIds,
    stockId,
    setStockId,
    queryParams,
    setQueryParams,
    initDocument,
    selectedId,
    showEditDocumentDialog,
    openNewDocumentDialog,    
    openEditDocumentDialog,
    openUpdateStatusDocumentDialog,
    closeUpdateStatusDocumentDialog,
    showUpdateStatusDocumentDialog,
    closeEditDocumentDialog,
    showDeleteDocumentDialog,
    openDeleteDocumentDialog,
    closeDeleteDocumentDialog,
    showDeleteDocumentsDialog,
    openDeleteDocumentsDialog,
    closeDeleteDocumentsDialog,
    openFetchDocumentsDialog,
    closeFetchDocumentsDialog,
    showFetchDocumentsDialog
  };
  
  return (
    <DocumentsUIContext.Provider value={value}>
      {children}
    </DocumentsUIContext.Provider>
  );
}
