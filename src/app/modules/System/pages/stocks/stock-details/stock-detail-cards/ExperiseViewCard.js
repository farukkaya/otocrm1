import React from 'react'
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";
import { Badge } from "react-bootstrap";

export function ExperiseViewCard() {
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
            <div className="card-body pt-0 pb-3" style={{position:"relative", margin:"auto"}}>
            <div className="text-muted text-hover-primary align-items-center mt-5">
                    <Badge  className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" variant="success">Orjinal</Badge>
                    <Badge className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" variant="warning">Boyalı</Badge>
                    <Badge className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" variant="info">Lokal Boyalı</Badge>
                    <Badge className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" variant="danger">Değişmiş</Badge>
                    <Badge className="font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" variant="secondary">Belirtilmemiş</Badge>
                </div>
                <SVG src={toAbsoluteUrl("/media/svg/files/expertise.svg")} />

            </div>
        </div>

    )
}
