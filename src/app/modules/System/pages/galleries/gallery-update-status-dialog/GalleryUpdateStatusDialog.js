/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/galleries/galleriesActions"
import { useGalleriesUIContext } from "../GalleriesUIContext";


export function GalleryUpdateStatusDialog({ id, show, onHide }) {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      queryParams: galleriesUIContext.queryParams,
    };
  }, [galleriesUIContext]);

  // Galleries Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.galleries.actionsLoading
    }),
    shallowEqual
  );
  // if there weren't selected galleries we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
  }, [id, dispatch]);


  const updateGallery = () => dispatch(actions.fetchGallery(id)) // server request for updateing user by ids
    .then((user) => dispatch(actions.updateGalleriesStatus([parseInt(id)], !user.isActive)) // update status this user
      .then(() => dispatch(actions.fetchGalleries(galleriesUIProps.queryParams))) // refresh galleries
      .then(() => onHide()) //close modal
    );

  return (
    <Modal
      show={show}
      onHide={onHide}
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
            onClick={onHide}
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
