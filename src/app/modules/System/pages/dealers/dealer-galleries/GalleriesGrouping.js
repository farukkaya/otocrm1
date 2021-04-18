import React, { useMemo } from "react";
import { useGalleriesUIContext } from "./GalleriesUIContext";

export function GalleriesGrouping() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      openDeleteGalleriesDialog: galleriesUIContext.openDeleteGalleriesDialog,
      openFetchGalleriesDialog: galleriesUIContext.openFetchGalleriesDialog,
    };
  }, [galleriesUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
          <div className="form-group-inline">
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={galleriesUIProps.openDeleteGalleriesDialog}
              >
                <i className="fa fa-trash"></i> Hepsini Sil
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={galleriesUIProps.openFetchGalleriesDialog}
              >
                <i className="fa fa-stream"></i> Seçilenler ({galleriesUIProps.ids.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
