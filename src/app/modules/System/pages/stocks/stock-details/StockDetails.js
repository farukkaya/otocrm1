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

  const { actionsLoading, stockDetail} = useSelector(
    (state) => ({
      actionsLoading: state.stocks.actionsLoading,
      stockDetail: state.stocks.stockForDetail,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchStockDetail(id));
  }, [id, dispatch]);
  return (
   <div className="d-flex flex-row h-100">
     {stockDetail.stock&& stockDetail.stock.id==id&&(
       <>
        <StockCard stock={stockDetail.stock} images={stockDetail.images}></StockCard>
      <div className="flex-row-fluid ml-lg-8">
        <div className="row">
          <div className="col-lg-6">
          <DamageRecordsCard  stockDamages={stockDetail.stockDamages}vinNo={stockDetail.stock?.vinNo} plateNo={stockDetail.stock?.plateNo}/>
          </div>
          <div className="col-lg-6">
          <ExperiseViewCard stockExpertise={stockDetail.stockExpertise} tramerTypeId={stockDetail.stock?.tramerTypeId} tramerValue={stockDetail.stock?.tramerValue}/>
          </div>
          <div className="col-lg-12">
          <StockDocumentsCard documents={stockDetail.documents} vinNo={stockDetail.stock?.vinNo} plateNo={stockDetail.stock?.plateNo}/>
          </div>
          <div className="col-lg-12">
             <AdvanceTablesWidget9 className="card-stretch gutter-b"/>
         </div>
        </div>

      </div>
       </>
     )}
    
    </div>
  );
}
