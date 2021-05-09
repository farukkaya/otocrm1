/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";

export function DamageRecordsCard({ vinNo, plateNo }) {
  return (
    <div className="card card-custom card-stretch gutter-b">
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">Hasar Kayıtları</span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">{plateNo}, {vinNo}</span>
        </h3>
        <div className="card-toolbar">
          <a href="#" className="btn btn-primary font-weight-bolder font-size-sm mr-3">Sorgula</a>
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
                  <th style={{ minWidth: "100px" }}>Hasar Tipi</th>
                  <th style={{ minWidth: "100px" }}>Tutar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      01.11.2018
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Çarpma
                      </span>

                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      3200 ₺
                      </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      21.08.2020
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      -
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      500 ₺
                      </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      10.12.2020
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Çarpışma
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      7500 ₺
                      </span>
                  </td>
                </tr>
                <tr style={{borderBottomStyle:"solid",border:"1",borderColor:"#f7c9c9"}}>
                  <td>4</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      01.01.2021
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Park Halinde Çarpma
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      2500 ₺
                      </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2"> 
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Toplam Hasar Kaydı:
                      </span>
                  </td>
                  <td>
                    
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      13700 ₺
                      </span>
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
