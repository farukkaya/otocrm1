import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./StocksUIHelper";

const StocksUIContext = createContext();

export function useStocksUIContext() {
  return useContext(StocksUIContext);
}

export const StocksUIConsumer = StocksUIContext.Consumer;

export function StocksUIProvider({ stocksUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    isFiltering,
    setIsFiltering,
    newStockButtonClick: stocksUIEvents.newStockButtonClick,
    openEditStockPage: stocksUIEvents.openEditStockPage,
    openDetailStockPage: stocksUIEvents.openDetailStockPage,
    openDeleteStockDialog: stocksUIEvents.openDeleteStockDialog,
    openDeleteStocksDialog: stocksUIEvents.openDeleteStocksDialog,
    openFetchStocksDialog: stocksUIEvents.openFetchStocksDialog,
    openUpdateStockStatusDialog:stocksUIEvents.openUpdateStockStatusDialog,
    openUpdateStocksStatusDialog:stocksUIEvents.openUpdateStocksStatusDialog,
    openUpdateExpertisDialog:stocksUIEvents.openUpdateExpertisDialog,
  };

  return (
    <StocksUIContext.Provider value={value}>
      {children}
    </StocksUIContext.Provider>
  );
}
