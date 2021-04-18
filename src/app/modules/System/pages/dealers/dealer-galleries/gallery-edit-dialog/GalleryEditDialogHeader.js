/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function GalleryEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Galleries Redux state
  const { actionsLoading, galleryForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.dealers.galleriesOfDealer.actionsLoading,
      galleryForEdit: state.dealers.galleriesOfDealer.dealerForEdit,
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
