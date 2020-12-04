/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/users/usersActions"
import { useUsersUIContext } from "./UsersUIContext";


export function UserUpdateStatusDialog() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      id: usersUIContext.selectedId,
      setIds: usersUIContext.setIds,
      dealerId: usersUIContext.dealerId,
      queryParams: usersUIContext.queryParams,
      showUpdateStatusUserDialog: usersUIContext.showUpdateStatusUserDialog,
      closeUpdateStatusUserDialog: usersUIContext.closeUpdateStatusUserDialog,
    };
  }, [usersUIContext]);

  // Users Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.users.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected users we should close modal
  useEffect(() => {
    if (!usersUIProps.id) {
      usersUIProps.closeUpdateStatusUserDialog();
    }
  }, [usersUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);



    const updateUser = () => dispatch(actions.fetchUser(usersUIProps.id)) // server request for updateing user by ids
    .then((user) => {
      
      dispatch(actions.updateUsersStatus([parseInt(usersUIProps.id)], !user.isActive)) // update status this user
      .then(() =>{
        dispatch(actions.fetchUsersByDealer(
          usersUIProps.queryParams,
          usersUIProps.dealerId
        ))
        // clear selections list
        usersUIProps.setIds([]);
        // closing delete modal
        usersUIProps.closeUpdateStatusUserDialog();
      }) // refresh dealers
    
    });
 
  return (
    <Modal
      show={usersUIProps.showUpdateStatusUserDialog}
      onHide={usersUIProps.closeUpdateStatusUserDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Durum Güncellemesi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu kullanıcıyı güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={usersUIProps.closeUpdateStatusUserDialog}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateUser}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
