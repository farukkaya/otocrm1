import React, { useMemo } from "react";
import { useStocksUIContext } from "../StocksUIContext";

export function StocksGrouping() {

  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      //setIds: stocksUIContext.setIds,
      openDeleteStocksDialog: stocksUIContext.openDeleteStocksDialog,
      openFetchStocksDialog: stocksUIContext.openFetchStocksDialog,
      openUpdateStocksStatusDialog:
        stocksUIContext.openUpdateStocksStatusDialog,
    };
  }, [stocksUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={stocksUIProps.openDeleteStocksDialog}
              >
                <i className="fa fa-trash"></i> Sil ({stocksUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={stocksUIProps.openFetchStocksDialog}
              >
                <i className="fa fa-stream"></i>  Seçilenler ({stocksUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={stocksUIProps.openUpdateStocksStatusDialog}
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
