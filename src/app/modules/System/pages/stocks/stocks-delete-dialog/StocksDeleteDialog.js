/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/stocks/stocksActions";
import { useStocksUIContext } from "../StocksUIContext";

export function StocksDeleteDialog({ show, onHide }) {
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
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.stocks.actionsLoading }),
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => { }, [isLoading, dispatch]);

  // if there weren't selected stocks we should close modal
  useEffect(() => {
    if (!stocksUIProps.ids || stocksUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.ids]);

  const deleteStocks = () => dispatch(actions.deleteStocks(stocksUIProps.ids)) // server request for deleting user by seleted ids
    .then(() => dispatch(actions.fetchStocks(stocksUIProps.queryParams)).then(() => {
      stocksUIProps.setIds([]);
      onHide();// closing delete modal
    }))
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Stoklari Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili stoklari silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Stoklar Siliniyor</span>}
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
            onClick={deleteStocks}
            className="btn btn-primary btn-elevate"
          >
           Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
