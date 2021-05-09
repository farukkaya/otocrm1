/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import {
    DropdownCustomToggler,
    DropdownMenu4,
} from "../../../../../../../_metronic/_partials/dropdowns";
import { StockImagesCard } from "./StockImagesCard";

export function StockCard({ stock }) {
    
    return (
        <>
            {stock && (
                <div className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px">
                    <div className="card card-custom card-stretch gutter-b">
                    {/* begin::Header */}
                        <div className="card-header border-0">
                            <h3 className="card-title font-weight-bolder text-dark">
                                {stock.brand}, {stock.model}
                            </h3>
                            <div className="card-toolbar">
                                <Dropdown className="dropdown dropdown-inline" alignRight>
                                    <Dropdown.Toggle
                                        className="btn btn-clean btn-hover-light-primary btn-sm btn-icon cursor-pointer"
                                        variant="transparent"
                                        id="dropdown-toggle-top-user-profile"
                                        as={DropdownCustomToggler}
                                    >
                                        <i className="ki ki-bold-more-hor"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                        <DropdownMenu4></DropdownMenu4>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-4">
                            {/* begin::Stock */}
                            <div className="align-items-center justify-content-between mb-2">
                            <StockImagesCard></StockImagesCard>
                                <div className="text-muted text-hover-primary lign-items-center mt-5">
                                    <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Güncelle</a>
                                    <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Takip Et</a>
                                    <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Satış Yap</a>
                                </div>
                            </div>
                            {/* end::Stock */}
                            <hr/>
                            {/* begin::Özellikler */}
                            <div className="py-5">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Marka:</span>
                                    <span className="text text-hover-primary">
                                        {stock.brand}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Model:</span>
                                    <span className="text text-hover-primary">
                                        {stock.model}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Yıl:</span>
                                    <span className="text text-hover-primary">
                                        {stock.year}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Renk:</span>
                                    <span className="text text-hover-primary">{stock.color}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Yakıt Cinsi:</span>
                                    <span className="text text-hover-primary">{stock.fuelType}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Vites Tipi:</span>
                                    <span className="text text-hover-primary">{stock.gearType}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Kasa Tipi:</span>
                                    <span className="text text-hover-primary">{stock.caseType}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Motor Gücü:</span>
                                    <span className="text">{stock.enginePower}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Motor Hacmi:</span>
                                    <span className="text text-hover-primary">{stock.engineCapacity}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Şaşe No:</span>
                                    <span className="text text-hover-primary">{stock.vinNo}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Motor No:</span>
                                    <span className="text text-hover-primary">{stock.engineNo}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Alış Fiyatı:</span>
                                    <span className="text text-hover-primary">{stock.buyingPrice} ₺</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Satış Fiyatı:</span>
                                    <span className="text text-hover-primary">{stock.sellingPrice} ₺</span>
                                </div>
                            </div>
                            {/* end::Özellikler */}

                        </div>
                        {/* end::Body */}
                    </div>
                </div>
            )}
        </>
    );
}
