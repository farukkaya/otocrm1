import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useGalleriesUIContext } from "./GalleriesUIContext";

const selectedGalleries = (entities, ids) => {
  const _galleries = [];
  ids.forEach((id) => {
    const gallery = entities.find((el) => el.id === id);
    if (gallery) {
      _galleries.push(gallery);
    }
  });
  return _galleries;
};

export function GalleriesFetchDialog() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      queryParams: galleriesUIContext.queryParams,
      showFetchGalleriesDialog: galleriesUIContext.showFetchGalleriesDialog,
      closeFetchGalleriesDialog: galleriesUIContext.closeFetchGalleriesDialog,
    };
  }, [galleriesUIContext]);

  const { galleries } = useSelector(
    (state) => ({
      galleries: selectedGalleries(state.dealers.galleriesOfDealer.entities, galleriesUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!galleriesUIProps.ids || galleriesUIProps.ids.length === 0) {
      galleriesUIProps.closeFetchGalleriesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.ids]);

  return (
    <Modal
      show={galleriesUIProps.showFetchGalleriesDialog}
      onHide={galleriesUIProps.closeFetchGalleriesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Galeriler
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {galleries.map((gallery) => (
              <div className="list-timeline-item mb-3" key={gallery.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {gallery.id}
                  </span>{" "}
                  <span className="ml-5">{gallery.name} </span>
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
            onClick={galleriesUIProps.closeFetchGalleriesDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={galleriesUIProps.closeFetchGalleriesDialog}
            className="btn btn-primary btn-elevate"
          >
            Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
