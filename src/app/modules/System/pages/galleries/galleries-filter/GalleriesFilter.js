import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useGalleriesUIContext } from "../GalleriesUIContext";


export const prepareFilter = (queryParams, values) => {
  const { isActive, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    name: "",
    level:0,
    dealer:"",
    taxOffice:"",
    taxIdentityNo: "",
  };
  // Filter by all fields
  if (searchText) {
    filter.name= searchText;
    filter.level= parseInt(searchText);
    filter.dealer= searchText;
    filter.taxIdentityNo= searchText;
    filter.taxOffice=searchText;
  }
  filter.isActive=isActive==="1" ? true
  : isActive==="0" ? false
  : undefined;
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function GalleriesFilter({ listLoading }) {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      setQueryParams: galleriesUIContext.setQueryParams,
      queryParams: galleriesUIContext.queryParams,
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
      <Formik
        initialValues={{
          isActive: "", // values => All=""/Active=0/passive=1
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
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <select
                  className="form-control"
                  name="isActive"
                  placeholder="Duruma göre filtrele"
                  onChange={(e) => {
                    setFieldValue("isActive", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.isActive}
                >
                  <option value="">Tümü</option>
                  <option value="1">Aktif</option>
                  <option value="0">Pasif</option>
                </select>
                <small className="form-text text-muted">
                Duruma göre filtrele
                </small>
              </div>
           
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Ara.."
                  onBlur={handleBlur}
                  value={values.searchText}
                  onChange={(e) => {
                    setFieldValue("searchText", e.target.value);
                    handleSubmit();
                  }}
                />
                <small className="form-text text-muted">
                 Tüm kolonlarda ara...
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
