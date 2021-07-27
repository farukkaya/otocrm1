import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/stocks/stocksActions";
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

export function StocksUpdateStatusDialog({ show, onHide }) {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      setIds: stocksUIContext.setIds,
      queryParams: stocksUIContext.queryParams,
    };
  }, [stocksUIContext]);

  // Stocks Redux state
  const { stocks, listLoading } = useSelector(
    (state) => ({
      stocks: selectedStocks(state.stocks.entities, stocksUIProps.ids),
      listLoading: state.stocks.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected stocks we should close modal
  useEffect(() => {
    if (stocksUIProps.ids || stocksUIProps.ids === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.ids]);

  const [status, setStatus] = useState("0");

  const dispatch = useDispatch();
  const updateStatus = () => dispatch(actions.updateStocksStatus(stocksUIProps.ids, status=="1"))// server request for updateing stock by ids
    .then(() => dispatch(actions.fetchStocks(stocksUIProps.queryParams))
      .then(() => {
        stocksUIProps.setIds([]);// clear selections list
        onHide(); // closing delete modal
      }))

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Durumu Güncellenecek Stoklar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block">
        {listLoading && (
          <div className="overlay-layer bg-transparent">
            <div className="spinner spinner-lg spinner-warning" />
          </div>
        )}
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">

            {stocks.map((stock) => (
              <div className="list-timeline-item mb-3" key={stock.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${stock.isActive ? "success" : "info"
                      } label-inline`}
                    style={{ width: "60px" }}
                  >
                    Id: {stock.id}
                  </span>{" "}
                  <span className="ml-5">
                    {stock.brand+" " +stock.model}, {stock.plateNo.toUpperCase()}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className={`form-control ${status=="1" ? "success" : "info"}`}
            value={status}
            onChange={(e) => setStatus(e.target.value /*=== "0" ? false : true*/)}
          >
            <option value="1">Aktif</option>
            <option value="0">Pasif</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
              İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
          Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
