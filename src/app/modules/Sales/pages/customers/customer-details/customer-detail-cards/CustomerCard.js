/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {CUSTOMERTYPELIST} from "../../CustomersUIHelpers";
export function CustomerCard({ customer }) {
   
    return (
        <>
            {customer && (
                <div className="card card-custom card-stretch gutter-b">
                                {/* begin::Header */}
       <div className="card-header border-0">
         <h3 className="card-title font-weight-bolder text-dark">
           Müşteri Bilgileri
         </h3>
         <div className="card-toolbar">
         </div>
       </div>
       {/* end::Header */}
                    {/* begin::Body */}
                    <div className="card-body pt-4">
                        {/* begin::Customer */}
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="symbol symbol-60 symbol-xxl-100 mr-15 align-self-start align-self-xxl-center">
                                <a href="#" className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary" >
                                    {customer.firstName} {customer.lastName}
                                </a>
                                <div className="text-muted">{CUSTOMERTYPELIST.find(q=>q.id==customer.customerTypeId).name}</div>
                            </div>
                            <div className="text-muted text-hover-primary">
                                <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Takip Et</a>
                                <a href={`/sales/customers/${customer.id}/edit`} className="btn btn-sm btn-primary font-weight-bold py-2 px-3 px-xxl-5 my-1">Güncelle</a>
                            </div>
                        </div>
                        {/* end::Customer */}
                        {/* begin::Contact */}
                        <div className="py-5">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Galeri:</span>
                                <span className="text-muted text-hover-primary">
                                    {customer.dealer}
                                </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Temsilci:</span>
                                <span className="text-muted text-hover-primary">
                                    {customer.salesPerson}
                                </span>
                            </div>
                            {
                                customer.customerTypeId == 2 && (
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="font-weight-bold mr-2">Vergi Dairesi:</span>
                                        <span className="text-muted text-hover-primary">
                                            {customer.taxOffice}
                                        </span>
                                    </div>
                                )
                            }
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Kimlik/Vergi Numarası:</span>
                                <span className="text-muted text-hover-primary">
                                    {customer.identityNo}
                                </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">E-Posta:</span>
                                <span className="text-muted text-hover-primary">
                                    {customer.email}
                                </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Telefon1:</span>
                                <span className="text-muted">{customer.phone1}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Telefon2:</span>
                                <span className="text-muted">{customer.phone2}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="font-weight-bold mr-2">Peşinat:</span>
                                <span className="text-muted">{customer.advancePayment} ₺</span>
                            </div>
                        </div>
                        {/* end::Contact */}
                     
                    </div>
                    {/* end::Body */}
                </div>
            )}
        </>
    );
}
