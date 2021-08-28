import React, { useMemo } from "react";
import { useStocksUIContext } from "./StocksUIContext";

export function StocksGrouping() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      openDeleteStocksDialog: stocksUIContext.openDeleteStocksDialog,
    };
  }, [stocksUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            
            <div className="form-group-inline">
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={stocksUIProps.openDeleteStocksDialog}
              >
                <i className="fa fa-trash"></i> Kaldır ({stocksUIProps.ids.length})
              </button>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
