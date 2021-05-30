import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useAddressesUIContext } from "./AddressesUIContext";
import { AddressesGrouping } from "./AddressesGrouping";

const prepareFilter = (queryParams, values) => {

  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    name: "",
    country: "",
    city: "",
    town: "",
    neighborhood: "",
    addressLine: "",
    // isActive: "",
    // isPrimaryAddress: "",
  };

  if (searchText) {
    filter.name = searchText;
    filter.country = searchText;
    filter.city = searchText;
    filter.town = searchText;
    filter.neighborhood = searchText;
    filter.addressLine = searchText;
    // filter.isActive=searchText,
    // filter.isPrimaryAddress=searchText,
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function AddressesFilter() {
  // Addresses UI Context

  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      setQueryParams: addressesUIContext.setQueryParams,
      openNewAddressDialog: addressesUIContext.openNewAddressDialog,
      queryParams: addressesUIContext.queryParams,
      ids: addressesUIContext.ids
    };
  }, [addressesUIContext]);

  const applyFilter = (values) => {

    const newQueryParams = prepareFilter(addressesUIProps.queryParams, values);
    if (!isEqual(newQueryParams, addressesUIProps.queryParams)) {

      newQueryParams.pageNumber = 1;
      addressesUIProps.setQueryParams(newQueryParams);
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
          <div className="col-md-5 margin-bottom-10-mobile">{addressesUIProps.ids.length > 0 && <AddressesGrouping />}</div>
          <div className="col-md-3 margin-bottom-10-mobile"></div>
          <div className="col-md-2 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addressesUIProps.openNewAddressDialog()}
            >
              Yeni Adres
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
