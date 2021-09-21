import React, { useMemo } from "react";
import { StocksFilter } from "./StocksFilter";
import { StocksTable } from "./StocksTable";
import { StocksLoadingDialog } from "./StocksLoadingDialog";
import { StockDeleteDialog } from "./StockDeleteDialog";
import { StockUpdateStatusDialog } from "./StockUpdateStatusDialog";
import { StocksFetchDialog } from "./StocksFetchDialog";

export function Stocks() {

  return (
    <>
      <StocksLoadingDialog />
      <StockDeleteDialog />
      <StockUpdateStatusDialog />
      <StocksFetchDialog />
      <div className="form margin-b-30">
        <StocksFilter />
       
      </div>
      <StocksTable />
    </>
  );
}
