import React, { useMemo } from "react";

import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { CustomersFilter ,prepareFilter} from "./customers-filter/CustomersFilter";
import { CustomersTable } from "./customers-table/CustomersTable";
import { CustomersGrouping } from "./customers-grouping/CustomersGrouping";
import { useCustomersUIContext } from "./CustomersUIContext";

export function CustomersCard() {
  const customersUIContext = useCustomersUIContext();
  

  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      isFiltering: customersUIContext.isFiltering,
      setIsFiltering: customersUIContext.setIsFiltering,
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick,
      openDeleteCustomerDialog: customersUIContext.openDeleteCustomersDialog,
      openUpdateCustomersStatusDialog:
          customersUIContext.openUpdateCustomersStatusDialog,
      openFetchCustomersDialog: customersUIContext.openFetchCustomersDialog,
    };
  }, [customersUIContext]);

  const setIsFiltering = () => {
    customersUIContext.setIsFiltering(!customersUIProps.isFiltering)

    if (customersUIProps.isFiltering) {
        const newQueryParams = prepareFilter(customersUIProps.queryParams, {});
        customersUIContext.setQueryParams(newQueryParams)
    }
}

  return (
    <Card>
      <CardHeader title="Müşteri Listesi">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-sm btn-primary mr-1"
            onClick={setIsFiltering}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Text/Filter.svg")} />
            </span>
            <span className="menu-text">Filtre</span>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-primary mr-1"
            onClick={customersUIProps.newCustomerButtonClick}
          >
            Yeni Müşteri
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div className="form-filtration">
          <div className="row align-items-center">
            <div className="col-md-6 margin-bottom-10-mobile">
              {customersUIProps.ids.length > 0 && <CustomersGrouping />}
            </div>
            <div className="col-md-6 text-left margin-bottom-10-mobile">
              {customersUIProps.isFiltering && <CustomersFilter />}
            </div>
          </div>
        </div>

        <CustomersTable />
      </CardBody>
    </Card>
  );
}
