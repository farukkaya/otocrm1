/* eslint-disable no-restricted-imports */
import React, { useEffect,useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/addresses/addressesActions";
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
  
export function AddressesUpdateStatusDialog() {
    
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      ids: addressesUIContext.ids,
      setIds: addressesUIContext.setIds,
      relationGuid: addressesUIContext.relationGuid,
      queryParams: addressesUIContext.queryParams,
      showUpdateAddressesStatusDialog: addressesUIContext.showUpdateAddressesStatusDialog,
      closeUpdateAddressesStatusDialog: addressesUIContext.closeUpdateAddressesStatusDialog,
    };
  }, [addressesUIContext]);

  const dispatch = useDispatch();
  const { isLoading,addresses } = useSelector(
    (state) => ({ 
        addresses: selectedAddresses(state.addresses.entities, addressesUIProps.ids),
        isLoading: state.addresses.listLoading
     }),
    shallowEqual
  );

//   useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!addressesUIProps.ids || addressesUIProps.ids.length === 0) {
      addressesUIProps.closeUpdateAddressesStatusDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressesUIProps.ids]);
  const [status, setStatus] = useState("0");
  const updateStatus = () => {
    dispatch(actions.updateAddressesStatus(addressesUIProps.ids,status=="1"))
    .then(() => {
        addressesUIProps.queryParams.filter.relationGuid= addressesUIProps.relationGuid;
        dispatch(actions.fetchAddresses(addressesUIProps.queryParams)).then(() => {
            addressesUIProps.setIds([]);
            addressesUIProps.closeUpdateAddressesStatusDialog();
        });
    });
  };

  return (
    <Modal
      show={addressesUIProps.showUpdateAddressesStatusDialog}
      onHide={addressesUIProps.closeUpdateAddressesStatusDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Toplu Durum Değişikliği
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
     <>
          <span>Seçili adreslerin durumunu güncellemek istediğinize emin misiniz?</span>

            <div className="list-timeline list-timeline-skin-light padding-30">
            <div className="list-timeline-items">

            {addresses.map((address) => (
                <div className="list-timeline-item mb-3" key={address.id}>
                <span className="list-timeline-text">
                    <span
                    className={`label label-lg label-light-${address.isActive ? "success" : "info"
                        } label-inline`}
                    style={{ width: "60px" }}
                    >
                    Id: {address.id}
                    </span>{" "}
                    <span className="ml-5">
                    {address.name} - {address.addressLine}
                    </span>
                </span>
                </div>
            ))}
            </div>
            </div>
     </>
 
        )}
        {isLoading && <span>Adresler güncelleniyor..</span>}
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className={`form-control ${status=="1" ? "success" : "info"}`}
            value={status}
            onChange={(e) => setStatus(e.target.value /*=== "0" ? false : true*/)}
          >
            <option value="1">Aktif</option>
            <option value="0">Pasif</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={addressesUIProps.closeUpdateAddressesStatusDialog}
            className="btn btn-light btn-elevate"
          >
              İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
          Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
