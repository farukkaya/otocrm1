import React from "react";
import { StocksFilter } from "./StocksFilter";
import { StocksTable } from "./StocksTable";
import { StocksLoadingDialog } from "./StocksLoadingDialog";

export function Stocks() {
  // Stocks UI Context
  return (
    <>
      <StocksLoadingDialog />
      <div className="form margin-b-30">
        <StocksFilter />
      </div>
      <StocksTable />
    </>
  );
}
