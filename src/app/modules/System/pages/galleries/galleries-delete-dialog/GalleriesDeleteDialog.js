/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/galleries/galleriesActions";
import { useGalleriesUIContext } from "../GalleriesUIContext";

export function GalleriesDeleteDialog({ show, onHide }) {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      setIds: galleriesUIContext.setIds,
      queryParams: galleriesUIContext.queryParams,
    };
  }, [galleriesUIContext]);

  // Galleries Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.galleries.actionsLoading }),
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => { }, [isLoading, dispatch]);

  // if there weren't selected galleries we should close modal
  useEffect(() => {
    if (!galleriesUIProps.ids || galleriesUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.ids]);

  const deleteGalleries = () => dispatch(actions.deleteGalleries(galleriesUIProps.ids)) // server request for deleting user by seleted ids
    .then(() => dispatch(actions.fetchGalleries(galleriesUIProps.queryParams)).then(() => {
      galleriesUIProps.setIds([]);
      onHide();// closing delete modal
    }))
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Galerileri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili galerileri silmek istediğinize emin misiniz?</span>
        )}
        {isLoading && <span>Galeriler Siliniyor</span>}
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
            onClick={deleteGalleries}
            className="btn btn-primary btn-elevate"
          >
           Sil
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
