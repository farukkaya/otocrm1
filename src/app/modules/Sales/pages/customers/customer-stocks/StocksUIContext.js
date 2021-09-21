/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./StocksUIHelper";

const StocksUIContext = createContext();

export function useStocksUIContext() {
  return useContext(StocksUIContext);
}

export const StocksUIConsumer = StocksUIContext.Consumer;

export function StocksUIProvider({ currentCustomerId,openDetailStockPage, children }) {
  const [customerId, setCustomerId] = useState(currentCustomerId);
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
  const [showEditStockDialog, setShowEditStockDialog] = useState(false);
  const initStock = {
    id:undefined,
    brandId: "",
    modelId:0,
    customerId:customerId,
    gearTypeId:undefined,
    fuelTypeId: 0
  };
  useEffect(()=> {
    setCustomerId(currentCustomerId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCustomerId]);
  const openNewStockDialog = () => {
    setSelectedId(undefined);
    setShowEditStockDialog(true);
  };
  const openEditStockDialog = id => {
    setSelectedId(id);
    setShowEditStockDialog(true);
  };
 

  const closeEditStockDialog = () => {
    setSelectedId(undefined);
    setShowEditStockDialog(false);
  };
  const [showDeleteStockDialog, setShowDeleteStockDialog] = useState(false);
  const openDeleteStockDialog = id => {
    setSelectedId(id);
    setShowDeleteStockDialog(true);
  };
  const closeDeleteStockDialog = () => {
    setSelectedId(undefined);
    setShowDeleteStockDialog(false);
  };

  const [showUpdateStatusStockDialog, setShowUpdateStatusStockDialog] = useState(false);

  const openUpdateStatusStockDialog = id => {
    setSelectedId(id);
    setShowUpdateStatusStockDialog(true);
  };
  const closeUpdateStatusStockDialog = () => {
    setSelectedId(undefined);
    setShowUpdateStatusStockDialog(false);
  };

  const [showDeleteStocksDialog, setShowDeleteStocksDialog] = useState(false);
  const openDeleteStocksDialog = () => {
    setShowDeleteStocksDialog(true);
  };
  const closeDeleteStocksDialog = () => {
    setShowDeleteStocksDialog(false);
  };

  const [showFetchStocksDialog, setShowFetchStocksDialog] = useState(false);
  const openFetchStocksDialog = () => {
    setShowFetchStocksDialog(true);
  };
  const closeFetchStocksDialog = () => {
    setShowFetchStocksDialog(false);
  };

  const value = {
    ids,
    setIds,
    customerId,
    setCustomerId,
    queryParams,
    setQueryParams,
    initStock,
    selectedId,
    openDetailStockPage,
    showEditStockDialog,
    openNewStockDialog,    
    openEditStockDialog,
    openUpdateStatusStockDialog,
    closeUpdateStatusStockDialog,
    showUpdateStatusStockDialog,
    closeEditStockDialog,
    showDeleteStockDialog,
    openDeleteStockDialog,
    closeDeleteStockDialog,
    showDeleteStocksDialog,
    openDeleteStocksDialog,
    closeDeleteStocksDialog,
    openFetchStocksDialog,
    closeFetchStocksDialog,
    showFetchStocksDialog
  };
  
  return (
    <StocksUIContext.Provider value={value}>
      {children}
    </StocksUIContext.Provider>
  );
}
