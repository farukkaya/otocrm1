import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./DealersUIHelpers";

const DealersUIContext = createContext();

export function useDealersUIContext() {
  return useContext(DealersUIContext);
}

export const DealersUIConsumer = DealersUIContext.Consumer;

export function DealersUIProvider({ dealersUIEvents, children }) {
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
    newDealerButtonClick: dealersUIEvents.newDealerButtonClick,
    openEditDealerPage: dealersUIEvents.openEditDealerPage,
    openDeleteDealerDialog: dealersUIEvents.openDeleteDealerDialog,
    openDeleteDealersDialog: dealersUIEvents.openDeleteDealersDialog,
    openFetchDealersDialog: dealersUIEvents.openFetchDealersDialog,
    openUpdateDealersStatusDialog:
      dealersUIEvents.openUpdateDealersStatusDialog,
  };

  return (
    <DealersUIContext.Provider value={value}>
      {children}
    </DealersUIContext.Provider>
  );
}
