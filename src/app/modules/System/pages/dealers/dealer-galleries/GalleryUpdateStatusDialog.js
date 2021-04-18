/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/dealers/dealersActions"
import { useGalleriesUIContext } from "./GalleriesUIContext";


export function GalleryUpdateStatusDialog() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      id: galleriesUIContext.selectedId,
      setIds: galleriesUIContext.setIds,
      parentId: galleriesUIContext.parentId,
      queryParams: galleriesUIContext.queryParams,
      showUpdateStatusGalleryDialog: galleriesUIContext.showUpdateStatusGalleryDialog,
      closeUpdateStatusGalleryDialog: galleriesUIContext.closeUpdateStatusGalleryDialog,
    };
  }, [galleriesUIContext]);

  // Galleries Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.dealers.galleriesOfDealer.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected galleries we should close modal
  useEffect(() => {
    if (!galleriesUIProps.id) {
      galleriesUIProps.closeUpdateStatusGalleryDialog();
    }
  }, [galleriesUIProps.id]);
  

    // looking for loading/dispatch
    useEffect(() => {}, [isLoading, dispatch]);



    const updateGallery = () => dispatch(actions.fetchGallery(galleriesUIProps.id)) // server request for updateing user by ids
    .then((gallery) => {
      
      dispatch(actions.updateGalleriesStatus([parseInt(galleriesUIProps.id)], !gallery.isActive)) // update status this user
      .then(() =>{
        dispatch(actions.fetchGalleriesByParent(
          galleriesUIProps.queryParams,
          galleriesUIProps.parentId
        ))
        // clear selections list
        galleriesUIProps.setIds([]);
        // closing delete modal
        galleriesUIProps.closeUpdateStatusGalleryDialog();
      }) // refresh dealers
    
    });
 
  return (
    <Modal
      show={galleriesUIProps.showUpdateStatusGalleryDialog}
      onHide={galleriesUIProps.closeUpdateStatusGalleryDialog}
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
          <span>Bu galeriyi güncellemek istediğinize emin misiniz ?</span>
        )}
        {isLoading && <span>Güncelleniyor...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={galleriesUIProps.closeUpdateStatusGalleryDialog}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateGallery}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
