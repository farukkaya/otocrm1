/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";

export function StockDocumentsCard({ vinNo, plateNo }) {
  return (
    <div className="card card-custom card-stretch gutter-b">
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">Belgeler</span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">{plateNo}, {vinNo}</span>
        </h3>
        <div className="card-toolbar">
          <a href="#" className="btn btn-primary font-weight-bolder font-size-sm mr-3">Yenile</a>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-0 pb-3">
        <div className="tab-content">
          <div className="table-responsive">
            <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
              <thead>
                <tr className="text-left text-uppercase">
                  <th style={{ minWidth: "50px" }}>#</th>
                  <th style={{ minWidth: "100px" }}>Tarih</th>
                  <th style={{ minWidth: "100px" }}>Belge Adı</th>
                  <th style={{ minWidth: "100px" }}>Durumu</th>
                  <th style={{ minWidth: "100px" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      10.03.2021
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Noter Belgesi - Alış
                      </span>

                  </td>

                  <td>
                  <span className="label label-lg label-light-primary label-inline">
                        Onaylandı
                      </span>
                  </td>
                  <td className="pr-0 text-center">
                  <a href="#"className="font-weight-bolder font-size-sm" >
                        Göster
                      </a>
                    </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      20.4.2021
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Expertiz Belgesi
                      </span>
                  </td>
                  <td>
                  <span className="label label-lg label-light-warning label-inline">
                        Geçerli
                      </span>
                  </td>
                  <td className="pr-0 text-center">
                      <a href="#"className="font-weight-bolder font-size-sm" >
                        Göster
                      </a>
                    </td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
