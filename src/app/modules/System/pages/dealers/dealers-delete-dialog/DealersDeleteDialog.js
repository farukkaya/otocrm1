/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/dealers/dealersActions";
import { useDealersUIContext } from "../DealersUIContext";

export function DealersDeleteDialog({ show, onHide }) {
  // Dealers UI Context
  const dealersUIContext = useDealersUIContext();
  const dealersUIProps = useMemo(() => {
    return {
      ids: dealersUIContext.ids,
      setIds: dealersUIContext.setIds,
      queryParams: dealersUIContext.queryParams,
    };
  }, [dealersUIContext]);

  // Dealers Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.dealers.actionsLoading }),
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => { }, [isLoading, dispatch]);

  // if there weren't selected dealers we should close modal
  useEffect(() => {
    if (!dealersUIProps.ids || dealersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealersUIProps.ids]);

  const deleteDealers = () => dispatch(actions.deleteDealers(dealersUIProps.ids)) // server request for deleting user by seleted ids
    .then(() => dispatch(actions.fetchDealers(dealersUIProps.queryParams)).then(() => {
      dealersUIProps.setIds([]);
      onHide();// closing delete modal
    }))
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Bayileri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili bayileri silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Baiyler Siliniyor</span>}
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
            onClick={deleteDealers}
            className="btn btn-primary btn-elevate"
          >
           Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
