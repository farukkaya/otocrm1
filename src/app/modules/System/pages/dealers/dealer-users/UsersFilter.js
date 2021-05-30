import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useUsersUIContext } from "./UsersUIContext";
import { UsersGrouping } from "./UsersGrouping";

const prepareFilter = (queryParams, values) => {
  const { searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    identityNo: "",
    username: "",
    profession:""
  };
  
  if (searchText) {
    filter.firstname= searchText;
    filter.lastname= searchText;
    filter.email= searchText;
    filter.phone=searchText;
    filter.identityNo=searchText;
    filter.username=searchText;
    filter.dealer=searchText;
    filter.profession=searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function UsersFilter() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      setQueryParams: usersUIContext.setQueryParams,
      openNewUserDialog: usersUIContext.openNewUserDialog,
      queryParams: usersUIContext.queryParams,
      ids: usersUIContext.ids
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
          <div className="col-md-5 margin-bottom-10-mobile">{usersUIProps.ids.length > 0 && <UsersGrouping />}</div>
          <div className="col-md-3 margin-bottom-10-mobile"></div>
          <div className="col-md-2 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => usersUIProps.openNewUserDialog()}
            >
              Yeni Kullanıcı
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
