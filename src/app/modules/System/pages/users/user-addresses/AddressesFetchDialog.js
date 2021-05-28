import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useAddressesUIContext } from "./AddressesUIContext";

const selectedAddresses = (entities, ids) => {
  const _addresses = [];
  ids.forEach((id) => {
    const address = entities.find((el) => el.id === id);
    if (address) {
      _addresses.push(address);
    }
  });
  return _addresses;
};

export function AddressesFetchDialog() {
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      ids: addressesUIContext.ids,
      queryParams: addressesUIContext.queryParams,
      showFetchAddressesDialog: addressesUIContext.showFetchAddressesDialog,
      closeFetchAddressesDialog: addressesUIContext.closeFetchAddressesDialog,
    };
  }, [addressesUIContext]);

  const { addresses } = useSelector(
    (state) => ({
      addresses: selectedAddresses(state.addresses.entities, addressesUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!addressesUIProps.ids || addressesUIProps.ids.length === 0) {
      addressesUIProps.closeFetchAddressesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressesUIProps.ids]);

  return (
    <Modal
      show={addressesUIProps.showFetchAddressesDialog}
      onHide={addressesUIProps.closeFetchAddressesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Adresler
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {addresses.map((address) => (
              <div className="list-timeline-item mb-3" key={address.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {address.id}
                  </span>{" "}
                  <span className="ml-5">{address.name} </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={addressesUIProps.closeFetchAddressesDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={addressesUIProps.closeFetchAddressesDialog}
            className="btn btn-primary btn-elevate"
          >
            Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
