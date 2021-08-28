import React from "react";
import { StocksFilter } from "./StocksFilter";
import { StocksTable } from "./StocksTable";
import { StocksLoadingDialog } from "./StocksLoadingDialog"; 
import { StocksDeleteDialog } from "./StocksDeleteDialog"; 
import { StockDeleteDialog } from "./StockDeleteDialog";

export function Stocks() {
  // Stocks UI Context
  return (
    <>
      <StocksLoadingDialog />
      <StocksDeleteDialog />
      <StockDeleteDialog />
      <div className="form margin-b-30">
        <StocksFilter />
      </div>
      <StocksTable />
    </>
  );
}
