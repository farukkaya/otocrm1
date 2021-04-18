import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useGalleriesUIContext } from "./GalleriesUIContext";
import { GalleriesGrouping } from "./GalleriesGrouping";
const prepareFilter = (queryParams, values) => {
  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    admin: "",
    name:"",
    taxOffice:"",
    taxIdentityNo:"",
  };
  
  if (searchText) {
    filter.admin= searchText;
    filter.name= searchText;
    filter.taxOffice= searchText;
    filter.taxIdentityNo= searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function GalleriesFilter() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      setQueryParams: galleriesUIContext.setQueryParams,
      openNewGalleryDialog: galleriesUIContext.openNewGalleryDialog,
      queryParams: galleriesUIContext.queryParams,
      ids: galleriesUIContext.ids
    };
  }, [galleriesUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(galleriesUIProps.queryParams, values);
    if (!isEqual(newQueryParams, galleriesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      galleriesUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <div className="form-filtration">
        <div className="row align-items-center">
        <div className="col-md-2 margin-bottom-10-mobile">
            <Formik
              initialValues={{
                searchText: "",
              }}
              onSubmit={(values) => {
                applyFilter(values);
              }}
            >
              {({
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                 
                    <input
                      type="text"
                      className="form-control"
                      name="searchText"
                      placeholder="Search"
                      onBlur={handleBlur}
                      value={values.searchText}
                      onChange={(e) => {
                        setFieldValue("searchText", e.target.value);
                        handleSubmit();
                      }}
                    />
                    <small className="form-text text-muted">
                      Tüm alanlarda <b> ara..</b>
                    </small>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="col-md-3 margin-bottom-10-mobile">
         {galleriesUIProps.ids.length > 0 && <GalleriesGrouping />}
        </div>
          <div className="col-md-5 margin-bottom-10-mobile"></div>
          <div className="col-md-2 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => galleriesUIProps.openNewGalleryDialog()}
            >
              Yeni Galeri
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
