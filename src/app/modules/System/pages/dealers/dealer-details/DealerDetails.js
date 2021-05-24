import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/dealers/dealersActions";
import { useSubheader } from "../../../../../../_metronic/layout";
import { DealerCard } from "./dealer-detail-cards/DealerCard";
import { DealerManagerCard } from "./dealer-detail-cards/DealerManagerCard";
import { ChildrenTabsCard } from "./dealer-children-tables/ChildrenTabsCard"
import { AdvanceTablesWidget1, AdvanceTablesWidget9, ListsWidget10 } from '../../../../../../_metronic/_partials/widgets';
import { UsersCard } from "./dealer-children-tables/UsersCard";
import { StocksCard } from "./dealer-children-tables/StocksCard";
import { AddressesCard } from "./dealer-children-tables/AddressesCard";

export function DealerDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Bayi Kartı");
  const dispatch = useDispatch();

  const { actionsLoading, dealer, administrations } = useSelector(
    (state) => ({
      actionsLoading: state.dealers.actionsLoading,
      dealer: state.dealers.dealerForDetail,
      administrations: state.dealers.administrations
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchDealerDetail(id));
    dispatch(actions.fetchAdministrations(id));
  }, [id, dispatch]);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <DealerCard dealer={dealer}></DealerCard>
        </div>
        <div className="col-md-4">
          <DealerManagerCard user={administrations[0]} count={administrations.length}></DealerManagerCard>
        </div>
        <div className="col-md-4">
          <ListsWidget10 className="card-stretch gutter-b"></ListsWidget10>
        </div>
      </div>

      {dealer && (
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="p-2 bd-highlight mb-3"><ChildrenTabsCard parentId={id} className="card-stretch gutter-b"></ChildrenTabsCard></div>
          <div class="p-2 bd-highlight mb-3"><UsersCard parentId={id} className="card-stretch gutter-b"></UsersCard></div>
          {dealer.dealerTypeId != 1 && (
              <div class="p-2 bd-highlight mb-3"><StocksCard parentId={id} className="card-stretch gutter-b"></StocksCard></div>
            )
          }
          <div class="p-2 bd-highlight mb-3"><AddressesCard parentGuid={dealer.guid || ""} className="card-stretch gutter-b"></AddressesCard></div></div>
      )
      }

    </>

  );
}
