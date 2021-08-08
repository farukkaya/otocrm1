/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo ,useState} from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DashboardUpload, ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/documents/documentsActions";
import { v4 as generateGuid } from 'uuid';
import { useImagesUIContext } from "./ImagesUIContext";

export function ImageAddDialog() {
  var transactionId=generateGuid();
  const imagesUIContext = useImagesUIContext();
  const imagesUIProps = useMemo(() => {
    return {
      id: imagesUIContext.selectedId,
      setIds: imagesUIContext.setIds,
      stockId: imagesUIContext.stockId,
      showAddImagesDialog: imagesUIContext.showAddImagesDialog,
      closeAddImagesDialog: imagesUIContext.closeAddImagesDialog,
    };
  }, [imagesUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.documents.listLoading }),
    shallowEqual
  );
  useEffect(() => {
    if (!imagesUIProps.id) {
      imagesUIProps.closeAddImagesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesUIProps.id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const addImage = () => {
    dispatch(
      actions.fetchImages(
        imagesUIProps.stockId
      )
    );
    imagesUIProps.setIds([]);
    imagesUIProps.closeAddImagesDialog();
  };
  const [images, setImages] = useState([])
  return (
    <Modal
      show={imagesUIProps.showAddImagesDialog}
      onHide={imagesUIProps.closeAddImagesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Resim Ekle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <DashboardUpload images={images} setImages={setImages} transactionId={transactionId} stockId={imagesUIProps.stockId} />


      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={addImage}
            className="btn btn-primary btn-elevate"
          >
            Bitti
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
