/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/documents/documentsActions";
import { useDocumentsUIContext } from "./DocumentsUIContext";

export function DocumentsDeleteDialog() {
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      ids: documentsUIContext.ids,
      setIds: documentsUIContext.setIds,
      stockId: documentsUIContext.stockId,
      queryParams: documentsUIContext.queryParams,
      showDeleteDocumentsDialog: documentsUIContext.showDeleteDocumentsDialog,
      closeDeleteDocumentsDialog: documentsUIContext.closeDeleteDocumentsDialog,
    };
  }, [documentsUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.documents.actionsLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!documentsUIProps.ids || documentsUIProps.ids.length === 0) {
      documentsUIProps.closeDeleteDocumentsDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentsUIProps.ids]);

  const deleteDocuments = () => {
    dispatch(actions.deleteDocuments(documentsUIProps.ids)).then(() => {
      dispatch(
        actions.fetchDocumentsByStock(
          documentsUIProps.queryParams,
          documentsUIProps.stockId
        )
      ).then(() => {
        documentsUIProps.setIds([]);
        documentsUIProps.closeDeleteDocumentsDialog();
      });
    });
  };

  return (
    <Modal
      show={documentsUIProps.showDeleteDocumentsDialog}
      onHide={documentsUIProps.closeDeleteDocumentsDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Dökümanları Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili kayıtları silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Dökümanlar siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={documentsUIProps.closeDeleteDocumentsDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteDocuments}
            className="btn btn-primary btn-elevate"
          >
            Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
