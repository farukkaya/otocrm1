/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/documents/documentsActions"
import { useDocumentsUIContext } from "./DocumentsUIContext";


export function DocumentUpdateStatusDialog() {
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      id: documentsUIContext.selectedId,
      setIds: documentsUIContext.setIds,
      stockId: documentsUIContext.stockId,
      queryParams: documentsUIContext.queryParams,
      showUpdateStatusDocumentDialog: documentsUIContext.showUpdateStatusDocumentDialog,
      closeUpdateStatusDocumentDialog: documentsUIContext.closeUpdateStatusDocumentDialog,
    };
  }, [documentsUIContext]);

  // Documents Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.documents.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected documents we should close modal
  useEffect(() => {
    if (!documentsUIProps.id) {
      documentsUIProps.closeUpdateStatusDocumentDialog();
    }
  }, [documentsUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);



    const updateDocument = () => dispatch(actions.fetchDocument(documentsUIProps.id)) // server request for updateing user by ids
    .then((document) => {
      
      dispatch(actions.updateDocumentsStatus([parseInt(documentsUIProps.id)], !document.isActive)) // update status this user
      .then(() =>{
        dispatch(actions.fetchDocumentsByStock(
          documentsUIProps.queryParams,
          documentsUIProps.stockId
        ))
        // clear selections list
        documentsUIProps.setIds([]);
        // closing delete modal
        documentsUIProps.closeUpdateStatusDocumentDialog();
      }) // refresh stocks
    
    });
 
  return (
    <Modal
      show={documentsUIProps.showUpdateStatusDocumentDialog}
      onHide={documentsUIProps.closeUpdateStatusDocumentDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Durum Güncellemesi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bu kaydı güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={documentsUIProps.closeUpdateStatusDocumentDialog}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateDocument}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
