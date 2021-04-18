/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/stocks/stocksActions"
import { useStocksUIContext } from "./StocksUIContext";


export function StockUpdateStatusDialog() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      id: stocksUIContext.selectedId,
      setIds: stocksUIContext.setIds,
      dealerId: stocksUIContext.dealerId,
      queryParams: stocksUIContext.queryParams,
      showUpdateStatusStockDialog: stocksUIContext.showUpdateStatusStockDialog,
      closeUpdateStatusStockDialog: stocksUIContext.closeUpdateStatusStockDialog,
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
    if (!stocksUIProps.id) {
      stocksUIProps.closeUpdateStatusStockDialog();
    }
  }, [stocksUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);



    const updateStock = () => dispatch(actions.fetchStock(stocksUIProps.id)) // server request for updateing user by ids
    .then((stock) => {
      
      dispatch(actions.updateStocksStatus([parseInt(stocksUIProps.id)], !stock.isActive)) // update status this user
      .then(() =>{
        dispatch(actions.fetchStocksByDealer(
          stocksUIProps.queryParams,
          stocksUIProps.dealerId
        ))
        // clear selections list
        stocksUIProps.setIds([]);
        // closing delete modal
        stocksUIProps.closeUpdateStatusStockDialog();
      }) // refresh dealers
    
    });
 
  return (
    <Modal
      show={stocksUIProps.showUpdateStatusStockDialog}
      onHide={stocksUIProps.closeUpdateStatusStockDialog}
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
          <span>Bu bayiyi güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={stocksUIProps.closeUpdateStatusStockDialog}
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
