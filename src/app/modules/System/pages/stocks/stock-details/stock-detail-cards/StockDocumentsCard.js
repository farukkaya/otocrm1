/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import moment from 'moment';
import 'moment/locale/tr';
export function StockDocumentsCard({ documents, vinNo, plateNo }) {
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
                  <th style={{ minWidth: "100px" }}>Geçerlilik Tarihi</th>
                  <th style={{ minWidth: "100px" }}>Açıklama</th>
                  <th style={{ minWidth: "100px" }}></th>
                </tr>
              </thead>
              <tbody>
                {documents?.map(document => {
                  return (
                    <tr key={document.id}>
                      <td>{document.id}</td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {moment(document.createdDate).locale('tr').format('L')}
                        </span>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {document.name}
                        </span>

                      </td>

                      <td>
                        {document.validityDate && (
                          <span className="label label-lg label-light-primary label-inline">
                            {moment(document.validityDate).locale('tr').format('L')}
                          </span>
                        )}

                      </td>
                      <td>
                        {document.description && (
                          <span className="label label-inline">
                            {document.description}
                          </span>
                        )}

                      </td>
                      <td className="pr-0 text-center">
                        <a target='_blank' className="font-weight-bolder font-size-sm" href={process.env.REACT_APP_API_DEVELOPMENT_URL + document.path}>Belgeyi Göster</a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
