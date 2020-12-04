/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function GalleryEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Galleries Redux state
  const { galleryForEdit, actionsLoading } = useSelector(
    (state) => ({
      galleryForEdit: state.galleries.galleryForEdit,
      actionsLoading: state.galleries.actionsLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    let _title = id ? "" : "Yeni Galeri";
    if (galleryForEdit && id) {
      _title = "Galeri Düzenle -"+galleryForEdit.name+"-";
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [galleryForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
