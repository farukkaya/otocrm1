/* eslint-disable no-restricted-imports */
import React, { useEffect,useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/users/usersActions";
import { useUsersUIContext } from "./UsersUIContext";
const selectedUsers = (entities, ids) => {
    const _users = [];
    ids.forEach((id) => {
      const user = entities.find((el) => el.id === id);
      if (user) {
        _users.push(user);
      }
    });
    return _users;
  };
  
export function UsersUpdateStatusDialog() {
    
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      dealerId: usersUIContext.dealerId,
      queryParams: usersUIContext.queryParams,
      showUpdateUsersStatusDialog: usersUIContext.showUpdateUsersStatusDialog,
      closeUpdateUsersStatusDialog: usersUIContext.closeUpdateUsersStatusDialog,
    };
  }, [usersUIContext]);

  const dispatch = useDispatch();
  const { isLoading,users } = useSelector(
    (state) => ({ 
        users: selectedUsers(state.users.entities, usersUIProps.ids),
        isLoading: state.users.listLoading
     }),
    shallowEqual
  );

//   useEffect(() => {}, [isLoading, dispatch]);
  useEffect(() => {
    if (!usersUIProps.ids || usersUIProps.ids.length === 0) {
      usersUIProps.closeUpdateUsersStatusDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.ids]);
  const [status, setStatus] = useState("0");
  const updateStatus = () => {
    dispatch(actions.updateUsersStatus(usersUIProps.ids,status=="1"))
    .then(() => {
        usersUIProps.queryParams.filter.dealerId= usersUIProps.dealerId;
        dispatch(actions.fetchUsers(usersUIProps.queryParams)).then(() => {
            usersUIProps.setIds([]);
            usersUIProps.closeUpdateUsersStatusDialog();
        });
    });
  };

  return (
    <Modal
      show={usersUIProps.showUpdateUsersStatusDialog}
      onHide={usersUIProps.closeUpdateUsersStatusDialog}
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
          <span>Seçili kullanıcıların durumunu güncellemek istediğinize emin misiniz?</span>

            <div className="list-timeline list-timeline-skin-light padding-30">
            <div className="list-timeline-items">

            {users.map((user) => (
                <div className="list-timeline-item mb-3" key={user.id}>
                <span className="list-timeline-text">
                    <span
                    className={`label label-lg label-light-${user.isActive ? "success" : "info"
                        } label-inline`}
                    style={{ width: "60px" }}
                    >
                    Id: {user.id}
                    </span>{" "}
                    <span className="ml-5">
                    {user.firstname}, {user.lastname}
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
            onClick={usersUIProps.closeUpdateUsersStatusDialog}
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
