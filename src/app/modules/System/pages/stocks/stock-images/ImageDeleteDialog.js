/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/documents/documentsActions";

import { useImagesUIContext } from "./ImagesUIContext";

export function ImageDeleteDialog() {
  
  const imagesUIContext = useImagesUIContext();
  const imagesUIProps = useMemo(() => {
    return {
      id: imagesUIContext.selectedId,
      setIds: imagesUIContext.setIds,
      stockId: imagesUIContext.stockId,
      showDeleteImageDialog: imagesUIContext.showDeleteImageDialog,
      closeDeleteImageDialog: imagesUIContext.closeDeleteImageDialog,
    };
  }, [imagesUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.documents.listLoading }),
    shallowEqual
  );
  useEffect(() => {
    if (!imagesUIProps.id) {
      imagesUIProps.closeDeleteImageDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteImage = () => {
    dispatch(actions.deleteDocument(imagesUIProps.id)).then(() => {
      dispatch(
        actions.fetchImages(
          imagesUIProps.stockId
        )
      );
      imagesUIProps.setIds([]);
      imagesUIProps.closeDeleteImageDialog();
    });
  };

  return (
    <Modal
      show={imagesUIProps.showDeleteImageDialog}
      onHide={imagesUIProps.closeDeleteImageDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Resmi Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu resmi silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Resim siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={imagesUIProps.closeDeleteImageDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteImage}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
