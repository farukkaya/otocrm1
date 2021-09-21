import React, { useEffect, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/customers/customersActions";
import { useSubheader } from "../../../../../../_metronic/layout";
import { DocumentsCard } from "./customer-children-tables/DocumentsCard";
import { AddressesCard } from "./customer-children-tables/AddressesCard";
import { InterestedStocksCard } from "./customer-children-tables/InterestedStocksCard";
import { CustomerCard } from "./customer-detail-cards/CustomerCard";
import { SalesPersonCard } from "./customer-detail-cards/SalesPersonCard";
import { CreditApplicationCard } from "./customer-detail-cards/CreditApplicationCard";

export function CustomerDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Müşteri Kartı");
  const dispatch = useDispatch();
  const openDetailPage= (id) => {
    history.push(`/system/stocks/${id}/detail`);
  };
  const { actionsLoading, customerDetail } = useSelector(
    (state) => ({
      actionsLoading: state.customers.actionsLoading,
      customerDetail: state.customers.customerForDetail,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(actions.fetchCustomerDetail(id));
  }, [id, dispatch]);
  return (
      <>

      <div className="row">
        <div className="col-md-6">
          <CustomerCard customer={customerDetail?.customer}/>
        </div>
        <div className="col-md-6">
          <SalesPersonCard user={customerDetail?.salesPerson}/>
        </div>
      </div>

      {customerDetail?.customer.id==id&& (
        <div class="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight mb-3"><InterestedStocksCard customerId={customerDetail.customer.id} openDetailStockPage={openDetailPage} /></div>
        <div className="p-2 bd-highlight mb-3"><DocumentsCard parentId={id} className="card-stretch gutter-b"></DocumentsCard></div>
        <div className="p-2 bd-highlight mb-3"><AddressesCard parentGuid={customerDetail?.guid} className="card-stretch gutter-b"></AddressesCard></div></div>
      )}

    </>
  );
}
