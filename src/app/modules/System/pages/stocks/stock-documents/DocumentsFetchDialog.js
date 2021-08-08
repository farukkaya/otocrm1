import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useDocumentsUIContext } from "./DocumentsUIContext";
import { DocumentTypes } from "../StocksUIHelper";

const selectedDocuments = (entities, ids) => {
  const _documents = [];
  ids.forEach((id) => {
    const document = entities.find((el) => el.id === id);
    if (document) {
      _documents.push(document);
    }
  });
  return _documents;
};

export function DocumentsFetchDialog() {
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      ids: documentsUIContext.ids,
      queryParams: documentsUIContext.queryParams,
      showFetchDocumentsDialog: documentsUIContext.showFetchDocumentsDialog,
      closeFetchDocumentsDialog: documentsUIContext.closeFetchDocumentsDialog,
    };
  }, [documentsUIContext]);

  const { documents } = useSelector(
    (state) => ({
      documents: selectedDocuments(state.documents.entities, documentsUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!documentsUIProps.ids || documentsUIProps.ids.length === 0) {
      documentsUIProps.closeFetchDocumentsDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentsUIProps.ids]);

  return (
    <Modal
      show={documentsUIProps.showFetchDocumentsDialog}
      onHide={documentsUIProps.closeFetchDocumentsDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Dökümanlar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {documents.map((document) => (
              <div className="list-timeline-item mb-3" key={document.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {document.id}
                  </span>{" "}
                  <span className="ml-5">{document.name}  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={documentsUIProps.closeFetchDocumentsDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={documentsUIProps.closeFetchDocumentsDialog}
            className="btn btn-primary btn-elevate"
          >
            Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
