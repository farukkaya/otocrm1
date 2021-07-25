
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import moment from 'moment';
import 'moment/locale/tr';
import { DamageTypes } from "../../StocksUIHelper";

export function DamageRecordsCard({ stockDamages,vinNo, plateNo }) {
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
               {stockDamages.map(damage=>(
                  <tr>
                  <td>{damage.damageOrder}</td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    {moment(damage.damageDate).locale('tr').format('L')}
                      </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    {DamageTypes.firstOrNew(item=>item.id==damage.damageTypeId).name}
                      </span>

                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    {damage.amount} ₺
                      </span>
                  </td>
                </tr>
               ))}
                <tr style={{borderTopStyle:"solid",border:"1",borderColor:"#f7c9c9"}}>
                  <td colSpan="2"> 
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Toplam Hasar Kaydı:
                      </span>
                  </td>
                  <td>
                    
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                     {stockDamages.map(damage=>damage.amount).sum()} ₺
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