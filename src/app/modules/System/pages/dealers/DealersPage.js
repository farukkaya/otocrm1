import React from "react";
import { Route } from "react-router-dom";
import { DealersLoadingDialog } from "./dealers-loading-dialog/DealersLoadingDialog";
import { DealerDeleteDialog } from "./dealer-delete-dialog/DealerDeleteDialog";
import { DealersCard } from "./DealersCard";
import { DealersUIProvider } from "./DealersUIContext";
import { DealersFetchDialog } from "./dealers-fetch-dialog/DealersFetchDialog";
import { DealersUpdateStatusDialog } from "./dealers-update-status-dialog/DealersUpdateStatusDialog";
import { DealersDeleteDialog } from "./dealers-delete-dialog/DealersDeleteDialog";
import { DealerUpdateStatusDialog } from "./dealer-update-status-dialog/DealerUpdateStatusDialog";

export const DealersPage=({ history }) =>{
  const dealersUIEvents = {
    newDealerButtonClick: () => {
      history.push("/system/dealers/new");
    },
    openEditDealerPage: (id) => {
      history.push(`/system/dealers/${id}/edit`);
    },
    openDeleteDealerDialog: (id) => {
      history.push(`/system/dealers/${id}/delete`);
    },
  
    openDeleteDealersDialog: () => {
      history.push(`/system/dealers/deleteDealers`);
    },
    openFetchDealersDialog: () => {
      history.push(`/system/dealers/fetch`);
    },
    openUpdateDealersStatusDialog: () => {
      history.push("/system/dealers/updateStatus");
    },
    openUpdateDealerStatusDialog: (id) => {
      history.push(`/system/dealers/${id}/updateStatus`);
    }
  };
  return (
    <DealersUIProvider dealersUIEvents={dealersUIEvents}>
      <DealersLoadingDialog />
      <Route path="/system/dealers/deleteDealers">
        {({ history, match }) => (
          <DealersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/system/dealers");
            }}
          />
        )}
      </Route>
      <Route path="/system/dealers/:id/delete"> 
        {({ history, match }) => {
          return(
            <DealerDeleteDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/dealers");
              }}
            />
          )
        }}
      </Route>
      <Route path="/system/dealers/fetch">
        {({ history, match }) => (
          <DealersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/system/dealers");
            }}
          />
        )}
      </Route>
      <Route path="/system/dealers/updateStatus">
        {({ history, match }) => (
          <DealersUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/system/dealers");
            }}
          />
        )}
      </Route>
      <Route path="/system/dealers/:id/updateStatus"> 
        {({ history, match }) => {
          return(
            <DealerUpdateStatusDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/dealers");
              }}
            />
          )
        }}
      </Route>
      <DealersCard />
    </DealersUIProvider>
  );
}
