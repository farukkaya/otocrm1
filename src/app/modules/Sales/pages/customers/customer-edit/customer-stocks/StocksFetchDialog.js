import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useStocksUIContext } from "./StocksUIContext";

const selectedStocks = (entities, ids) => {
  const _stocks = [];
  ids.forEach((id) => {
    const stock = entities.find((el) => el.id === id);
    if (stock) {
      _stocks.push(stock);
    }
  });
  
  return _stocks;
};

export function StocksFetchDialog() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      queryParams: stocksUIContext.queryParams,
      showFetchStocksDialog: stocksUIContext.showFetchStocksDialog,
      closeFetchStocksDialog: stocksUIContext.closeFetchStocksDialog,
    };
  }, [stocksUIContext]);

  const { stocks } = useSelector(
    (state) => ({
      stocks: selectedStocks(state.stocks.entities, stocksUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!stocksUIProps.ids || stocksUIProps.ids.length === 0) {
      stocksUIProps.closeFetchStocksDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.ids]);

  return (
    <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {stocks.map((stock) => (
              <div className="list-timeline-item mb-3" key={stock.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {stock.id}
                  </span>{" "}
                  <span className="ml-5">{stock.brand},{stock.model} </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      
  );
}
