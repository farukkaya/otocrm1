import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useStocksUIContext } from "./StocksUIContext";
import { CarColors, FuelTypes, GearTypes, CaseTypes, FromWhoTitles, PurchaseTypes } from "./StocksUIHelper";
import { StocksGrouping } from "./StocksGrouping";

const prepareFilter = (queryParams, values) => {
  const { isActive, colorId, fuelTypeId, gearTypeId, caseTypeId, tramerTypeId, fromWhoId, purchaseTypeId, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    category: "",
    brand: "",
    model: "",
    modelType: "",
    colorId: "",
    fuelTypeId: "",
    gearTypeId: "",
    caseTypeId: "",
    tramerTypeId: "",
    fromWhoId: "",
    purchaseTypeId: "",
    isActive: ""
  };
  filter.colorId = colorId;
  filter.fuelTypeId = fuelTypeId;
  filter.gearTypeId = gearTypeId;
  filter.caseTypeId = caseTypeId;
  filter.tramerTypeId = tramerTypeId;
  filter.fromWhoId = fromWhoId;
  filter.purchaseTypeId = purchaseTypeId;
  // Filter by all fields
  if (searchText) {
    filter.category = searchText;
    filter.brand = searchText;
    filter.model = searchText;
    filter.modelType = searchText;
    filter.modelYear = searchText;
    filter.plateNo = searchText;
    filter.sellingPrice = searchText;
  }
  filter.isActive = isActive;
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
      customerId:stocksUIContext.customerId,
      ids: stocksUIContext.ids,
      openSelectNewStockDialog: stocksUIContext.openSelectNewStockDialog,
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
      <Formik
        initialValues={{
          isActive: stocksUIContext.queryParams.filter.isActive, // values => All=""/Active=0/passive=1
          colorId: "",
          fuelTypeId: "",
          gearTypeId: "",
          caseTypeId: "",
          tramerTypeId: "",
          fromWhoId: "",
          purchaseTypeId: "",
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
          <form onSubmit={handleSubmit} className="form form-label-right"  style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}> 
            <div className="form-group d-flex justify-content-start" >
              <div style={{ padding: "2px" }}>
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
              <div style={{ padding: "2px" }}>
                <select
                  className="form-control"
                  name="fuelTypeId"
                  placeholder="Yakıt Tipine göre"
                  // TODO: Change this code
                  onChange={(e) => {
                    setFieldValue("fuelTypeId", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.fuelTypeId}
                >
                  <option value="">Hepsi</option>
                  {
                    FuelTypes.map(q => <option value={q.id}>{q.name}</option>)
                  }
                </select>
                <small className="form-text text-muted">
                  <b>Yakıt Tipi</b>ne göre
                </small>
              </div>
              <div style={{ padding: "2px" }}>
                <select
                  className="form-control"
                  name="gearTypeId"
                  placeholder="Vites Tipine göre"
                  // TODO: Change this code
                  onChange={(e) => {
                    setFieldValue("gearTypeId", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.gearTypeId}
                >
                  <option value="">Hepsi</option>
                  {
                    GearTypes.map(q => <option value={q.id}>{q.name}</option>)
                  }
                </select>
                <small className="form-text text-muted">
                  <b>Vites Tipi</b>ne göre
                </small>
              </div>
              <div style={{ padding: "2px" }}>
                <select
                  className="form-control"
                  name="caseTypeId"
                  placeholder="Kasa Tipine göre"
                  // TODO: Change this code
                  onChange={(e) => {
                    setFieldValue("caseTypeId", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.caseTypeId}
                >
                  <option value="">Hepsi</option>
                  {
                    CaseTypes.map(q => <option value={q.id}>{q.name}</option>)
                  }
                </select>
                <small className="form-text text-muted">
                  <b>Kasa Tipi</b>ne göre
                </small>
              </div>
              <div style={{ padding: "2px" }}>
                <select
                  className="form-control"
                  name="colorId"
                  placeholder="Renge göre"
                  // TODO: Change this code
                  onChange={(e) => {
                    setFieldValue("colorId", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.colorId}
                >
                  <option value="">Hepsi</option>
                  {
                    CarColors.map(q => <option value={q.id}>{q.name}</option>)
                  }
                </select>
                <small className="form-text text-muted">
                  <b>Renge</b> göre
                </small>
              </div>
              <div style={{ padding: "2px" }}>
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
            <div className="form-group d-flex justify-content-end" >
              <div style={{ padding: "2px" }}>
              {stocksUIProps.customerId&&stocksUIProps.ids.length > 0 && <StocksGrouping />}
              </div>


            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
