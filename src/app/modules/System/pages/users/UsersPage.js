import React from "react";
import { Route } from "react-router-dom";
import { UsersLoadingDialog } from "./users-loading-dialog/UsersLoadingDialog";
import { UserDeleteDialog } from "./user-delete-dialog/UserDeleteDialog";
import { UsersDeleteDialog } from "./users-delete-dialog/UsersDeleteDialog";
import { UsersFetchDialog } from "./users-fetch-dialog/UsersFetchDialog";
import { UsersUpdateStatusDialog } from "./users-update-status-dialog/UsersUpdateStatusDialog";
import { UsersCard } from "./UsersCard";
import { UsersUIProvider } from "./UsersUIContext";

export function UsersPage({ history }) {
  const usersUIEvents = {
    newUserButtonClick: () => {
      history.push("/system/users/new");
    },
    openEditUserPage: (id) => {
      history.push(`/system/users/${id}/edit`);
    },
    openDeleteUserDialog: (id) => {
      history.push(`/system/users/${id}/delete`);
    },
    openDeleteUsersDialog: () => {
      history.push(`/system/users/deleteUsers`);
    },
    openFetchUsersDialog: () => {
      history.push(`/system/users/fetch`);
    },
    openUpdateUsersStatusDialog: () => {
      history.push("/system/users/updateStatus");
    },
  };

  return (
    <UsersUIProvider usersUIEvents={usersUIEvents}>
      <UsersLoadingDialog />
      <Route path="/system/users/deleteUsers">
        {({ history, match }) => (
          <UsersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/system/users");
            }}
          />
        )}
      </Route>
      <Route path="/system/users/:id/delete">
        {({ history, match }) => (
          <UserDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/system/users");
            }}
          />
        )}
      </Route>
      <Route path="/system/users/fetch">
        {({ history, match }) => (
          <UsersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/system/users");
            }}
          />
        )}
      </Route>
      <Route path="/system/users/updateStatus">
        {({ history, match }) => (
          <UsersUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/system/users");
            }}
          />
        )}
      </Route>
      <UsersCard />
    </UsersUIProvider>
  );
}
