/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/damages/damagesActions"
import { useDamagesUIContext } from "./DamagesUIContext";


export function DamageUpdateStatusDialog() {
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      id: damagesUIContext.selectedId,
      setIds: damagesUIContext.setIds,
      stockId: damagesUIContext.stockId,
      queryParams: damagesUIContext.queryParams,
      showUpdateStatusDamageDialog: damagesUIContext.showUpdateStatusDamageDialog,
      closeUpdateStatusDamageDialog: damagesUIContext.closeUpdateStatusDamageDialog,
    };
  }, [damagesUIContext]);

  // Damages Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.damages.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected damages we should close modal
  useEffect(() => {
    if (!damagesUIProps.id) {
      damagesUIProps.closeUpdateStatusDamageDialog();
    }
  }, [damagesUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);



    const updateDamage = () => dispatch(actions.fetchDamage(damagesUIProps.id)) // server request for updateing user by ids
    .then((damage) => {
      
      dispatch(actions.updateDamagesStatus([parseInt(damagesUIProps.id)], !damage.isActive)) // update status this user
      .then(() =>{
        dispatch(actions.fetchDamagesByStock(
          damagesUIProps.queryParams,
          damagesUIProps.stockId
        ))
        // clear selections list
        damagesUIProps.setIds([]);
        // closing delete modal
        damagesUIProps.closeUpdateStatusDamageDialog();
      }) // refresh stocks
    
    });
 
  return (
    <Modal
      show={damagesUIProps.showUpdateStatusDamageDialog}
      onHide={damagesUIProps.closeUpdateStatusDamageDialog}
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
          <span>Bu kaydı güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={damagesUIProps.closeUpdateStatusDamageDialog}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateDamage}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
