import React, { useMemo } from "react";
import { StocksFilter } from "./StocksFilter";
import { StocksTable } from "./StocksTable";
import { StocksLoadingDialog } from "./StocksLoadingDialog";
import { StocksDeleteDialog } from "./StocksDeleteDialog";
import { StockDeleteDialog } from "./StockDeleteDialog";
import { StockUpdateStatusDialog } from "./StockUpdateStatusDialog";
import { StocksFetchDialog } from "./StocksFetchDialog";
import { StockEditDialog } from "./stock-edit-dialog/StockEditDialog";

export function Stocks() {

  return (
    <>
      <StocksLoadingDialog />
      <StockEditDialog />
      <StockDeleteDialog />
      <StockUpdateStatusDialog />
      <StocksDeleteDialog />
      <StocksFetchDialog />
      <div className="form margin-b-30">
        <StocksFilter />
       
      </div>
      <StocksTable />
    </>
  );
}
