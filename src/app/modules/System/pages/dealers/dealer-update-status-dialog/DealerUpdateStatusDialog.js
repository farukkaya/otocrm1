/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/dealers/dealersActions"
import { useDealersUIContext } from "../DealersUIContext";


export function DealerUpdateStatusDialog({ id, show, onHide }) {
  // Dealers UI Context
  const dealersUIContext = useDealersUIContext();
  const dealersUIProps = useMemo(() => {
    return {
      queryParams: dealersUIContext.queryParams,
    };
  }, [dealersUIContext]);

  // Dealers Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.dealers.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected dealers we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
  }, [id, dispatch]);


  const updateDealer = () => dispatch(actions.fetchDealer(id)) // server request for updateing user by ids
    .then((dealer) => dispatch(actions.updateDealersStatus([parseInt(id)], !dealer.isActive)) // update status this user
      .then(() => dispatch(actions.fetchDealers(dealersUIProps.queryParams))) // refresh dealers
      .then(() => onHide()) //close modal
    );

  return (
    <Modal
      show={show}
      onHide={onHide}
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
          <span>Bu bayiyi güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateDealer}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
