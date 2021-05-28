import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { UsersLoadingDialog } from "./users-loading-dialog/UsersLoadingDialog";
import { UserDeleteDialog } from "./user-delete-dialog/UserDeleteDialog";
import { UsersCard } from "./UsersCard";
import { UsersUIProvider } from "./UsersUIContext";
import { UsersFetchDialog } from "./users-fetch-dialog/UsersFetchDialog";
import { UsersUpdateStatusDialog } from "./users-update-status-dialog/UsersUpdateStatusDialog";
import { UsersDeleteDialog } from "./users-delete-dialog/UsersDeleteDialog";
import { UserUpdateStatusDialog } from "./user-update-status-dialog/UserUpdateStatusDialog";

export const UsersPage=({ history }) =>{
  const { user } = useSelector(
    ({ auth }) => ({
      user: auth.user.user,
    }),
    shallowEqual
  );
  const backToDashboard = () => {
    history.push(`/dashboard`);
  };
  // if(user==undefined || !user?.isManager){
  //   alert("Bu Ekranı Görme Yetkiniz Yok!!!");
  //   backToDashboard();
  // }
  const usersUIEvents = {
    newUserButtonClick: () => {
      history.push("/system/users/new");
    },
    openEditUserPage: (guid) => {
      history.push(`/system/users/${guid}/edit`);
    },
    openDetailUserPage: (guid) => {
      history.push(`/system/users/${guid}/detail`);
    },
    openDeleteUserDialog: (guid) => {
      history.push(`/system/users/${guid}/delete`);
    },
    openFetchUsersDialog: () => {
      history.push(`/system/users/fetch`);
    },
    openDeleteUsersDialog: () => {
      history.push(`/system/users/deleteUsers`);
    },
    openUpdateUsersStatusDialog: () => {
      history.push("/system/users/updateStatus");
    },
    openUpdateUserStatusDialog: (id) => {
      history.push(`/system/users/${id}/updateStatus`);
    }
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
      <Route path="/system/users/:guid/delete"> 
        {({ history, match }) => {
          return(
            <UserDeleteDialog
              show={match != null}
              id={match && match.params.guid}
              onHide={() => {
                history.push("/system/users");
              }}
            />
          )
        }}
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
      <Route path="/system/users/:guid/updateStatus"> 
        {({ history, match }) => {
          return(
            <UserUpdateStatusDialog
              show={match != null}
              id={match && match.params.guid}
              onHide={() => {
                history.push("/system/users");
              }}
            />
          )
        }}
      </Route>
      <UsersCard />
    </UsersUIProvider>
  );
}
