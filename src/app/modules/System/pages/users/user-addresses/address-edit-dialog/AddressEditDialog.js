import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/addresses/addressesActions";
import { AddressEditDialogHeader } from "./AddressEditDialogHeader";
import { AddressEditForm } from "./AddressEditForm";
import { useAddressesUIContext } from "../AddressesUIContext";


export function AddressEditDialog() {
  // Address UI Context
  const addressesUIContext = useAddressesUIContext();
  
  const addressesUIProps = useMemo(() => {
    return {
      id: addressesUIContext.selectedId,
      setIds: addressesUIContext.setIds,
      relationGuid: addressesUIContext.relationGuid,
      queryParams: addressesUIContext.queryParams,
      showEditAddressDialog: addressesUIContext.showEditAddressDialog,
      closeEditAddressDialog: addressesUIContext.closeEditAddressDialog,
      initAddress: addressesUIContext.initAddress,
    };
  }, [addressesUIContext]);

  // Address Redux state
  const dispatch = useDispatch();
  const { actionsLoading, addressForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.addresses.actionsLoading,
      addressForEdit: state.addresses.addressForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting address by seleted id
    dispatch(actions.fetchAddress(addressesUIProps.id));
  }, [addressesUIProps.id, dispatch]);

  const saveAddress = (address) => {
    
    address.professionId=+address.professionId;
    address.cityId=+address.cityId
    address.townId= +address.townId
    address.neighborhoodId=+ address.neighborhoodId

    if (!addressesUIProps.id) {
      address.isPrimaryAddress=false;
      address.relationGuid=addressesUIProps.relationGuid;
      // server request for creating addresses
      dispatch(actions.createAddress(address)).then(() => {
        // refresh list after deletion
        addressesUIProps.queryParams.filter.relationGuid=addressesUIProps.relationGuid
        // refresh list after update
        dispatch(actions.fetchAddresses(addressesUIProps.queryParams)).then(() => {
          // clear selections list
          addressesUIProps.setIds([]);
          // closing edit modal
          addressesUIProps.closeEditAddressDialog();
        });
      });
    } else {
      // server request for updating addresses
      dispatch(actions.updateAddress(address)).then(() => {
        // refresh list after update
        addressesUIProps.queryParams.filter.relationGuid=addressesUIProps.relationGuid
        // refresh list after update
        dispatch(actions.fetchAddresses(addressesUIProps.queryParams)).then(() => {
          // clear selections list
          addressesUIProps.setIds([]);
          // closing edit modal
          addressesUIProps.closeEditAddressDialog();
        });
      });
    }
  };

  return (
    <Modal
      show={addressesUIProps.showEditAddressDialog}
      onHide={addressesUIProps.closeEditAddressDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      <AddressEditDialogHeader id={addressesUIProps.id} />
      <AddressEditForm
        saveAddress={saveAddress}
        actionsLoading={actionsLoading}
        address={addressForEdit || addressesUIProps.initAddress}
        onHide={addressesUIProps.closeEditAddressDialog}
      />
    </Modal>
  );
}
