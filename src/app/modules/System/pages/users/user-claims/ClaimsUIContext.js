/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./ClaimsUIHelper";

const ClaimsUIContext = createContext();

export function useClaimsUIContext() {
  return useContext(ClaimsUIContext);
}

export const ClaimsUIConsumer = ClaimsUIContext.Consumer;

export function ClaimsUIProvider({ relId, children }) {
  const [userId, setUserId] = useState(relId);
  const [claimType, setClaimType] = useState("1");
  const [ownClaims, setOwnClaims] = useState([]);
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
  const initClaim = {
    id: undefined,
    name: "",
    claim: "",
    description: "",
  };
  useEffect(() => {
    setUserId(relId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [relId]);
  // #region EXAMPLE

  // #endregion

  // #region INSERT-EDIT DIALOG
  const [showEditClaimDialog, setShowEditClaimDialog] = useState(false);

  const openNewClaimDialog = () => {
    setSelectedId(undefined);
    setShowEditClaimDialog(true);
  };
  const openEditClaimDialog = id => {
    setSelectedId(id);
    setShowEditClaimDialog(true);
  };
  const closeEditClaimDialog = () => {
    setSelectedId(undefined);
    setShowEditClaimDialog(false);
  };
  // #endregion

  // #region SINGLE DELETE DIALOG
  const [showDeleteClaimDialog, setShowDeleteClaimDialog] = useState(false);
  const openDeleteClaimDialog = id => {
    setSelectedId(id);
    setShowDeleteClaimDialog(true);
  };
  const closeDeleteClaimDialog = () => {
    setSelectedId(undefined);
    setShowDeleteClaimDialog(false);
  };
  // #endregion
  // #region MULTI DELETE DIALOG
  const [showDeleteClaimsDialog, setShowDeleteClaimsDialog] = useState(false);
  const openDeleteClaimsDialog = () => {
    setShowDeleteClaimsDialog(true);
  };
  const closeDeleteClaimsDialog = () => {
    setShowDeleteClaimsDialog(false);
  };
  // #endregion

  // #region SINGLE UPDATE STATUS
  const [showUpdateStatusClaimDialog, setShowUpdateStatusClaimDialog] = useState(false);

  const openUpdateStatusClaimDialog = id => {
    setSelectedId(id);
    setShowUpdateStatusClaimDialog(true);
  };
  const closeUpdateStatusClaimDialog = () => {
    setSelectedId(undefined);
    setShowUpdateStatusClaimDialog(false);
  };
  // #endregion
  // #region MULTI UPDATE STATUS
  const [showUpdateClaimsStatusDialog, setShowUpdateClaimsStatusDialog] = useState(false);
  const openUpdateClaimsStatusDialog = () => {
    setShowUpdateClaimsStatusDialog(true);
  };
  const closeUpdateClaimsStatusDialog = () => {
    setSelectedId(undefined);
    setShowUpdateClaimsStatusDialog(false);
  };
  // #endregion

  // #region MULTI FETCHH DIALOG
  const [showFetchClaimsDialog, setShowFetchClaimsDialog] = useState(false);
  const openFetchClaimsDialog = () => {
    setShowFetchClaimsDialog(true);
  };
  const closeFetchClaimsDialog = () => {
    setShowFetchClaimsDialog(false);
  };
  // #endregion



  const value = {
    ids,
    setIds,
    claimType,
    setClaimType,
    ownClaims,
    setOwnClaims,
    userId,
    setUserId,
    queryParams,
    setQueryParams,
    initClaim,
    selectedId,
    
    showEditClaimDialog,
    openNewClaimDialog,
    openEditClaimDialog,
    closeEditClaimDialog,
    
    showDeleteClaimDialog,
    openDeleteClaimDialog,
    closeDeleteClaimDialog,

    showDeleteClaimsDialog,
    openDeleteClaimsDialog,
    closeDeleteClaimsDialog,

    showFetchClaimsDialog,
    openFetchClaimsDialog,
    closeFetchClaimsDialog,

    showUpdateStatusClaimDialog,
    openUpdateStatusClaimDialog,
    closeUpdateStatusClaimDialog,

    showUpdateClaimsStatusDialog,
    openUpdateClaimsStatusDialog,
    closeUpdateClaimsStatusDialog
  };

  return (
    <ClaimsUIContext.Provider value={value}>
      {children}
    </ClaimsUIContext.Provider>
  );
}
