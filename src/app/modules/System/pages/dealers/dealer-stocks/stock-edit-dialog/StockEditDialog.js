import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/stocks/stocksActions";
import { StockEditDialogHeader } from "./StockEditDialogHeader";
import { StockEditForm } from "./StockEditForm";
import { useStocksUIContext } from "../StocksUIContext";

// function getFormattedDate(date) {
//   if (typeof date === "string") {
//     return date;
//   }

//   var year = date.getFullYear();

//   var month = (1 + date.getMonth()).toString();
//   month = month.length > 1 ? month : "0" + month;

//   var day = date.getDate().toString();
//   day = day.length > 1 ? day : "0" + day;

//   return month + "/" + day + "/" + year;
// }

export function StockEditDialog() {
  // Stock UI Context
  const stocksUIContext = useStocksUIContext();
  
  const stocksUIProps = useMemo(() => {
    return {
      id: stocksUIContext.selectedId,
      setIds: stocksUIContext.setIds,
      dealerId: stocksUIContext.dealerId,
      queryParams: stocksUIContext.queryParams,
      showEditStockDialog: stocksUIContext.showEditStockDialog,
      closeEditStockDialog: stocksUIContext.closeEditStockDialog,
      initStock: stocksUIContext.initStock,
    };
  }, [stocksUIContext]);

  // Stock Redux state
  const dispatch = useDispatch();
  const { actionsLoading, stockForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.stocks.actionsLoading,
      stockForEdit: state.stocks.stockForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting stock by seleted id
    dispatch(actions.fetchStock(stocksUIProps.id));
  }, [stocksUIProps.id, dispatch]);

  const saveStock = (stock) => {
    //stock.dueDate = getFormattedDate(stock.dueDate);
    if (!stocksUIProps.id) {
      // server request for creating stocks
      dispatch(actions.createStock(stock)).then(() => {
        // refresh list after deletion
        dispatch(
          actions.fetchStock(
            stocksUIProps.queryParams,
            stocksUIProps.dealerId
          )
        ).then(() => {
          // clear selections list
          stocksUIProps.setIds([]);
          // closing edit modal
          stocksUIProps.closeEditStockDialog();
        });
      });
    } else {
      // server request for updating stocks
      dispatch(actions.updateStock(stock)).then(() => {
        // refresh list after deletion
        dispatch(
          // refresh list after deletion
          actions.fetchStock(
            stocksUIProps.queryParams,
            stocksUIProps.dealerId
          )
        ).then(() => {
          // clear selections list
          stocksUIProps.setIds([]);
          // closing edit modal
          stocksUIProps.closeEditStockDialog();
        });
      });
    }
  };

  return (
    <Modal
      show={stocksUIProps.showEditStockDialog}
      onHide={stocksUIProps.closeEditStockDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      <StockEditDialogHeader id={stocksUIProps.id} />
      <StockEditForm
        saveStock={saveStock}
        actionsLoading={actionsLoading}
        stock={stockForEdit || stocksUIProps.initStock}
        onHide={stocksUIProps.closeEditStockDialog}
      />
    </Modal>
  );
}
