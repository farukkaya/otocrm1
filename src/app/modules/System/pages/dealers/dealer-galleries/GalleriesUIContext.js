/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./GalleriesUIHelper";

const GalleriesUIContext = createContext();

export function useGalleriesUIContext() {
  return useContext(GalleriesUIContext);
}

export const GalleriesUIConsumer = GalleriesUIContext.Consumer;

export function GalleriesUIProvider({ currentDealerId, children }) {
  const [dealerId, setDealerId] = useState(currentDealerId);
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
  const [showEditGalleryDialog, setShowEditGalleryDialog] = useState(false);
  const initGallery = {
    id:undefined,
    name: "",
    level:undefined,
    dealer:"",
    taxOffice:"",
    taxOfficeId:undefined,
    taxIdentityNo: ""
  };
  useEffect(()=> {
    initGallery.dealerId = currentDealerId;
    setDealerId(currentDealerId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDealerId]);
  const openNewGalleryDialog = () => {
    setSelectedId(undefined);
    setShowEditGalleryDialog(true);
  };
  const openEditGalleryDialog = id => {
    setSelectedId(id);
    setShowEditGalleryDialog(true);
  };
  const closeEditGalleryDialog = () => {
    setSelectedId(undefined);
    setShowEditGalleryDialog(false);
  };
  const [showDeleteGalleryDialog, setShowDeleteGalleryDialog] = useState(false);
  const openDeleteGalleryDialog = id => {
    setSelectedId(id);
    setShowDeleteGalleryDialog(true);
  };
  const closeDeleteGalleryDialog = () => {
    setSelectedId(undefined);
    setShowDeleteGalleryDialog(false);
  };

  const [showDeleteGalleriesDialog, setShowDeleteGalleriesDialog] = useState(false);
  const openDeleteGalleriesDialog = () => {
    setShowDeleteGalleriesDialog(true);
  };
  const closeDeleteGalleriesDialog = () => {
    setShowDeleteGalleriesDialog(false);
  };

  const [showFetchGalleriesDialog, setShowFetchGalleriesDialog] = useState(false);
  const openFetchGalleriesDialog = () => {
    setShowFetchGalleriesDialog(true);
  };
  const closeFetchGalleriesDialog = () => {
    setShowFetchGalleriesDialog(false);
  };

  const value = {
    ids,
    setIds,
    dealerId,
    setDealerId,
    queryParams,
    setQueryParams,
    initGallery,
    selectedId,
    showEditGalleryDialog,
    openNewGalleryDialog,    
    openEditGalleryDialog,
    closeEditGalleryDialog,
    showDeleteGalleryDialog,
    openDeleteGalleryDialog,
    closeDeleteGalleryDialog,
    showDeleteGalleriesDialog,
    openDeleteGalleriesDialog,
    closeDeleteGalleriesDialog,
    openFetchGalleriesDialog,
    closeFetchGalleriesDialog,
    showFetchGalleriesDialog
  };
  
  return (
    <GalleriesUIContext.Provider value={value}>
      {children}
    </GalleriesUIContext.Provider>
  );
}
