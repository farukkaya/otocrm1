/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/addresses/addressesActions"
import { useAddressesUIContext } from "./AddressesUIContext";


export function AddressUpdateStatusDialog() {
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      id: addressesUIContext.selectedId,
      setIds: addressesUIContext.setIds,
      dealerId: addressesUIContext.dealerId,
      queryParams: addressesUIContext.queryParams,
      showUpdateStatusAddressDialog: addressesUIContext.showUpdateStatusAddressDialog,
      closeUpdateStatusAddressDialog: addressesUIContext.closeUpdateStatusAddressDialog,
    };
  }, [addressesUIContext]);

  // Addresses Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.addresses.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected addresses we should close modal
  useEffect(() => {
    if (!addressesUIProps.id) {
      addressesUIProps.closeUpdateStatusAddressDialog();
    }
  }, [addressesUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);



    const updateAddress = () => dispatch(actions.fetchAddress(addressesUIProps.id)) // server request for updateing address by ids
    .then((address) => {
      
      dispatch(actions.updateAddressesStatus([parseInt(addressesUIProps.id)], !address.isActive)) // update status this address
      .then(() =>{
        addressesUIProps.queryParams.filter.dealerId=addressesUIProps.dealerId;
        dispatch(actions.fetchAddresses(addressesUIProps.queryParams)).then(() => {
        // clear selections list
        addressesUIProps.setIds([]);
        // closing delete modal
        addressesUIProps.closeUpdateStatusAddressDialog();
      }) // refresh dealers
    
    });
  });
  return (
    <Modal
      show={addressesUIProps.showUpdateStatusAddressDialog}
      onHide={addressesUIProps.closeUpdateStatusAddressDialog}
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
          <span>Bu adresi güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={addressesUIProps.closeUpdateStatusAddressDialog}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateAddress}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
