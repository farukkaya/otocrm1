import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/sales/customers/new");
    },
    openEditCustomerPage: (id) => {
      history.push(`/sales/customers/${id}/edit`);
    },
    openDetailCustomerPage: (id) => {
      history.push(`/sales/customers/${id}/detail`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/sales/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/sales/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/sales/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/sales/customers/updateStatus");
    },
    openUpdateCustomerStatusDialog: (id) => {
      history.push(`/sales/customers/${id}/updateStatus`);
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
    <Route path="/sales/customers/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/sales/customers");
            }}
          />
        )}
      </Route>
      <Route path="/sales/customers/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/sales/customers");
            }}
          />
        )}
      </Route>
      <Route path="/sales/customers/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/sales/customers");
            }}
          />
        )}
      </Route>
      <Route path="/sales/customers/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/sales/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
