import React, { useMemo } from "react";
import { useCustomersUIContext } from "../CustomersUIContext";

export function CustomersGrouping() {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      openDeleteCustomersDialog: customersUIContext.openDeleteCustomersDialog,
      openFetchCustomersDialog: customersUIContext.openFetchCustomersDialog,
      openUpdateCustomersStatusDialog:
        customersUIContext.openUpdateCustomersStatusDialog,
    };
  }, [customersUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger">
                <span>
                Seçili Kayıt Sayısı:  <b>{customersUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={customersUIProps.openDeleteCustomersDialog}
              >
                <i className="fa fa-trash"></i>   Hepsini Sil
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={customersUIProps.openFetchCustomersDialog}
              >
                <i className="fa fa-stream"></i> Seçilileri Getir
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={customersUIProps.openUpdateCustomersStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
