import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useCustomersUIContext } from "../CustomersUIContext";
import {
  CUSTOMERTYPELIST,
  PAYMENTMETHODLIST,
  CUSTOMERSOURCELIST
} from "../CustomersUIHelpers";

export const prepareFilter = (queryParams, values) => {
  const { isActive,customerTypeId, paymentMethodId,customerSourceId, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    customerTypeId:"",
    customerSourceId:"",
    paymentMethodId:""
  };
  filter.customerSourceId = customerSourceId ;
  filter.customerTypeId = customerTypeId;
   filter.paymentMethodId = paymentMethodId;
  // Filter by all fields
  if (searchText) {
    filter.firstName = searchText;
    filter.lastName = searchText;
    filter.identityNo = searchText;
    filter.salesPerson = searchText;
  }
  filter.isActive=isActive;
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function CustomersFilter({ listLoading }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams,
    };
  }, [customersUIContext]);

  // queryParams, setQueryParams,
  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(customersUIProps.queryParams, values);
    if (!isEqual(newQueryParams, customersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      // update list by queryParams
      customersUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          isActive: customersUIContext.queryParams.filter.isActive, 
          customerTypeId: "",
          customerSourceId:"",
          paymentMethodId: "", 
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
            <div className="form-group d-flex justify-content-end">
              <div className="p-2">
                <select
                  className="form-control"
                  name="customerTypeId"
                  placeholder="Müşteri tipine göre filtre"
                  // TODO: Change this code
                  onChange={(e) => {
                    setFieldValue("customerTypeId", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.customerTypeId}
                >
                  <option value="">HEPSİ</option>
                {
                  CUSTOMERTYPELIST.map(q=><option value={q.id}>{q.name}</option>)
                }
                </select>
                <small className="form-text text-muted">
                 Müşteri Tipine göre <b>filtrele</b>
                </small>
              </div>
              <div className="p-2">
                <select
                  className="form-control"
                  placeholder="Ödeme tipine göre filtre"
                  name="paymentMethodId"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("paymentMethodId", e.target.value);
                    handleSubmit();
                  }}
                  value={values.paymentMethodId}
                >
                  <option value="">HEPSİ</option>
                {
                  PAYMENTMETHODLIST.map(q=><option value={q.id}>{q.name}</option>)
                }
                </select>
                <small className="form-text text-muted">
                 Ödeme Tipine Göre <b>Filtrele</b> 
                </small>
              </div>
              <div className="p-2">
                <select
                  className="form-control"
                  placeholder="Kaynağa göre filtre"
                  name="customerSourceId"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("customerSourceId", e.target.value);
                    handleSubmit();
                  }}
                  value={values.customerSourceId}
                >
                  <option value="">HEPSİ</option>
                {
                  CUSTOMERSOURCELIST.map(q=><option value={q.id}>{q.name}</option>)
                }
                </select>
                <small className="form-text text-muted">
                  Kaynağa Göre <b>Filtrele</b>
                </small>
              </div>
              <div className="p-2">
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
              <div className="p-2">
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
                Tüm kolonlarda <b>Ara</b>
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
