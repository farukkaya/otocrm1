import React, { useMemo } from "react";
import { useDocumentsUIContext } from "./DocumentsUIContext";

export function DocumentsGrouping() {
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      ids: documentsUIContext.ids,
      openDeleteDocumentsDialog: documentsUIContext.openDeleteDocumentsDialog,
      openFetchDocumentsDialog: documentsUIContext.openFetchDocumentsDialog,
    };
  }, [documentsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            
            <div className="form-group-inline">
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={documentsUIProps.openDeleteDocumentsDialog}
              >
                <i className="fa fa-trash"></i> Sil  ({documentsUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={documentsUIProps.openFetchDocumentsDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler ({documentsUIProps.ids.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
