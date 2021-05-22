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
  const { customerTypeId, paymentMethodId,customerSourceId, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by customerSourceId
  filter.customerSourceId = customerSourceId !== "" ? +customerSourceId : undefined;
  // Filter by customerTypeId
  filter.customerTypeId = customerTypeId !== "" ? +customerTypeId : undefined;
   // Filter by paymentMethodId
   filter.paymentMethodId = paymentMethodId !== "" ? +paymentMethodId : undefined;
  // Filter by all fields
  filter.lastname = searchText;
  if (searchText) {
    filter.firstName = searchText;
    filter.email = searchText;
    filter.ipAddress = searchText;
  }
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
          customerTypeId: "",
          customerSourceId: "", 
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
            <div className="form-group row">
              <div className="col-lg-3">
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
              <div className="col-lg-3">
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
              <div className="col-lg-3">
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
              <div className="col-lg-3">
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
