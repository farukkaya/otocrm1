/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./StocksUIHelper";

const StocksUIContext = createContext();

export function useStocksUIContext() {
  return useContext(StocksUIContext);
}

export const StocksUIConsumer = StocksUIContext.Consumer;

export function StocksUIProvider({ currentGalleryId, children }) {
  const [galleryId, setGalleryId] = useState(currentGalleryId);
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

  useEffect(()=> {
    setGalleryId(currentGalleryId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGalleryId]);




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
   galleryId,
   setGalleryId,
    queryParams,
    setQueryParams,
    selectedId,
    
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
