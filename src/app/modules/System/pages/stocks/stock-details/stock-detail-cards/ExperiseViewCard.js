import React from "react";
import ExpertiseSelectionSVG from '../../stock-edit/stock-expertise/ExpertiseSelectionSVG'
import { TramerTypes } from "../../StocksUIHelper";

export function ExperiseViewCard({stockExpertise,tramerTypeId,tramerValue}) {
    return (
        <div className="card card-custom card-stretch gutter-b">
            {/* Head */}
            <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label font-weight-bolder text-dark">Ekpertiz Bilgileri</span>
                    {/* <span className="text-muted mt-3 font-weight-bold font-size-sm"></span> */}
                </h3>
                <div className="card-toolbar">
                    <a href="#" className="btn btn-primary font-weight-bolder font-size-sm mr-3">Yenile</a>
                </div>
            </div>
            {/* Body */}
            <div className="card-body form-element-container svg-detail pt-0 pb-3" >
            <div className="text-muted text-hover-primary align-items-center mt-5">
                    <div className="guide-of-svg">
                        <div className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1 painted"><span>Boyalı</span></div>
                        {/* <div className="painted"><span>Lokal Boyalı</span></div> */}
                        <div className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1 changed"><span>Değişmiş</span></div>
                    </div>
                </div>
                {stockExpertise&&(

                    <ExpertiseSelectionSVG values={stockExpertise} />
                )}
<               div className="text-muted text-hover-primary align-items-center mt-5">
                    <div className="guide-of-svg">
                        <div className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1 "><span><b>Tramer Tipi:</b>  {TramerTypes.firstOrNew(item=>item.id==tramerTypeId).name}</span></div>
                        <div className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"><span><b>Tramer Tutarı:</b> {tramerValue}₺</span></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
