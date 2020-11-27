import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./GalleriesUIHelpers";

const GalleriesUIContext = createContext();

export function useGalleriesUIContext() {
  return useContext(GalleriesUIContext);
}

export const GalleriesUIConsumer = GalleriesUIContext.Consumer;

export function GalleriesUIProvider({ galleriesUIEvents, children }) {
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
    newGalleryButtonClick: galleriesUIEvents.newGalleryButtonClick,
    openEditGalleryPage: galleriesUIEvents.openEditGalleryPage,
    openDeleteGalleryDialog: galleriesUIEvents.openDeleteGalleryDialog,
    openDeleteGalleriesDialog: galleriesUIEvents.openDeleteGalleriesDialog,
    openFetchGalleriesDialog: galleriesUIEvents.openFetchGalleriesDialog,
    openUpdateGalleriesStatusDialog:
      galleriesUIEvents.openUpdateGalleriesStatusDialog,
  };

  return (
    <GalleriesUIContext.Provider value={value}>
      {children}
    </GalleriesUIContext.Provider>
  );
}
