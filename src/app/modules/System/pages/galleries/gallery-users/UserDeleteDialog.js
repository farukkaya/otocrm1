/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/users/usersActions";

import { useUsersUIContext } from "./UsersUIContext";

export function UserDeleteDialog() {
  
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      id: usersUIContext.selectedId,
      setIds: usersUIContext.setIds,
      galleryId: usersUIContext.galleryId,
      queryParams: usersUIContext.queryParams,
      showDeleteUserDialog: usersUIContext.showDeleteUserDialog,
      closeDeleteUserDialog: usersUIContext.closeDeleteUserDialog,
    };
  }, [usersUIContext]);

  // Users Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.users.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!usersUIProps.id) {
      usersUIProps.closeDeleteUserDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteUser = () => {
    // server request for deleting user by id
    dispatch(actions.deleteUser(usersUIProps.id)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchUsers(
          usersUIProps.queryParams,
          usersUIProps.galleryId
        )
      );
      // clear selections list
      usersUIProps.setIds([]);
      // closing delete modal
      usersUIProps.closeDeleteUserDialog();
    });
  };

  return (
    <Modal
      show={usersUIProps.showDeleteUserDialog}
      onHide={usersUIProps.closeDeleteUserDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Kullanıcı Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu kullanıcıyı silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Kullanıcı siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={usersUIProps.closeDeleteUserDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteUser}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
