/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/addresses/addressesActions";

import { useAddressesUIContext } from "./AddressesUIContext";

export function AddressDeleteDialog() {
  
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      id: addressesUIContext.selectedId,
      setIds: addressesUIContext.setIds,
      relationGuid: addressesUIContext.relationGuid,
      queryParams: addressesUIContext.queryParams,
      showDeleteAddressDialog: addressesUIContext.showDeleteAddressDialog,
      closeDeleteAddressDialog: addressesUIContext.closeDeleteAddressDialog,
    };
  }, [addressesUIContext]);

  // Addresses Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.addresses.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!addressesUIProps.id) {
      addressesUIProps.closeDeleteAddressDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressesUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteAddress = () => {
    // server request for deleting address by id
    dispatch(actions.deleteAddress(addressesUIProps.id)).then(() => {
      //addressesUIProps.queryParams.filter.relationGuid=addressesUIProps.relationGuid,
      // refresh list after deletion
      dispatch(actions.fetchAddresses(addressesUIProps.queryParams));
      // clear selections list
      addressesUIProps.setIds([]);
      // closing delete modal
      addressesUIProps.closeDeleteAddressDialog();
    });
  };

  return (
    <Modal
      show={addressesUIProps.showDeleteAddressDialog}
      onHide={addressesUIProps.closeDeleteAddressDialog}
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
            onClick={addressesUIProps.closeDeleteAddressDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteAddress}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
