/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/damages/damagesActions";

import { useDamagesUIContext } from "./DamagesUIContext";

export function DamageDeleteDialog() {
  
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      id: damagesUIContext.selectedId,
      setIds: damagesUIContext.setIds,
      stockId: damagesUIContext.stockId,
      queryParams: damagesUIContext.queryParams,
      showDeleteDamageDialog: damagesUIContext.showDeleteDamageDialog,
      closeDeleteDamageDialog: damagesUIContext.closeDeleteDamageDialog,
    };
  }, [damagesUIContext]);

  // Damages Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.damages.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!damagesUIProps.id) {
      damagesUIProps.closeDeleteDamageDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [damagesUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteDamage = () => {
    // server request for deleting damage by id
    dispatch(actions.deleteDamage(damagesUIProps.id)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchDamagesByStock(
          damagesUIProps.queryParams,
          damagesUIProps.stockId
        )
      );
      // clear selections list
      damagesUIProps.setIds([]);
      // closing delete modal
      damagesUIProps.closeDeleteDamageDialog();
    });
  };

  return (
    <Modal
      show={damagesUIProps.showDeleteDamageDialog}
      onHide={damagesUIProps.closeDeleteDamageDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Hasar Kaydı Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu kaydı silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Hasar Kaydı siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={damagesUIProps.closeDeleteDamageDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteDamage}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
