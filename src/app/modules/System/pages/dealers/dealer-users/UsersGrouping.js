import React, { useMemo } from "react";
import { useUsersUIContext } from "./UsersUIContext";

export function UsersGrouping() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      openDeleteUsersDialog: usersUIContext.openDeleteUsersDialog,
      openFetchUsersDialog: usersUIContext.openFetchUsersDialog,
      openUpdateUsersStatusDialog: usersUIContext.openUpdateUsersStatusDialog
    };
  }, [usersUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-group-inline">
            <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={usersUIProps.openDeleteUsersDialog}
              >
                <i className="fa fa-trash"></i> Sil ({usersUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={usersUIProps.openFetchUsersDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler ({usersUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={usersUIProps.openUpdateUsersStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Durum Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
