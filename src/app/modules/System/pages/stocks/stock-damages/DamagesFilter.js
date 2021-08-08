import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useDamagesUIContext } from "./DamagesUIContext";
import { DamagesGrouping } from "./DamagesGrouping";
import { DamageTypes } from "../../stocks/StocksUIHelper";
const prepareFilter = (queryParams, values) => {
  const { searchText, damageTypeId, isActive } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    damageOrder: "",
    damageTypeId: "",
    amount: "",
    isActive: ""
  };
  filter.damageTypeId = damageTypeId;
  filter.isActive = isActive;
  if (searchText) {
    filter.damageOrder = searchText;
    filter.amount = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function DamagesFilter() {
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      setQueryParams: damagesUIContext.setQueryParams,
      openNewDamageDialog: damagesUIContext.openNewDamageDialog,
      queryParams: damagesUIContext.queryParams,
      ids: damagesUIContext.ids
    };
  }, [damagesUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(damagesUIProps.queryParams, values);
    if (!isEqual(newQueryParams, damagesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      damagesUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <div className="form-filtration">
        <div className="row align-items-center">
          <div className="col-md-6 margin-bottom-10-mobile">

            <Formik
              initialValues={{
                isActive: damagesUIProps.queryParams.filter.isActive,
                damageTypeId: "",
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

                    <div className="col-md-3">
                      <select
                        className="form-control"
                        name="damageTypeId"
                        placeholder="Hasar Tipine göre"
                        // TODO: Change this code
                        onChange={(e) => {
                          setFieldValue("damageTypeId", e.target.value);
                          handleSubmit();
                        }}
                        onBlur={handleBlur}
                        value={values.damageTypeId}
                      >
                        <option value="">Hepsi</option>
                        {
                          DamageTypes.map(q => <option value={q.id}>{q.name}</option>)
                        }
                      </select>
                      <small className="form-text text-muted">
                        <b>Hasar Tipi</b>ne göre
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
          <div className="col-md-3 margin-bottom-10-mobile">{damagesUIProps.ids.length > 0 && <DamagesGrouping />} </div>
          <div className="col-md-3 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => damagesUIProps.openNewDamageDialog()}
            >
              Yeni Hasar Kaydı
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
