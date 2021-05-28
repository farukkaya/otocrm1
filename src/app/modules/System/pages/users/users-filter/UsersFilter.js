import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useUsersUIContext } from "../UsersUIContext";
import { initialFilter } from "../UsersUIHelpers";

export const prepareFilter = (queryParams, values) => {
  const { isActive,searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    dealerId:"",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    identityNo: "",
    username: "",
    profession:""
  };
  filter.isActive= isActive;
  if (searchText) {
    filter.firstname= searchText;
    filter.lastname= searchText;
    filter.email= searchText;
    filter.phone=searchText;
    filter.identityNo=searchText;
    filter.username=searchText;
    filter.profession=searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function UsersFilter({ listLoading }) {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      setQueryParams: usersUIContext.setQueryParams,
      queryParams: usersUIContext.queryParams,
    };
  }, [usersUIContext]);

  const applyFilter = (values) => {
    
    const newQueryParams = prepareFilter(usersUIProps.queryParams, values);
    if (!isEqual(newQueryParams, usersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      usersUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          isActive: "true", // values => All=""/Active=1/passive=0
          userTypeId:"",
          capacityId:"",
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
           
              <div className="col-lg-4">
          
              </div>
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
                  <option value="">Hepsi</option>
                  <option value="true">Aktif</option>
                  <option value="false">Pasif</option>
                </select>
                <small className="form-text text-muted">
                Duruma göre filtrele
                </small>
              </div>
           
              <div className="col-lg-3">
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
