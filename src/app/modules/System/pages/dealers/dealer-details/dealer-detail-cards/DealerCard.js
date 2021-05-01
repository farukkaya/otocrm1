/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";
import {
    DropdownCustomToggler,
    DropdownMenu4,
} from "../../../../../../../_metronic/_partials/dropdowns";

export function DealerCard({ dealer }) {
    return (
        <>
            {dealer && (
                <div className="card card-custom card-stretch gutter-b">
                    {/* begin::Body */}
                    <div className="card-body pt-4">
                        {/* begin::Toolbar */}
                        <div className="d-flex justify-content-end">
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
                        {/* end::Toolbar */}
                        {/* begin::Dealer */}
                        <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="symbol symbol-60 symbol-xxl-100 mr-15 align-self-start align-self-xxl-center">
                                    <a href="#" className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary" >
                                        {dealer.name}
                                    </a>
                                    <div className="text-muted">{dealer.dealerType}</div>
                                </div>
                                <div className="text-muted text-hover-primary">
                                    <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Takip Et</a>
                                    <a href="#" className="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1">Güncelle</a>
                                </div>
                        </div>
                            {/* end::Deaeler */}
                            {/* begin::Contact */}
                            <div className="py-5">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Vergi Dairesi:</span>
                                    <span className="text-muted text-hover-primary">
                                        {dealer.taxOffice}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Vergi Numarası:</span>
                                    <span className="text-muted text-hover-primary">
                                        {dealer.taxIdentityNo}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">E-Posta:</span>
                                    <span className="text-muted text-hover-primary">
                                        {dealer.email}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Telefon:</span>
                                    <span className="text-muted">{dealer.tel1}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="font-weight-bold mr-2">Lokasyon:</span>
                                    <span className="text-muted">ADANA</span>
                                </div>
                            </div>
                            {/* end::Contact */}
                            {/* begin::Nav */}
                            <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
                                <div className="navi-item mb-2">
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={<Tooltip>Yakında...</Tooltip>}
                                    >
                                        <NavLink
                                            to="/user-profile/profile-overview"
                                            className="navi-link py-4"
                                            activeClassName="active"
                                        >
                                            <span className="navi-icon mr-2">
                                                <span className="svg-icon">
                                                    <SVG
                                                        src={toAbsoluteUrl(
                                                            "/media/svg/icons/Design/Layers.svg"
                                                        )}
                                                    ></SVG>{" "}
                                                </span>
                                            </span>
                                            <span className="navi-text font-size-lg">Genel Bilgiler</span>
                                        </NavLink>
                                    </OverlayTrigger>
                                </div>
                                <div className="navi-item mb-2">
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={<Tooltip>Yakında...</Tooltip>}>
                                        <NavLink
                                            to="/user-profile/personal-information"
                                            className="navi-link py-4"
                                            activeClassName="active">
                                            <span className="navi-icon mr-2">
                                                <span className="svg-icon">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Mail.svg")}></SVG>{" "}
                                                </span>
                                            </span>
                                            <span className="navi-text font-size-lg">E-Posta Ayarları</span>
                                        </NavLink>
                                    </OverlayTrigger>
                                </div>
                                <div className="navi-item mb-2">
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={<Tooltip>Yakında...</Tooltip>}
                                    >
                                        <NavLink
                                            to="/user-profile/account-information"
                                            className="navi-link py-4"
                                            activeClassName="active">
                                            <span className="navi-icon mr-2">
                                                <span className="svg-icon">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet3.svg")}></SVG>{" "}
                                                </span>
                                            </span>
                                            <span className="navi-text font-size-lg">Kredi Kartları</span>
                                        </NavLink>
                                    </OverlayTrigger>
                                </div>

                            </div>
                            {/* end::Nav */}
                        </div>
                        {/* end::Body */}
                    </div>
            )}
        </>
            );
}
