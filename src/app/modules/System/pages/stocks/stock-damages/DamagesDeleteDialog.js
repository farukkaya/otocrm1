/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/damages/damagesActions";
import { useDamagesUIContext } from "./DamagesUIContext";

export function DamagesDeleteDialog() {
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      ids: damagesUIContext.ids,
      setIds: damagesUIContext.setIds,
      stockId: damagesUIContext.stockId,
      queryParams: damagesUIContext.queryParams,
      showDeleteDamagesDialog: damagesUIContext.showDeleteDamagesDialog,
      closeDeleteDamagesDialog: damagesUIContext.closeDeleteDamagesDialog,
    };
  }, [damagesUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.damages.actionsLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!damagesUIProps.ids || damagesUIProps.ids.length === 0) {
      damagesUIProps.closeDeleteDamagesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [damagesUIProps.ids]);

  const deleteDamages = () => {
    dispatch(actions.deleteDamages(damagesUIProps.ids)).then(() => {
      dispatch(
        actions.fetchDamagesByStock(
          damagesUIProps.queryParams,
          damagesUIProps.stockId
        )
      ).then(() => {
        damagesUIProps.setIds([]);
        damagesUIProps.closeDeleteDamagesDialog();
      });
    });
  };

  return (
    <Modal
      show={damagesUIProps.showDeleteDamagesDialog}
      onHide={damagesUIProps.closeDeleteDamagesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Hasar Kayıtlarını Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili kayıtları silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Hasar Kayıtları siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={damagesUIProps.closeDeleteDamagesDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteDamages}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
