/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/stocks/stocksActions"
import { useStocksUIContext } from "../StocksUIContext";


export function StockUpdateStatusDialog({ id, show, onHide }) {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      queryParams: stocksUIContext.queryParams,
    };
  }, [stocksUIContext]);

  // Stocks Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.stocks.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected stocks we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
  }, [id, dispatch]);


  const updateStock = () => dispatch(actions.fetchStock(id)) // server request for updateing user by ids
    .then((stock) =>{
      dispatch(actions.updateStocksStatus([parseInt(id)], !stock.isActive)) // update status this user
      .then(() => dispatch(actions.fetchStocks(stocksUIProps.queryParams))) // refresh stocks
      .then(() => onHide()) //close modal
    } 
    );

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Durum Güncellemesi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu stoğu güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
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
            onClick={updateStock}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
