/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./UsersUIHelper";

const UsersUIContext = createContext();

export function useUsersUIContext() {
  return useContext(UsersUIContext);
}

export const UsersUIConsumer = UsersUIContext.Consumer;

export function UsersUIProvider({ currentDealerId, children }) {
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
  const [showEditUserDialog, setShowEditUserDialog] = useState(false);
  const initUser = {
    id:undefined,
    name: "",
    capacityId:0,
    dealerId:dealerId,
    taxOfficeId:undefined,
    taxIdentityNo: ""
  };
  useEffect(()=> {
    setDealerId(currentDealerId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDealerId]);
  const openNewUserDialog = () => {
    setSelectedId(undefined);
    setShowEditUserDialog(true);
  };
  const openEditUserDialog = id => {
    setSelectedId(id);
    setShowEditUserDialog(true);
  };
 

  const closeEditUserDialog = () => {
    setSelectedId(undefined);
    setShowEditUserDialog(false);
  };
  const [showDeleteUserDialog, setShowDeleteUserDialog] = useState(false);
  const openDeleteUserDialog = id => {
    setSelectedId(id);
    setShowDeleteUserDialog(true);
  };
  const closeDeleteUserDialog = () => {
    setSelectedId(undefined);
    setShowDeleteUserDialog(false);
  };

  const [showUpdateStatusUserDialog, setShowUpdateStatusUserDialog] = useState(false);

  const openUpdateStatusUserDialog = id => {
    setSelectedId(id);
    setShowUpdateStatusUserDialog(true);
  };
  const closeUpdateStatusUserDialog = () => {
    setSelectedId(undefined);
    setShowUpdateStatusUserDialog(false);
  };

  const [showDeleteUsersDialog, setShowDeleteUsersDialog] = useState(false);
  const openDeleteUsersDialog = () => {
    setShowDeleteUsersDialog(true);
  };
  const closeDeleteUsersDialog = () => {
    setShowDeleteUsersDialog(false);
  };

  const [showFetchUsersDialog, setShowFetchUsersDialog] = useState(false);
  const openFetchUsersDialog = () => {
    setShowFetchUsersDialog(true);
  };
  const closeFetchUsersDialog = () => {
    setShowFetchUsersDialog(false);
  };

  const value = {
    ids,
    setIds,
    dealerId,
    setDealerId,
    queryParams,
    setQueryParams,
    initUser,
    selectedId,
    showEditUserDialog,
    openNewUserDialog,    
    openEditUserDialog,
    openUpdateStatusUserDialog,
    closeUpdateStatusUserDialog,
    showUpdateStatusUserDialog,
    closeEditUserDialog,
    showDeleteUserDialog,
    openDeleteUserDialog,
    closeDeleteUserDialog,
    showDeleteUsersDialog,
    openDeleteUsersDialog,
    closeDeleteUsersDialog,
    openFetchUsersDialog,
    closeFetchUsersDialog,
    showFetchUsersDialog
  };
  
  return (
    <UsersUIContext.Provider value={value}>
      {children}
    </UsersUIContext.Provider>
  );
}
