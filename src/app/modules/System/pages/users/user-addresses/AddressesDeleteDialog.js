/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/addresses/addressesActions";
import { useAddressesUIContext } from "./AddressesUIContext";

export function AddressesDeleteDialog() {
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      ids: addressesUIContext.ids,
      setIds: addressesUIContext.setIds,
      relationGuid: addressesUIContext.relationGuid,
      queryParams: addressesUIContext.queryParams,
      showDeleteAddressesDialog: addressesUIContext.showDeleteAddressesDialog,
      closeDeleteAddressesDialog: addressesUIContext.closeDeleteAddressesDialog,
    };
  }, [addressesUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.addresses.listLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!addressesUIProps.ids || addressesUIProps.ids.length === 0) {
      addressesUIProps.closeDeleteAddressesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressesUIProps.ids]);

  const deleteAddresses = () => {
    dispatch(actions.deleteAddresses(addressesUIProps.ids)).then(() => {
      //addressesUIProps.queryParams.filter.relationGuid=addressesUIProps.relationGuid,
      dispatch(actions.fetchAddresses(addressesUIProps.queryParams)).then(() => {
        addressesUIProps.setIds([]);
        addressesUIProps.closeDeleteAddressesDialog();
      });
    });
  };

  return (
    <Modal
      show={addressesUIProps.showDeleteAddressesDialog}
      onHide={addressesUIProps.closeDeleteAddressesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Adresleri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili adresleri silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Adresler siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={addressesUIProps.closeDeleteAddressesDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteAddresses}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
