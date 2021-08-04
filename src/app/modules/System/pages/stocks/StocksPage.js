import React from "react";
import { Route } from "react-router-dom";
import { StocksLoadingDialog } from "./stocks-loading-dialog/StocksLoadingDialog";
import { StockDeleteDialog } from "./stock-delete-dialog/StockDeleteDialog";
import { StocksCard } from "./StocksCard";
import { StocksUIProvider } from "./StocksUIContext";
import { StocksFetchDialog } from "./stocks-fetch-dialog/StocksFetchDialog";
import { StocksUpdateStatusDialog } from "./stocks-update-status-dialog/StocksUpdateStatusDialog";
import { StocksDeleteDialog } from "./stocks-delete-dialog/StocksDeleteDialog";
import { StockUpdateStatusDialog } from "./stock-update-status-dialog/StockUpdateStatusDialog";
import { StockUpdateExpertiseDialog } from "./stock-update-expertise-dialog/StockUpdateExpertiseDialog";

export const StocksPage=({ history }) =>{


  const stocksUIEvents = {
    newStockButtonClick: () => {
      history.push("/system/stocks/new");
    },
    openEditStockPage: (id) => {
      history.push(`/system/stocks/${id}/edit`);
    },
    openDetailStockPage: (id) => {
      history.push(`/system/stocks/${id}/detail`);
    },
    openDeleteStockDialog: (id) => {
      history.push(`/system/stocks/${id}/delete`);
    },
  
    openDeleteStocksDialog: () => {
      history.push(`/system/stocks/deleteStocks`);
    },
    openFetchStocksDialog: () => {
      history.push(`/system/stocks/fetch`);
    },
    openUpdateStocksStatusDialog: () => {
      history.push("/system/stocks/updateStatus");
    },
    openUpdateStockStatusDialog: (id) => {
      history.push(`/system/stocks/${id}/updateStatus`);
    },
    openUpdateExpertisDialog: (id) => {
      history.push(`/system/stocks/${id}/updateExpertise`);
    }
  };


  return (
    <StocksUIProvider stocksUIEvents={stocksUIEvents}>
      <StocksLoadingDialog />
      <Route path="/system/stocks/deleteStocks">
        {({ history, match }) => (
          <StocksDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/system/stocks");
            }}
          />
        )}
      </Route>
      <Route path="/system/stocks/:id/delete"> 
        {({ history, match }) => {
          return(
            <StockDeleteDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/stocks");
              }}
            />
          )
        }}
      </Route>
      <Route path="/system/stocks/fetch">
        {({ history, match }) => (
          <StocksFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/system/stocks");
            }}
          />
        )}
      </Route>
      <Route path="/system/stocks/updateStatus">
        {({ history, match }) => (
          <StocksUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/system/stocks");
            }}
          />
        )}
      </Route>
      <Route path="/system/stocks/:id/updateStatus"> 
        {({ history, match }) => {
          return(
            <StockUpdateStatusDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/stocks");
              }}
            />
          )
        }}
      </Route>
      <Route path="/system/stocks/:id/updateExpertise"> 
        {({ history, match }) => {
          return(
            <StockUpdateExpertiseDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/stocks");
              }}
            />
          )
        }}
      </Route>
      <StocksCard />
    </StocksUIProvider>
  );
}
