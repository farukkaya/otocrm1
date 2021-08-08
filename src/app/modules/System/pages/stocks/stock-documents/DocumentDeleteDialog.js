/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/documents/documentsActions";

import { useDocumentsUIContext } from "./DocumentsUIContext";

export function DocumentDeleteDialog() {
  
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      id: documentsUIContext.selectedId,
      setIds: documentsUIContext.setIds,
      stockId: documentsUIContext.stockId,
      queryParams: documentsUIContext.queryParams,
      showDeleteDocumentDialog: documentsUIContext.showDeleteDocumentDialog,
      closeDeleteDocumentDialog: documentsUIContext.closeDeleteDocumentDialog,
    };
  }, [documentsUIContext]);

  // Documents Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.documents.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!documentsUIProps.id) {
      documentsUIProps.closeDeleteDocumentDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentsUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteDocument = () => {
    // server request for deleting document by id
    dispatch(actions.deleteDocument(documentsUIProps.id)).then(() => {
      // refresh list after deletion
      dispatch(
        actions.fetchDocumentsByStock(
          documentsUIProps.queryParams,
          documentsUIProps.stockId
        )
      );
      // clear selections list
      documentsUIProps.setIds([]);
      // closing delete modal
      documentsUIProps.closeDeleteDocumentDialog();
    });
  };

  return (
    <Modal
      show={documentsUIProps.showDeleteDocumentDialog}
      onHide={documentsUIProps.closeDeleteDocumentDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Dokümanı Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu kaydı silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Döküman siliniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={documentsUIProps.closeDeleteDocumentDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteDocument}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
