/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/claims/claimsActions";
import { useClaimsUIContext } from "./ClaimsUIContext";

export function ClaimsDeleteDialog() {
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      ids: claimsUIContext.ids,
      setIds: claimsUIContext.setIds,
      userId: claimsUIContext.userId,
      claimType: claimsUIContext.claimType,
      queryParams: claimsUIContext.queryParams,
      showDeleteClaimsDialog: claimsUIContext.showDeleteClaimsDialog,
      closeDeleteClaimsDialog: claimsUIContext.closeDeleteClaimsDialog,
    };
  }, [claimsUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.claims.listLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!claimsUIProps.ids || claimsUIProps.ids.length === 0) {
      claimsUIProps.closeDeleteClaimsDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimsUIProps.ids]);

  const deleteClaims = () => {
    dispatch(actions.deleteUserClaims(claimsUIProps.ids,claimsUIProps.userId, claimsUIProps.claimType)).then(() => {
        claimsUIProps.queryParams.filter.userId=claimsUIProps.userId;
      dispatch(actions.fetchClaims(claimsUIProps.queryParams)).then(() => {
        claimsUIProps.setIds([]);
        claimsUIProps.closeDeleteClaimsDialog();
      });
    });
  };

  return (
    <Modal
      show={claimsUIProps.showDeleteClaimsDialog}
      onHide={claimsUIProps.closeDeleteClaimsDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Yetkileri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili yetkileri silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Yetkiler siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={claimsUIProps.closeDeleteClaimsDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteClaims}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
