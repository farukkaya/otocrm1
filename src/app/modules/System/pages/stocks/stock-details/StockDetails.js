import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/stocks/stocksActions";
import { useSubheader } from "../../../../../../_metronic/layout";
import { StockCard } from "./stock-detail-cards/StockCard";
import { DamageRecordsCard } from "./stock-detail-cards/DamageRecordsCard";
import { StockDocumentsCard } from "./stock-detail-cards/StockDocumentsCard";
import { ExperiseViewCard } from "./stock-detail-cards/ExperiseViewCard";
import { AdvanceTablesWidget7,AdvanceTablesWidget9, ListsWidget10 } from '../../../../../../_metronic/_partials/widgets';

export function StockDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Stok Kartı");
  const dispatch = useDispatch();

  const { actionsLoading, stock} = useSelector(
    (state) => ({
      actionsLoading: state.stocks.actionsLoading,
      stock: state.stocks.stockForEdit
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchStock(id));
  }, [stock,id, dispatch]);
  return (
   <div className="d-flex flex-row h-100">
     <StockCard stock={stock}></StockCard>
      <div className="flex-row-fluid ml-lg-8">
        <div className="row">
          <div className="col-lg-6">
          <DamageRecordsCard vinNo={stock?.vinNo}
                               plateNo={stock?.plateNo}>
            </DamageRecordsCard>
          </div>
          <div className="col-lg-6">
          <ExperiseViewCard></ExperiseViewCard>
          </div>
          <div className="col-lg-12">
           
          <StockDocumentsCard vinNo={stock?.vinNo}
                               plateNo={stock?.plateNo}>
            </StockDocumentsCard>
          </div>
          <div className="col-lg-12">
             <AdvanceTablesWidget9 className="card-stretch gutter-b"></AdvanceTablesWidget9>
         </div>
        </div>

      </div>
    </div>
  );
}
