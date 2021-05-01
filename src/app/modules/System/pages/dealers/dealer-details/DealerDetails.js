import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/dealers/dealersActions";
import { useSubheader } from "../../../../../../_metronic/layout";
import { DealerCard } from "./dealer-detail-cards/DealerCard";
import { DealerManagerCard } from "./dealer-detail-cards/DealerManagerCard";
import { AdvanceTablesWidget1,AdvanceTablesWidget9, ListsWidget10 } from '../../../../../../_metronic/_partials/widgets';

export function DealerDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Bayi Kartı");
  const dispatch = useDispatch();

  const { actionsLoading, dealer ,user} = useSelector(
    (state) => ({
      actionsLoading: state.dealers.actionsLoading,
      dealer: state.dealers.dealerForEdit,
      user:state.auth.user
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchDealer(id));
  }, [user,id, dispatch]);
  return (
  <>
       <div className="row">
        <div className="col-md-4">
         <DealerCard dealer={dealer}></DealerCard>
          </div>
          <div className="col-md-4">
            <DealerManagerCard user={user}></DealerManagerCard>
          </div>
          <div className="col-md-4">
            <ListsWidget10 className="card-stretch gutter-b"></ListsWidget10>
          </div>
    </div>
    <div className="d-flex flex-row">
     <div className="row">
     <div className="col-lg-12">
       <AdvanceTablesWidget1 className="card-stretch gutter-b"></AdvanceTablesWidget1>
     </div>
     <div className="col-lg-12">
       <AdvanceTablesWidget9 className="card-stretch gutter-b"></AdvanceTablesWidget9>
     </div>
      </div>
    </div>
  </>

  );
}
