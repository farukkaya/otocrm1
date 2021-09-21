/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Accordion } from "react-bootstrap";
import { CUSTOMERTYPELIST,PAYMENTMETHODLIST,CUSTOMERSOURCELIST } from "../../../../../Sales/pages/customers/CustomersUIHelpers";

export function InterestedCustomersCard({ customers }) {
   
    return (
        <Accordion defaultActiveKey="-1" >
            {/* begin::Advance Table Widget 9 */}
            <div className="card card-custom card-stretch gutter-b">
                <Accordion.Toggle as={Card.Header} eventKey="0">

                    {/* begin::Header */}
                    <Card.Header className="d-flex justify-content-between bg-white  w-100" >
                        <div className="p-2 bd-highlight">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">
                                    İlgilenen Müşteriler
                                </span>
                                <span className="text-muted mt-3 font-weight-bold font-size-sm">
                                    3 müşteri bu stok ile ilgilendi
                                </span>
                            </h3>
                        </div>
                        <div className="p-2 bd-highlight">
                            <div className="card-toolbar">   </div>
                        </div>
                    </Card.Header>
                    {/* end::Header */}
                </Accordion.Toggle>



                {/* begin::Body */}
                <Accordion.Collapse eventKey="0">
                    <div className="card-body pt-0 pb-3">
                        <div className="tab-content">
                            {/* begin::Table */}
                            <div className="table-responsive">
                                <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
                                    <thead>
                                        <tr className="text-left">
                                            <th style={{ minWidth: "120px" }}>Müşteri Tipi</th>
                                            <th style={{ minWidth: "120px" }} className="pl-7">
                                                <span className="text-dark-75">Müşteri Adı</span>
                                            </th>
                                            <th style={{ minWidth: "120px" }}>Ödeme Tipi</th>
                                            <th style={{ minWidth: "100px" }}>Alım Türü</th>
                                            <th style={{ minWidth: "100px" }}>Peşinat</th>
                                            <th style={{ minWidth: "100px" }} />
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {customers?.map(customer => {
                                        return (
                                            <tr>
                                            <td className="pl-0 py-8">
                                                <div className="d-flex align-items-center">

                                                    <div className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                                         {CUSTOMERTYPELIST.find(item=>item.id==customer.customerTypeId).name}
                                                       
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                   {customer.firstName}  {customer.lastName}
                                                </span>
                                                <span className="text-muted font-weight-bold">
                                                   Kredi Başvuru Sonucu Bekliyor
                                                </span>
                                            </td>
                                            <td className="pl-0 py-8">
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                                         {PAYMENTMETHODLIST.find(item=>item.id==customer.paymentMethodId).name}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pl-0 py-8">
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                                         {CUSTOMERSOURCELIST.find(item=>item.id==customer.customerSourceId).name}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                {customer.advancePayment} 
                                                </span>
                                                <span className="text-muted font-weight-bold">Ödendi</span>
                                            </td>


                                            <td className="pr-0 text-center">
                                                <a
                                                    href="#"
                                                    className="font-weight-bolder font-size-sm"
                                                >
                                                    Teklifi Göster
                                                </a>
                                            </td>
                                        </tr>
                                        )
                                    })}
                                       
                                    </tbody>
                                </table>
                            </div>
                            {/* end::Table */}
                        </div>
                    </div>
                </Accordion.Collapse>
                {/* end::Body */}
            </div>
            {/* end::Advance Table Widget 9 */}
        </Accordion>
    );
}
