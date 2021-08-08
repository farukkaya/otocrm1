import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useDocumentsUIContext } from "./DocumentsUIContext";
import { DocumentsGrouping } from "./DocumentsGrouping";
import { DocumentTypes } from "../StocksUIHelper";
const prepareFilter = (queryParams, values) => {
  const { searchText, isActive } = values;
  const newQueryParams = { ...queryParams };
  
  const filter = {
    id: "",
    name: "",
    description: "",
    isActive: ""
  };
  filter.isActive = isActive;
  if (searchText) {
    filter.id = searchText;
    filter.name = searchText;
    filter.description = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function DocumentsFilter() {
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      setQueryParams: documentsUIContext.setQueryParams,
      openNewDocumentDialog: documentsUIContext.openNewDocumentDialog,
      queryParams: documentsUIContext.queryParams,
      ids: documentsUIContext.ids
    };
  }, [documentsUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(documentsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, documentsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      documentsUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <div className="form-filtration">
        <div className="row align-items-center">
          <div className="col-md-6 margin-bottom-10-mobile">

            <Formik
              initialValues={{
                isActive: documentsUIProps.queryParams.filter.isActive,
                searchText: ""
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
                  <div className="form-group row">
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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
                        <option value="true">Aktif</option>
                        <option value="false">Pasif</option>
                      </select>
                      <small className="form-text text-muted">
                        <b>Durum</b>a göre
                      </small>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="col-md-3 margin-bottom-10-mobile">{documentsUIProps.ids.length > 0 && <DocumentsGrouping />} </div>
          <div className="col-md-3 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => documentsUIProps.openNewDocumentDialog()}
            >
              Yeni Döküman
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
