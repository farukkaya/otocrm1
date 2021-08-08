/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./DamagesUIHelper";

const DamagesUIContext = createContext();

export function useDamagesUIContext() {
  return useContext(DamagesUIContext);
}

export const DamagesUIConsumer = DamagesUIContext.Consumer;

export function DamagesUIProvider({ currentStockId, children }) {
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
  const [showEditDamageDialog, setShowEditDamageDialog] = useState(false);
  const initDamage = {
    id:undefined,
    stockId:stockId,
    damageOrder:"",
    damageTypeId: undefined,
    damageDate: undefined,
    amount:undefined
  };
  useEffect(()=> {
    setStockId(currentStockId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStockId]);
  const openNewDamageDialog = () => {
    setSelectedId(undefined);
    setShowEditDamageDialog(true);
  };
  const openEditDamageDialog = id => {
    setSelectedId(id);
    setShowEditDamageDialog(true);
  };
 

  const closeEditDamageDialog = () => {
    setSelectedId(undefined);
    setShowEditDamageDialog(false);
  };
  const [showDeleteDamageDialog, setShowDeleteDamageDialog] = useState(false);
  const openDeleteDamageDialog = id => {
    setSelectedId(id);
    setShowDeleteDamageDialog(true);
  };
  const closeDeleteDamageDialog = () => {
    setSelectedId(undefined);
    setShowDeleteDamageDialog(false);
  };

  const [showUpdateStatusDamageDialog, setShowUpdateStatusDamageDialog] = useState(false);

  const openUpdateStatusDamageDialog = id => {
    setSelectedId(id);
    setShowUpdateStatusDamageDialog(true);
  };
  const closeUpdateStatusDamageDialog = () => {
    setSelectedId(undefined);
    setShowUpdateStatusDamageDialog(false);
  };

  const [showDeleteDamagesDialog, setShowDeleteDamagesDialog] = useState(false);
  const openDeleteDamagesDialog = () => {
    setShowDeleteDamagesDialog(true);
  };
  const closeDeleteDamagesDialog = () => {
    setShowDeleteDamagesDialog(false);
  };

  const [showFetchDamagesDialog, setShowFetchDamagesDialog] = useState(false);
  const openFetchDamagesDialog = () => {
    setShowFetchDamagesDialog(true);
  };
  const closeFetchDamagesDialog = () => {
    setShowFetchDamagesDialog(false);
  };

  const value = {
    ids,
    setIds,
    stockId,
    setStockId,
    queryParams,
    setQueryParams,
    initDamage,
    selectedId,
    showEditDamageDialog,
    openNewDamageDialog,    
    openEditDamageDialog,
    openUpdateStatusDamageDialog,
    closeUpdateStatusDamageDialog,
    showUpdateStatusDamageDialog,
    closeEditDamageDialog,
    showDeleteDamageDialog,
    openDeleteDamageDialog,
    closeDeleteDamageDialog,
    showDeleteDamagesDialog,
    openDeleteDamagesDialog,
    closeDeleteDamagesDialog,
    openFetchDamagesDialog,
    closeFetchDamagesDialog,
    showFetchDamagesDialog
  };
  
  return (
    <DamagesUIContext.Provider value={value}>
      {children}
    </DamagesUIContext.Provider>
  );
}
