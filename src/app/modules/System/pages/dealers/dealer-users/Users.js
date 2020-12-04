import React, { useMemo } from "react";
import { UsersFilter } from "./UsersFilter";
import { UsersTable } from "./UsersTable";
import { UsersLoadingDialog } from "./UsersLoadingDialog";
import { UsersDeleteDialog } from "./UsersDeleteDialog";
import { UserDeleteDialog } from "./UserDeleteDialog";
import { UserUpdateStatusDialog } from "./UserUpdateStatusDialog";
import { UsersFetchDialog } from "./UsersFetchDialog";
import { UsersGrouping } from "./UsersGrouping";
import { UserEditDialog } from "./user-edit-dialog/UserEditDialog";
import { useUsersUIContext } from "./UsersUIContext";

export function Users() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return { ids: usersUIContext.ids };
  }, [usersUIContext]);

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
        {usersUIProps.ids.length > 0 && <UsersGrouping />}
      </div>
      <UsersTable />
    </>
  );
}
