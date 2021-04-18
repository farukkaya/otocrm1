/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/stocks/stocksActions";
import { useStocksUIContext } from "./StocksUIContext";

export function StocksDeleteDialog() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      setIds: stocksUIContext.setIds,
      dealerId: stocksUIContext.dealerId,
      queryParams: stocksUIContext.queryParams,
      showDeleteStocksDialog: stocksUIContext.showDeleteStocksDialog,
      closeDeleteStocksDialog: stocksUIContext.closeDeleteStocksDialog,
    };
  }, [stocksUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.stocks.actionsLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!stocksUIProps.ids || stocksUIProps.ids.length === 0) {
      stocksUIProps.closeDeleteStocksDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.ids]);

  const deleteStocks = () => {
    dispatch(actions.deleteStocks(stocksUIProps.ids)).then(() => {
      dispatch(
        actions.fetchStocks(
          stocksUIProps.queryParams,
          stocksUIProps.dealerId
        )
      ).then(() => {
        stocksUIProps.setIds([]);
        stocksUIProps.closeDeleteStocksDialog();
      });
    });
  };

  return (
    <Modal
      show={stocksUIProps.showDeleteStocksDialog}
      onHide={stocksUIProps.closeDeleteStocksDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Stokları Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili stokları silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Stoklar siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={stocksUIProps.closeDeleteStocksDialog}
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
