import React, { useState,useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/documents/documentsActions";
import { DocumentEditDialogHeader } from "./DocumentEditDialogHeader";
import { DocumentEditForm } from "./DocumentEditForm";
import { useDocumentsUIContext } from "../DocumentsUIContext";

export function DocumentEditDialog() {
  const [attachment, setAttachment] = useState({})
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      id: documentsUIContext.selectedId,
      setIds: documentsUIContext.setIds,
      stockId: documentsUIContext.stockId,
      queryParams: documentsUIContext.queryParams,
      showEditDocumentDialog: documentsUIContext.showEditDocumentDialog,
      closeEditDocumentDialog: documentsUIContext.closeEditDocumentDialog,
      initDocument: documentsUIContext.initDocument,
    };
  }, [documentsUIContext]);

  // Document Redux state
  const dispatch = useDispatch();
  const { actionsLoading, documentForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.documents.actionsLoading,
      documentForEdit: state.documents.documentForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting document by seleted id
    dispatch(actions.fetchDocument(documentsUIProps.id));
  }, [documentsUIProps.id, dispatch]);

  const saveDocument = (document) => {
    
    const formData = new FormData();
      formData.append(documentsUIProps.stockId, attachment);
      formData.append("stockId", document.id);
      formData.append("name", document.name);
      formData.append("validityDate", document.validityDate);
      formData.append("description", document.description);
      formData.append("documentTypeId", 1);
      formData.append("relationGuid", documentsUIProps.stockId);
      dispatch(actions.createFile(formData)).then(() => {
        dispatch(
          actions.fetchDocumentsByStock(
            documentsUIProps.queryParams,
            documentsUIProps.stockId
          )
        ).then(() => {
          documentsUIProps.setIds([]);
          documentsUIProps.closeEditDocumentDialog();
        });
      });
  };

  return (
    <Modal
      show={documentsUIProps.showEditDocumentDialog}
      onHide={documentsUIProps.closeEditDocumentDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      <DocumentEditDialogHeader id={documentsUIProps.id} />
      <DocumentEditForm
        saveDocument={saveDocument}
        attachment={attachment}
        setAttachment={setAttachment}
        actionsLoading={actionsLoading}
        document={documentForEdit || documentsUIProps.initDocument}
        onHide={documentsUIProps.closeEditDocumentDialog}
      />
    </Modal>
  );
}
