import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
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

export function UsersFetchDialog() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      queryParams: usersUIContext.queryParams,
      showFetchUsersDialog: usersUIContext.showFetchUsersDialog,
      closeFetchUsersDialog: usersUIContext.closeFetchUsersDialog,
    };
  }, [usersUIContext]);

  const { users } = useSelector(
    (state) => ({
      users: selectedUsers(state.users.entities, usersUIProps.ids),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!usersUIProps.ids || usersUIProps.ids.length === 0) {
      usersUIProps.closeFetchUsersDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.ids]);

  return (
    <Modal
      show={usersUIProps.showFetchUsersDialog}
      onHide={usersUIProps.closeFetchUsersDialog}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
         Seçili Kullanıcılar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {users.map((user) => (
              <div className="list-timeline-item mb-3" key={user.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    Id: {user.id}
                  </span>{" "}
                  <span className="ml-5">{user.fullName} </span>
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
            onClick={usersUIProps.closeFetchUsersDialog}
            className="btn btn-light btn-elevate"
          >
            İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={usersUIProps.closeFetchUsersDialog}
            className="btn btn-primary btn-elevate"
          >
            Tamam
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
