import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/claims/claimsActions";

import { useClaimsUIContext } from "./ClaimsUIContext";

export function ClaimDeleteDialog() {
  
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      id: claimsUIContext.selectedId,
      setIds: claimsUIContext.setIds,
      userId: claimsUIContext.userId,
      claimType: claimsUIContext.claimType,
      queryParams: claimsUIContext.queryParams,
      showDeleteClaimDialog: claimsUIContext.showDeleteClaimDialog,
      closeDeleteClaimDialog: claimsUIContext.closeDeleteClaimDialog,
    };
  }, [claimsUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.claims.actionsLoading }),
    shallowEqual
  );

  useEffect(() => {
    if (!claimsUIProps.id) {
      claimsUIProps.closeDeleteClaimDialog();
    }
  }, [claimsUIProps.id]);

  useEffect(() => {}, [isLoading, dispatch]);
  const deleteClaim = () => {
    dispatch(actions.deleteUserClaims([claimsUIProps.id],claimsUIProps.userId, claimsUIProps.claimType)).then(() => {
      claimsUIProps.queryParams.filter.userId=claimsUIProps.userId
      dispatch(actions.fetchClaims(claimsUIProps.queryParams));
      claimsUIProps.setIds([]);
      claimsUIProps.closeDeleteClaimDialog();
    });
  };

  return (
    <Modal
      show={claimsUIProps.showDeleteClaimDialog}
      onHide={claimsUIProps.closeDeleteClaimDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Yetki Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu yetkiyi silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Yetki siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={claimsUIProps.closeDeleteClaimDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteClaim}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
