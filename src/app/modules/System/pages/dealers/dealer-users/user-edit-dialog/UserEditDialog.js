import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/users/usersActions";
import { UserEditDialogHeader } from "./UserEditDialogHeader";
import { UserEditForm } from "./UserEditForm";
import { useUsersUIContext } from "../UsersUIContext";

// function getFormattedDate(date) {
//   if (typeof date === "string") {
//     return date;
//   }

//   var year = date.getFullYear();

//   var month = (1 + date.getMonth()).toString();
//   month = month.length > 1 ? month : "0" + month;

//   var day = date.getDate().toString();
//   day = day.length > 1 ? day : "0" + day;

//   return month + "/" + day + "/" + year;
// }

export function UserEditDialog() {
  // User UI Context
  const usersUIContext = useUsersUIContext();
  
  const usersUIProps = useMemo(() => {
    return {
      id: usersUIContext.selectedId,
      setIds: usersUIContext.setIds,
      dealerId: usersUIContext.dealerId,
      queryParams: usersUIContext.queryParams,
      showEditUserDialog: usersUIContext.showEditUserDialog,
      closeEditUserDialog: usersUIContext.closeEditUserDialog,
      initUser: usersUIContext.initUser,
    };
  }, [usersUIContext]);

  // User Redux state
  const dispatch = useDispatch();
  const { actionsLoading, userForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.users.actionsLoading,
      userForEdit: state.users.userForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting user by seleted id
    dispatch(actions.fetchUser(usersUIProps.id));
  }, [usersUIProps.id, dispatch]);

  const saveUser = (user) => {
    //user.dueDate = getFormattedDate(user.dueDate);
    if (!usersUIProps.id) {
      // server request for creating users
      dispatch(actions.createUser(user)).then(() => {
        // refresh list after deletion
        usersUIProps.queryParams.filter.dealerId=usersUIProps.dealerId
        // refresh list after update
        dispatch(actions.fetchUsers(usersUIProps.queryParams)).then(() => {
          // clear selections list
          usersUIProps.setIds([]);
          // closing edit modal
          usersUIProps.closeEditUserDialog();
        });
      });
    } else {
      // server request for updating users
      dispatch(actions.updateUser(user)).then(() => {
        // refresh list after update
        usersUIProps.queryParams.filter.dealerId=usersUIProps.dealerId
        // refresh list after update
        dispatch(actions.fetchUsers(usersUIProps.queryParams)).then(() => {
          // clear selections list
          usersUIProps.setIds([]);
          // closing edit modal
          usersUIProps.closeEditUserDialog();
        });
      });
    }
  };

  return (
    <Modal
      show={usersUIProps.showEditUserDialog}
      onHide={usersUIProps.closeEditUserDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      <UserEditDialogHeader id={usersUIProps.id} />
      <UserEditForm
        saveUser={saveUser}
        actionsLoading={actionsLoading}
        user={userForEdit || usersUIProps.initUser}
        onHide={usersUIProps.closeEditUserDialog}
      />
    </Modal>
  );
}
