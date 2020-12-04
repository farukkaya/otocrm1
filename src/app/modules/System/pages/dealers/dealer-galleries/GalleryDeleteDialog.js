/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/galleries/galleriesActions";

import { useGalleriesUIContext } from "./GalleriesUIContext";

export function GalleryDeleteDialog() {
  
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      id: galleriesUIContext.selectedId,
      setIds: galleriesUIContext.setIds,
      dealerId: galleriesUIContext.dealerId,
      queryParams: galleriesUIContext.queryParams,
      showDeleteGalleryDialog: galleriesUIContext.showDeleteGalleryDialog,
      closeDeleteGalleryDialog: galleriesUIContext.closeDeleteGalleryDialog,
    };
  }, [galleriesUIContext]);

  // Galleries Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.galleries.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!galleriesUIProps.id) {
      galleriesUIProps.closeDeleteGalleryDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteGallery = () => {
    // server request for deleting gallery by id
    dispatch(actions.deleteGallery(galleriesUIProps.id)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchGalleries(
          galleriesUIProps.queryParams,
          galleriesUIProps.dealerId
        )
      );
      // clear selections list
      galleriesUIProps.setIds([]);
      // closing delete modal
      galleriesUIProps.closeDeleteGalleryDialog();
    });
  };

  return (
    <Modal
      show={galleriesUIProps.showDeleteGalleryDialog}
      onHide={galleriesUIProps.closeDeleteGalleryDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Galeri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu galeriyi silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Galeri siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={galleriesUIProps.closeDeleteGalleryDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteGallery}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
