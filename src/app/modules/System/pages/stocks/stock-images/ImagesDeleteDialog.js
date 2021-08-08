/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/documents/documentsActions";
import { useImagesUIContext } from "./ImagesUIContext";

export function ImagesDeleteDialog() {
  // Images UI Context
  const imagesUIContext = useImagesUIContext();
  const imagesUIProps = useMemo(() => {
    return {
      ids: imagesUIContext.ids,
      setIds: imagesUIContext.setIds,
      stockId: imagesUIContext.stockId,
      showDeleteImagesDialog: imagesUIContext.showDeleteImagesDialog,
      closeDeleteImagesDialog: imagesUIContext.closeDeleteImagesDialog,
    };
  }, [imagesUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.documents.listLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!imagesUIProps.ids || imagesUIProps.ids.length === 0) {
      imagesUIProps.closeDeleteImagesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesUIProps.ids]);

  const deleteImages = () => {
    dispatch(actions.deleteDocuments(imagesUIProps.ids)).then(() => {
      dispatch(
        actions.fetchImages(
          imagesUIProps.stockId
        )
      ).then(() => {
        imagesUIProps.setIds([]);
        imagesUIProps.closeDeleteImagesDialog();
      });
    });
  };

  return (
    <Modal
      show={imagesUIProps.showDeleteImagesDialog}
      onHide={imagesUIProps.closeDeleteImagesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Resimleri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili resimleri silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Resimler siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={imagesUIProps.closeDeleteImagesDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteImages}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
