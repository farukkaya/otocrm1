import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
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

export function DealersFetchDialog({ show, onHide }) {
  

  // Dealers UI Context
  const dealersUIContext = useDealersUIContext();
  const dealersUIProps = useMemo(() => {
    return {
      ids: dealersUIContext.ids,
      queryParams: dealersUIContext.queryParams,
    };
  }, [dealersUIContext]);

  // Dealers Redux state
  const { dealers } = useSelector(
    (state) => ({
      dealers: selectedDealers(state.dealers.entities, dealersUIProps.ids),
    }),
    shallowEqual
  );

  // if there weren't selected ids we should close modal
  useEffect(() => {
    if (!dealersUIProps.ids || dealersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealersUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Olan Galeriler
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {dealers.map((dealer) => (
              <div className="list-timeline-item mb-3" key={dealer.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      dealer.isActive?"success":"info"
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
      <Modal.Footer>
        <div>
         
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
               Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
