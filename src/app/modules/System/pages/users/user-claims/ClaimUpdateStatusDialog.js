/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/claims/claimsActions"
import { useClaimsUIContext } from "./ClaimsUIContext";


export function ClaimUpdateStatusDialog() {
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      id: claimsUIContext.selectedId,
      setIds: claimsUIContext.setIds,
      userId: claimsUIContext.userId,
      claimType: claimsUIContext.claimType,
      queryParams: claimsUIContext.queryParams,
      showUpdateStatusClaimDialog: claimsUIContext.showUpdateStatusClaimDialog,
      closeUpdateStatusClaimDialog: claimsUIContext.closeUpdateStatusClaimDialog,
    };
  }, [claimsUIContext]);

  // Claims Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.claims.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected claims we should close modal
  useEffect(() => {
    if (!claimsUIProps.id) {
      claimsUIProps.closeUpdateStatusClaimDialog();
    }
  }, [claimsUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);


    const updateClaim = () => dispatch(actions.fetchUserClaim(claimsUIProps.id,claimsUIProps.userId,claimsUIProps.claimType)) // server request for updateing claim by ids
    .then((claim) => {
      
      dispatch(actions.updateUserClaimsStatus([parseInt(claimsUIProps.id)],claimsUIProps.userId, claimsUIProps.claimType,!claim.isActive)) // update status this claim
      .then(() =>{
        claimsUIProps.queryParams.filter.userId=claimsUIProps.userId;
        dispatch(actions.fetchClaims(claimsUIProps.queryParams)).then(() => {
        // clear selections list
        claimsUIProps.setIds([]);
        // closing delete modal
        claimsUIProps.closeUpdateStatusClaimDialog();
      }) // refresh dealers
    
    });
  });
  return (
    <Modal
      show={claimsUIProps.showUpdateStatusClaimDialog}
      onHide={claimsUIProps.closeUpdateStatusClaimDialog}
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
          <span>Bu yetkinin durumunu güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={claimsUIProps.closeUpdateStatusClaimDialog}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateClaim}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
