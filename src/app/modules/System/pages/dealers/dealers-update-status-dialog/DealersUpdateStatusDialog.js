import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/dealers/dealersActions";
import { useDealersUIContext } from "../DealersUIContext";

const selectedDealers = (entities, ids) => {
  const _dealers = [];
  ids.forEach((id) => {
    const dealer = entities.find((el) => el.id === id);
    if (dealer) {
      _dealers.push(dealer);
    }
  });
  return _dealers;
};

export function DealersUpdateStatusDialog({ show, onHide }) {
  // Dealers UI Context
  const dealersUIContext = useDealersUIContext();
  const dealersUIProps = useMemo(() => {
    return {
      ids: dealersUIContext.ids,
      setIds: dealersUIContext.setIds,
      queryParams: dealersUIContext.queryParams,
    };
  }, [dealersUIContext]);

  // Dealers Redux state
  const { dealers, listLoading } = useSelector(
    (state) => ({
      dealers: selectedDealers(state.dealers.entities, dealersUIProps.ids),
      listLoading: state.dealers.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected dealers we should close modal
  useEffect(() => {
    if (dealersUIProps.ids || dealersUIProps.ids === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealersUIProps.ids]);

  const [status, setStatus] = useState("0");

  const dispatch = useDispatch();
  const updateStatus = () => dispatch(actions.updateDealersStatus(dealersUIProps.ids, status=="1"))// server request for updateing dealer by ids
    .then(() => dispatch(actions.fetchDealers(dealersUIProps.queryParams))
      .then(() => {
        dealersUIProps.setIds([]);// clear selections list
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
        Seçili bayiler için durum güncellendi
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

            {dealers.map((dealer) => (
              <div className="list-timeline-item mb-3" key={dealer.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${dealer.isActive ? "success" : "info"
                      } label-inline`}
                    style={{ width: "60px" }}
                  >
                    Id: {dealer.id}
                  </span>{" "}
                  <span className="ml-5">
                    {dealer.taxIdentityNo}, {dealer.name}
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
            className={`form-control ${status=="1" ? "success" : "info"}`}
            value={status}
            onChange={(e) => setStatus(e.target.value /*=== "0" ? false : true*/)}
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
