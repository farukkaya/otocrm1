import React, { useMemo } from "react";
import { useStocksUIContext } from "./StocksUIContext";

export function StocksGrouping() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      openDeleteStocksDialog: stocksUIContext.openDeleteStocksDialog,
      openFetchStocksDialog: stocksUIContext.openFetchStocksDialog,
    };
  }, [stocksUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger mt-5">
                <span>Seçili Kayıt Sayısı {stocksUIProps.ids.length}</span>
              </label>
            </div>
            <div className="form-group-inline">
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={stocksUIProps.openDeleteStocksDialog}
              >
                <i className="fa fa-trash"></i> Hepsini Sil
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={stocksUIProps.openFetchStocksDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
