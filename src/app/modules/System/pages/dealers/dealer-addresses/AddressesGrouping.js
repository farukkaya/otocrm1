import React, { useMemo } from "react";
import { useAddressesUIContext } from "./AddressesUIContext";

export function AddressesGrouping() {
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      ids: addressesUIContext.ids,
      openDeleteAddressesDialog: addressesUIContext.openDeleteAddressesDialog,
      openFetchAddressesDialog: addressesUIContext.openFetchAddressesDialog,
      openUpdateAddressesStatusDialog: addressesUIContext.openUpdateAddressesStatusDialog
    };
  }, [addressesUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
          <div className="form-group-inline">
            <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={addressesUIProps.openDeleteAddressesDialog}
              >
                <i className="fa fa-trash"></i> Sil ({addressesUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={addressesUIProps.openFetchAddressesDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler ({addressesUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={addressesUIProps.openUpdateAddressesStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Durum Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
