/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/users/usersActions";
import { useUsersUIContext } from "./UsersUIContext";

export function UsersDeleteDialog() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      dealerId: usersUIContext.dealerId,
      queryParams: usersUIContext.queryParams,
      showDeleteUsersDialog: usersUIContext.showDeleteUsersDialog,
      closeDeleteUsersDialog: usersUIContext.closeDeleteUsersDialog,
    };
  }, [usersUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.users.listLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!usersUIProps.ids || usersUIProps.ids.length === 0) {
      usersUIProps.closeDeleteUsersDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.ids]);

  const deleteUsers = () => {
    dispatch(actions.deleteUsers(usersUIProps.ids)).then(() => {
      dispatch(
        actions.fetchUsers(
          usersUIProps.queryParams,
          usersUIProps.dealerId
        )
      ).then(() => {
        usersUIProps.setIds([]);
        usersUIProps.closeDeleteUsersDialog();
      });
    });
  };

  return (
    <Modal
      show={usersUIProps.showDeleteUsersDialog}
      onHide={usersUIProps.closeDeleteUsersDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Kullanıcıları Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili kullanıcıları silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Kullanıcılar siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={usersUIProps.closeDeleteUsersDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteUsers}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
