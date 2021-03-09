import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useStocksUIContext } from "./StocksUIContext";

const prepareFilter = (queryParams, values) => {
  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    brand:"",
    model:"",
    color:"",
    fuelType:"",
    gearType:"",
    caseType:"",
    sellingPrice:"",
    year:""
  };
  
  if (searchText) {
    filter.brand= searchText;
    filter.model= searchText;
    filter.color= searchText;
    filter.fuelType= searchText;
    filter.gearType= searchText;
    filter.caseType= searchText;
    filter.sellingPrice=searchText;
    filter.year=searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function StocksFilter() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      setQueryParams: stocksUIContext.setQueryParams,
      queryParams: stocksUIContext.queryParams,
    };
  }, [stocksUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(stocksUIProps.queryParams, values);
    if (!isEqual(newQueryParams, stocksUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      stocksUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <div className="form-filtration">
        <div className="row align-items-center">
        <div className="col-md-10 margin-bottom-10-mobile"></div>
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
                      placeholder="Ara..."
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
          
        </div>
      </div>
    </>
  );
}
