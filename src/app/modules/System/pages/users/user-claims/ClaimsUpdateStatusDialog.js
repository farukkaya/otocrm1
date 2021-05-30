/* eslint-disable no-restricted-imports */
import React, { useEffect,useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/claims/claimsActions";
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
  
export function ClaimsUpdateStatusDialog() {
    
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      ids: claimsUIContext.ids,
      setIds: claimsUIContext.setIds,
      userId: claimsUIContext.userId,
      claimType: claimsUIContext.claimType,
      queryParams: claimsUIContext.queryParams,
      showUpdateClaimsStatusDialog: claimsUIContext.showUpdateClaimsStatusDialog,
      closeUpdateClaimsStatusDialog: claimsUIContext.closeUpdateClaimsStatusDialog,
    };
  }, [claimsUIContext]);

  const dispatch = useDispatch();
  const { isLoading,claims } = useSelector(
    (state) => ({ 
        claims: selectedClaims(state.claims.entities, claimsUIProps.ids),
        isLoading: state.claims.listLoading
     }),
    shallowEqual
  );

//   useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!claimsUIProps.ids || claimsUIProps.ids.length === 0) {
      claimsUIProps.closeUpdateClaimsStatusDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimsUIProps.ids]);
  const [status, setStatus] = useState("0");
  const updateStatus = () => {
    dispatch(actions.updateUserClaimsStatus(claimsUIProps.ids,claimsUIProps.userId, claimsUIProps.claimType,status=="1"))
    .then(() => {
        claimsUIProps.queryParams.filter.userId= claimsUIProps.userId;
        dispatch(actions.fetchClaims(claimsUIProps.queryParams)).then(() => {
            claimsUIProps.setIds([]);
            claimsUIProps.closeUpdateClaimsStatusDialog();
        });
    });
  };

  return (
    <Modal
      show={claimsUIProps.showUpdateClaimsStatusDialog}
      onHide={claimsUIProps.closeUpdateClaimsStatusDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Toplu Durum Değişikliği
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
     <>
          <span>Seçili yetkilerin durumunu güncellemek istediğinize emin misiniz?</span>

            <div className="list-timeline list-timeline-skin-light padding-30">
            <div className="list-timeline-items">

            {claims.map((claim) => (
                <div className="list-timeline-item mb-3" key={claim.id}>
                <span className="list-timeline-text">
                    <span
                    className={`label label-lg label-light-${claim.isActive ? "success" : "info"
                        } label-inline`}
                    style={{ width: "60px" }}
                    >
                    Id: {claim.id}
                    </span>{" "}
                    <span className="ml-5">
                    {claim.name}
                    </span>
                </span>
                </div>
            ))}
            </div>
            </div>
     </>
 
        )}
        {isLoading && <span>Kullanıcılar güncelleniyor..</span>}
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
            onClick={claimsUIProps.closeUpdateClaimsStatusDialog}
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
