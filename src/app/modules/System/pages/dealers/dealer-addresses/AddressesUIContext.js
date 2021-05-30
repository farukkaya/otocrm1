/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./AddressesUIHelper";

const AddressesUIContext = createContext();

export function useAddressesUIContext() {
  return useContext(AddressesUIContext);
}

export const AddressesUIConsumer = AddressesUIContext.Consumer;

export function AddressesUIProvider({ guid, children }) {
  const [relationGuid, setRelationGuid] = useState(guid);
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
  const [showEditAddressDialog, setShowEditAddressDialog] = useState(false);
  const initAddress = {
    name:"",
    countryId:undefined,
    cityId:undefined,
    townId:undefined,
    neighborhoodId:undefined,
    addressLine:"",
    isActive:true,
    isPrimaryAddress:false,
  };
  useEffect(()=> {
    setRelationGuid(guid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [relationGuid]);
  const openNewAddressDialog = () => {
    setSelectedId(undefined);
    setShowEditAddressDialog(true);
  };
  const openEditAddressDialog = id => {
    setSelectedId(id);
    setShowEditAddressDialog(true);
  };
 

  const closeEditAddressDialog = () => {
    setSelectedId(undefined);
    setShowEditAddressDialog(false);
  };
  const [showDeleteAddressDialog, setShowDeleteAddressDialog] = useState(false);
  const openDeleteAddressDialog = id => {
    setSelectedId(id);
    setShowDeleteAddressDialog(true);
  };
  const closeDeleteAddressDialog = () => {
    setSelectedId(undefined);
    setShowDeleteAddressDialog(false);
  };

  const [showUpdateStatusAddressDialog, setShowUpdateStatusAddressDialog] = useState(false);

  const openUpdateStatusAddressDialog = id => {
    setSelectedId(id);
    setShowUpdateStatusAddressDialog(true);
  };
  const closeUpdateStatusAddressDialog = () => {
    setSelectedId(undefined);
    setShowUpdateStatusAddressDialog(false);
  };

  const [showDeleteAddressesDialog, setShowDeleteAddressesDialog] = useState(false);
  const openDeleteAddressesDialog = () => {
    setShowDeleteAddressesDialog(true);
  };
  const closeDeleteAddressesDialog = () => {
    setShowDeleteAddressesDialog(false);
  };

  const [showFetchAddressesDialog, setShowFetchAddressesDialog] = useState(false);
  const openFetchAddressesDialog = () => {
    setShowFetchAddressesDialog(true);
  };
  const closeFetchAddressesDialog = () => {
    setShowFetchAddressesDialog(false);
  };
  const [showUpdatePrimaryAddressDialog, setShowUpdatePrimaryAddressDialog] = useState(false);

  const openUpdatePrimaryAddressDialog = id => {
    setSelectedId(id);
    setShowUpdatePrimaryAddressDialog(true);
  };
  const closeUpdatePrimaryAddressDialog = () => {
    setSelectedId(undefined);
    setShowUpdatePrimaryAddressDialog(false);
  };

   // #region MULTI UPDATE STATUS
   const [showUpdateAddressesStatusDialog, setShowUpdateAddressesStatusDialog] = useState(false);
   const openUpdateAddressesStatusDialog = () => {
     setShowUpdateAddressesStatusDialog(true);
   };
   const closeUpdateAddressesStatusDialog = () => {
     setSelectedId(undefined);
     setShowUpdateAddressesStatusDialog(false);
   };
   // #endregion


  const value = {
    ids,
    setIds,
    relationGuid,
    setRelationGuid,
    queryParams,
    setQueryParams,
    initAddress,
    selectedId,
    showEditAddressDialog,
    openNewAddressDialog,    
    openEditAddressDialog,
    openUpdateStatusAddressDialog,
    closeUpdateStatusAddressDialog,
    showUpdateStatusAddressDialog,
    closeEditAddressDialog,
    showDeleteAddressDialog,
    openDeleteAddressDialog,
    closeDeleteAddressDialog,
    showDeleteAddressesDialog,
    openDeleteAddressesDialog,
    closeDeleteAddressesDialog,
    openFetchAddressesDialog,
    closeFetchAddressesDialog,
    showFetchAddressesDialog,
    showUpdatePrimaryAddressDialog,
    openUpdatePrimaryAddressDialog,
    closeUpdatePrimaryAddressDialog,
    showUpdateAddressesStatusDialog,
    openUpdateAddressesStatusDialog,
    closeUpdateAddressesStatusDialog
  };
  
  return (
    <AddressesUIContext.Provider value={value}>
      {children}
    </AddressesUIContext.Provider>
  );
}
