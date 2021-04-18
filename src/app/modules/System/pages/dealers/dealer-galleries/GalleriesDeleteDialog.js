/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/dealers/dealersActions";
import { useGalleriesUIContext } from "./GalleriesUIContext";

export function GalleriesDeleteDialog() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      setIds: galleriesUIContext.setIds,
      dealerId: galleriesUIContext.dealerId,
      queryParams: galleriesUIContext.queryParams,
      showDeleteGalleriesDialog: galleriesUIContext.showDeleteGalleriesDialog,
      closeDeleteGalleriesDialog: galleriesUIContext.closeDeleteGalleriesDialog,
    };
  }, [galleriesUIContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.dealers.galleriesOfDealer.listLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!galleriesUIProps.ids || galleriesUIProps.ids.length === 0) {
      galleriesUIProps.closeDeleteGalleriesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.ids]);

  const deleteGalleries = () => {
    dispatch(actions.deleteDealers(galleriesUIProps.ids)).then(() => {
      dispatch(
        actions.fetchGalleriesByParent(
          galleriesUIProps.queryParams,
          galleriesUIProps.parentId
        )
      ).then(() => {
        galleriesUIProps.setIds([]);
        galleriesUIProps.closeDeleteGalleriesDialog();
      });
    });
  };

  return (
    <Modal
      show={galleriesUIProps.showDeleteGalleriesDialog}
      onHide={galleriesUIProps.closeDeleteGalleriesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Galerileri Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Seçili galerileri silmeye emin misiniz?</span>
        )}
        {isLoading && <span>Galeriler siliniyor..</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={galleriesUIProps.closeDeleteGalleriesDialog}
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
