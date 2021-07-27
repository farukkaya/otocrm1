import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useStocksUIContext } from "../StocksUIContext";

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

export function StocksFetchDialog({ show, onHide }) {
  

  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      queryParams: stocksUIContext.queryParams,
    };
  }, [stocksUIContext]);

  // Stocks Redux state
  const { stocks } = useSelector(
    (state) => ({
      stocks: selectedStocks(state.stocks.entities, stocksUIProps.ids),
    }),
    shallowEqual
  );

  // if there weren't selected ids we should close modal
  useEffect(() => {
    if (!stocksUIProps.ids || stocksUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Olan Stoklar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {stocks.map((stock) => (
              <div className="list-timeline-item mb-3" key={stock.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      stock.isActive?"success":"info"
                    } label-inline`}
                    style={{ width: "60px" }}
                  >
                    Id: {stock.id}
                  </span>{" "}
                  <span className="ml-5">
                  <br/>
                    Araç Kodu: {stock.id}, <br/>
                    Marka: {stock.brand}, <br/>
                    Model: {stock.model} <br/>
                    Plaka: {stock.plateNo.toUpperCase()} <br/>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
         
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
               Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
