/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/dealers/dealersActions"
import { useDealersUIContext } from "../DealersUIContext";


export function DealerDeleteDialog({ id, show, onHide }) {
  // Dealers UI Context
  const galleriesUIContext = useDealersUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      //setIds: galleriesUIContext.setIds,
      queryParams: galleriesUIContext.queryParams,
    };
  }, [galleriesUIContext]);

  // Dealers Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.dealers.galleriesOfDealer.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => { }, [isLoading, dispatch]);

  const deleteDealer = () => {
    
    dispatch(actions.deleteDealer(id)) // server request for deleting user by id
    .then(() => dispatch(actions.fetchDealers(galleriesUIProps.queryParams)))// refresh list after deletion
    .then(() => onHide());// closing delete modal
  }


  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Bayi Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu bayiyi kalıcı olarak silmek istediğinizden emin misiniz?</span>
        )}
        {isLoading && <span>Bayi siliniyor ...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
           Vazgeç
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteDealer}
            className="btn btn-delete btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
