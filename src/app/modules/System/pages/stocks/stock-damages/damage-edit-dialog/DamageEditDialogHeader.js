
/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function DamageEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Damages Redux state
  const { damageForEdit, actionsLoading } = useSelector(
    (state) => ({
      damageForEdit: state.damages.damageForEdit,
      actionsLoading: state.damages.actionsLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    let _title = id ? "" : "Yeni Stok";
    if (damageForEdit && id) {
      //TODO:Marka ve model ismini başlık olarak göster
      _title = "Hasar Kaydı Düzenle -"+damageForEdit.id+"-";
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [damageForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
