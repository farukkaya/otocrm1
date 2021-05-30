
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useClaimsUIContext } from "./ClaimsUIContext";

const selectedClaims = (entities, ids) => {
  const _claims = [];
  ids.forEach((id) => {
    const claim = entities.find((el) => el.id === id);
    if (claim) {
      _claims.push(claim);
    }
  });
  return _claims;
};

export function ClaimsFetchDialog() {
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      ids: claimsUIContext.ids,
      queryParams: claimsUIContext.queryParams,
      showFetchClaimsDialog: claimsUIContext.showFetchClaimsDialog,
      closeFetchClaimsDialog: claimsUIContext.closeFetchClaimsDialog,
    };
  }, [claimsUIContext]);

  const { claims } = useSelector(
    (state) => ({
      claims: selectedClaims(state.claims.entities, claimsUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!claimsUIProps.ids || claimsUIProps.ids.length === 0) {
      claimsUIProps.closeFetchClaimsDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimsUIProps.ids]);

  return (
    <Modal
      show={claimsUIProps.showFetchClaimsDialog}
      onHide={claimsUIProps.closeFetchClaimsDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Yetkiler
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {claims.map((claim) => (
              <div className="list-timeline-item mb-3" key={claim.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {claim.id}
                  </span>{" "}
                  <span className="ml-5">{claim.name} </span>
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
            onClick={claimsUIProps.closeFetchClaimsDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={claimsUIProps.closeFetchClaimsDialog}
            className="btn btn-primary btn-elevate"
          >
            Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
