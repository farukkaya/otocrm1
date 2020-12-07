/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/stocks/stocksActions"
import { useStocksUIContext } from "../StocksUIContext";


export function StockDeleteDialog({ id, show, onHide }) {
  // Stocks UI Context
  const galleriesUIContext = useStocksUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      //setIds: galleriesUIContext.setIds,
      queryParams: galleriesUIContext.queryParams,
    };
  }, [galleriesUIContext]);

  // Stocks Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.galleries.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => { }, [isLoading, dispatch]);

  const deleteStock = () => dispatch(actions.deleteStock(id)) // server request for deleting user by id
    .then(() => dispatch(actions.fetchStocks(galleriesUIProps.queryParams)))// refresh list after deletion
    .then(() => onHide());// closing delete modal


  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Stok Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu stoğu kalıcı olarak silmek istediğinizden emin misiniz?</span>
        )}
        {isLoading && <span>Stok siliniyor ...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
           Vazgeç
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteStock}
            className="btn btn-delete btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
