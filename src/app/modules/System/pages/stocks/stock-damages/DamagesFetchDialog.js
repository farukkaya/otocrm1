import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useDamagesUIContext } from "./DamagesUIContext";
import { DamageTypes } from "../../stocks/StocksUIHelper";

const selectedDamages = (entities, ids) => {
  const _damages = [];
  ids.forEach((id) => {
    const damage = entities.find((el) => el.id === id);
    if (damage) {
      _damages.push(damage);
    }
  });
  return _damages;
};

export function DamagesFetchDialog() {
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      ids: damagesUIContext.ids,
      queryParams: damagesUIContext.queryParams,
      showFetchDamagesDialog: damagesUIContext.showFetchDamagesDialog,
      closeFetchDamagesDialog: damagesUIContext.closeFetchDamagesDialog,
    };
  }, [damagesUIContext]);

  const { damages } = useSelector(
    (state) => ({
      damages: selectedDamages(state.damages.entities, damagesUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!damagesUIProps.ids || damagesUIProps.ids.length === 0) {
      damagesUIProps.closeFetchDamagesDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [damagesUIProps.ids]);

  return (
    <Modal
      show={damagesUIProps.showFetchDamagesDialog}
      onHide={damagesUIProps.closeFetchDamagesDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Hasarlar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {damages.map((damage) => (
              <div className="list-timeline-item mb-3" key={damage.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {damage.id}
                  </span>{" "}
                  <span className="ml-5">{DamageTypes.find(q=>q.id==damage.damageTypeId).name}  </span>
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
            onClick={damagesUIProps.closeFetchDamagesDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={damagesUIProps.closeFetchDamagesDialog}
            className="btn btn-primary btn-elevate"
          >
            Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
