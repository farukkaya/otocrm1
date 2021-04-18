import React, { useMemo } from "react";
import { useDealersUIContext } from "../DealersUIContext";

export function DealersGrouping() {

  // Dealers UI Context
  const dealersUIContext = useDealersUIContext();
  const dealersUIProps = useMemo(() => {
    return {
      ids: dealersUIContext.ids,
      //setIds: dealersUIContext.setIds,
      openDeleteDealersDialog: dealersUIContext.openDeleteDealersDialog,
      openFetchDealersDialog: dealersUIContext.openFetchDealersDialog,
      openUpdateDealersStatusDialog:
        dealersUIContext.openUpdateDealersStatusDialog,
    };
  }, [dealersUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
           
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={dealersUIProps.openDeleteDealersDialog}
              >
                <i className="fa fa-trash"></i>   Hepsini Sil
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={dealersUIProps.openFetchDealersDialog}
              >
                <i className="fa fa-stream"></i>  Seçilenler ({dealersUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={dealersUIProps.openUpdateDealersStatusDialog}
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
