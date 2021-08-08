
/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function DocumentEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Documents Redux state
  const { documentForEdit, actionsLoading } = useSelector(
    (state) => ({
      documentForEdit: state.documents.documentForEdit,
      actionsLoading: state.documents.actionsLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    let _title = id ? "" : "Yeni Stok";
    if (documentForEdit && id) {
      //TODO:Marka ve model ismini başlık olarak göster
      _title = "Döküman Düzenle -"+documentForEdit.name+"-";
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [documentForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
