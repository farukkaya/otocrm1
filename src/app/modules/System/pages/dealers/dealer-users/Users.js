import React, { useMemo } from "react";
import { UsersFilter } from "./UsersFilter";
import { UsersTable } from "./UsersTable";
import { UsersLoadingDialog } from "./UsersLoadingDialog";
import { UsersDeleteDialog } from "./UsersDeleteDialog";
import { UserDeleteDialog } from "./UserDeleteDialog";
import { UserUpdateStatusDialog } from "./UserUpdateStatusDialog";
import { UsersFetchDialog } from "./UsersFetchDialog";
import { UserEditDialog } from "./user-edit-dialog/UserEditDialog";

export function Users() {
  return (
    <>
      <UsersLoadingDialog />
      <UserEditDialog />
      <UserDeleteDialog />
      <UserUpdateStatusDialog />
      <UsersDeleteDialog />
      <UsersFetchDialog />
      <div className="form margin-b-30">
        <UsersFilter />
      </div>
      <UsersTable />
    </>
  );
}
