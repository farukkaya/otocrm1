import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/users/usersActions";
import { useUsersUIContext } from "../UsersUIContext";

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

export function UsersUpdateStatusDialog({ show, onHide }) {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      queryParams: usersUIContext.queryParams,
    };
  }, [usersUIContext]);

  // Users Redux state
  const { users, listLoading } = useSelector(
    (state) => ({
      users: selectedUsers(state.users.entities, usersUIProps.ids),
      listLoading: state.users.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected users we should close modal
  useEffect(() => {
    if (usersUIProps.ids || usersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.ids]);

  const [status, setStatus] = useState("0");

  const dispatch = useDispatch();
  const updateStatus = () => dispatch(actions.updateUsersStatus(usersUIProps.ids, status=="1"))// server request for updateing user by ids
    .then(() => dispatch(actions.fetchUsers(usersUIProps.queryParams))
      .then(() => {
        usersUIProps.setIds([]);// clear selections list
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
        Seçili Kullanıcılar için durum güncellendi
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
