import React, { useMemo } from "react";
import { StocksFilter } from "./StocksFilter";
import { StocksTable } from "./StocksTable";
import { StocksLoadingDialog } from "./StocksLoadingDialog";
import { StocksDeleteDialog } from "./StocksDeleteDialog";
import { StockDeleteDialog } from "./StockDeleteDialog";
import { StockUpdateStatusDialog } from "./StockUpdateStatusDialog";
import { StocksFetchDialog } from "./StocksFetchDialog";
import { StocksGrouping } from "./StocksGrouping";
import { StockEditDialog } from "./stock-edit-dialog/StockEditDialog";
import { useStocksUIContext } from "./StocksUIContext";

export function Stocks() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return { ids: stocksUIContext.ids };
  }, [stocksUIContext]);

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
        {stocksUIProps.ids.length > 0 && <StocksGrouping />}
      </div>
      <StocksTable />
    </>
  );
}
