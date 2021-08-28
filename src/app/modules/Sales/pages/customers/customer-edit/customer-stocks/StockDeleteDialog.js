/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";
import * as actions from "../../../../_redux/stocks/stocksActions";

import { useStocksUIContext } from "./StocksUIContext";

export function StockDeleteDialog() {
  
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      id: stocksUIContext.selectedId,
      setIds: stocksUIContext.setIds,
      customerId: stocksUIContext.customerId,
      queryParams: stocksUIContext.queryParams,
      showDeleteStockDialog: stocksUIContext.showDeleteStockDialog,
      closeDeleteStockDialog: stocksUIContext.closeDeleteStockDialog,
    };
  }, [stocksUIContext]);

  // Stocks Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.stocks.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!stocksUIProps.id) {
      stocksUIProps.closeDeleteStockDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteStock = () => {
    // server request for deleting stock by id
    dispatch(actions.deleteInterestedStocks(stocksUIProps.customerId,[stocksUIProps.id])).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchInterestedStocks(
          stocksUIProps.queryParams,
          stocksUIProps.customerId
        )
      );
      // clear selections list
      stocksUIProps.setIds([]);
      // closing delete modal
      stocksUIProps.closeDeleteStockDialog();
    });
  };

  return (
    <Modal
      show={stocksUIProps.showDeleteStockDialog}
      onHide={stocksUIProps.closeDeleteStockDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Stok Kaldır
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu stok ile müşterinin artık ilgilenmediğine emin misiniz?</span>
        )}
        {isLoading && <span>Stok siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={stocksUIProps.closeDeleteStockDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteStock}
            className="btn btn-primary btn-elevate"
          >
            Kaldır
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
