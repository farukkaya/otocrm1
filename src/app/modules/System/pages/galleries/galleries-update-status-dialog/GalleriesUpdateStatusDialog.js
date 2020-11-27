import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/galleries/galeriesActions";
import { useGalleriesUIContext } from "../GalleriesUIContext";

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

export function GalleriesUpdateStatusDialog({ show, onHide }) {
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
  const { galleries, listLoading } = useSelector(
    (state) => ({
      galleries: selectedGalleries(state.galleries.entities, galleriesUIProps.ids),
      listLoading: state.galleries.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected galleries we should close modal
  useEffect(() => {
    if (galleriesUIProps.ids || galleriesUIProps.ids === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.ids]);

  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const updateStatus = () => dispatch(actions.updateGalleriesStatus(galleriesUIProps.ids, status))// server request for updateing gallery by ids
    .then(() => dispatch(actions.fetchGalleries(galleriesUIProps.queryParams))
      .then(() => {
        galleriesUIProps.setIds([]);// clear selections list
        onHide(); // closing delete modal
      }))

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        Seçili kullanıcılar için durum güncellendi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block">
        {listLoading && (
          <div className="overlay-layer bg-transparent">
            <div className="spinner spinner-lg spinner-warning" />
          </div>
        )}
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">

            {galleries.map((gallery) => (
              <div className="list-timeline-item mb-3" key={gallery.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${gallery.isActive ? "success" : "info"
                      } label-inline`}
                    style={{ width: "60px" }}
                  >
                    Id: {gallery.id}
                  </span>{" "}
                  <span className="ml-5">
                    {gallery.taxIdentityNo}, {gallery.name}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className={`form-control ${status ? "success" : "info"}`}
            value={status ? "1" : "0"}
            onChange={(e) => setStatus(e.target.value === "0" ? false : true)}
          >
            <option value="1">Aktif</option>
            <option value="0">Pasif</option>
          </select>
        </div>
        <div className="form-group">
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
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
          Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
