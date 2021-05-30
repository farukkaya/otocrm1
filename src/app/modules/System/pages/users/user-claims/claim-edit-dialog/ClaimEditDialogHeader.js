/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function ClaimEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Claims Redux state
  const { claimForEdit, actionsLoading } = useSelector(
    (state) => ({
      claimForEdit: state.claims.claimForEdit,
      actionsLoading: state.claims.actionsLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    setTitle("Yetkileri Düzenle");
    // eslint-disable-next-line
  }, [claimForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
