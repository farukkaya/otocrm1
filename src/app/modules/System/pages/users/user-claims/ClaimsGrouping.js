import React, { useMemo } from "react";
import { useClaimsUIContext } from "./ClaimsUIContext";

export function ClaimsGrouping() {
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      ids: claimsUIContext.ids,
      openDeleteClaimsDialog: claimsUIContext.openDeleteClaimsDialog,
      openFetchClaimsDialog: claimsUIContext.openFetchClaimsDialog,
      openUpdateClaimsStatusDialog: claimsUIContext.openUpdateClaimsStatusDialog
    };
  }, [claimsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-group-inline">
            <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={claimsUIProps.openDeleteClaimsDialog}
              >
                <i className="fa fa-trash"></i> Sil ({claimsUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={claimsUIProps.openFetchClaimsDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler ({claimsUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={claimsUIProps.openUpdateClaimsStatusDialog}
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
