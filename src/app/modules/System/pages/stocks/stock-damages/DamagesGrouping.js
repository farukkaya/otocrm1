import React, { useMemo } from "react";
import { useDamagesUIContext } from "./DamagesUIContext";

export function DamagesGrouping() {
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      ids: damagesUIContext.ids,
      openDeleteDamagesDialog: damagesUIContext.openDeleteDamagesDialog,
      openFetchDamagesDialog: damagesUIContext.openFetchDamagesDialog,
    };
  }, [damagesUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            
            <div className="form-group-inline">
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={damagesUIProps.openDeleteDamagesDialog}
              >
                <i className="fa fa-trash"></i> Sil  ({damagesUIProps.ids.length})
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={damagesUIProps.openFetchDamagesDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler ({damagesUIProps.ids.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
