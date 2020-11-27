import React, { useMemo } from "react";
import { useGalleriesUIContext } from "../GalleriesUIContext";

export function GalleriesGrouping() {

  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      //setIds: galleriesUIContext.setIds,
      openDeleteGalleriesDialog: galleriesUIContext.openDeleteGalleriesDialog,
      openFetchGalleriesDialog: galleriesUIContext.openFetchGalleriesDialog,
      openUpdateGalleriesStatusDialog:
        galleriesUIContext.openUpdateGalleriesStatusDialog,
    };
  }, [galleriesUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="-font-bold font-danger-">
                <span>
                Seçili Kayıt Sayısı: <b>{galleriesUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={galleriesUIProps.openDeleteGalleriesDialog}
              >
                <i className="fa fa-trash"></i>   Hepsini Sil
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={galleriesUIProps.openFetchGalleriesDialog}
              >
                <i className="fa fa-stream"></i>  Seçilileri Getir
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={galleriesUIProps.openUpdateGalleriesStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
