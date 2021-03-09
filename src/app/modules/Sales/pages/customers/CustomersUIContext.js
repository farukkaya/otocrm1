import React, {createContext, useContext, useState, useCallback} from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./CustomersUIHelpers";

const CustomersUIContext = createContext();

export function useCustomersUIContext() {
  return useContext(CustomersUIContext);
}

export const CustomersUIConsumer = CustomersUIContext.Consumer;

export function CustomersUIProvider({customersUIEvents, children}) {
  
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
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

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    isFiltering,
    setIsFiltering,
    newCustomerButtonClick: customersUIEvents.newCustomerButtonClick,
    openEditCustomerPage: customersUIEvents.openEditCustomerPage,
    openDeleteCustomerDialog: customersUIEvents.openDeleteCustomerDialog,
    openDeleteCustomersDialog: customersUIEvents.openDeleteCustomersDialog,
    openFetchCustomersDialog: customersUIEvents.openFetchCustomersDialog,
    openUpdateCustomerStatusDialog:customersUIEvents.openUpdateCustomerStatusDialog,
    openUpdateCustomersStatusDialog:customersUIEvents.openUpdateCustomersStatusDialog,
  };

  return <CustomersUIContext.Provider value={value}>{children}</CustomersUIContext.Provider>;
}