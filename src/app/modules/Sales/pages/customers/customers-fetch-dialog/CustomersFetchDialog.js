import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useCustomersUIContext } from "../CustomersUIContext";

const selectedCustomers = (entities, ids) => {
  const _customers = [];
  ids.forEach((id) => {
    const customer = entities.find((el) => el.id === id);
    if (customer) {
      _customers.push(customer);
    }
  });
  return _customers;
};

export function CustomersFetchDialog({ show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
    };
  }, [customersUIContext]);

  // Customers Redux state
  const { customers } = useSelector(
    (state) => ({
      customers: selectedCustomers(
        state.customers.entities,
        customersUIProps.ids
      ),
    }),
    shallowEqual
  );

  // if customers weren't selected we should close modal
  useEffect(() => {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Seçilen Müşteriler
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table table-head-custom table-vertical-center overflow-hidden">
          <thead>
            <tr>
              <th>Id</th>
              <th>Kimlik/VergiNo</th>
              <th>Müşteri</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={`id${customer.id}`}>
                <td>{customer.id}</td>
                <td>
                {customer.identityNo}
                </td>
                <td>
                {customer.lastName} {customer.firstName}  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Kapat
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
