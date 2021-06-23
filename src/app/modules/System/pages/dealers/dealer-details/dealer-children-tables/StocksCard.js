import React from 'react'
import { Card, Accordion } from "react-bootstrap";
import { Stocks } from "../../dealer-stocks/Stocks";
import { StocksUIProvider } from "../../dealer-stocks/StocksUIContext";
export function StocksCard({ parentId, className }) {

    return (
        <Accordion defaultActiveKey="-1" >
            {/* begin::Advance Table Widget 9 */}
            <div className={`card card-custom ${className}`}>
                <Accordion.Toggle as={Card.Header} eventKey="0" variant="link" >

                    {/* begin::Header */}
                    <Card.Header className="d-flex justify-content-between bg-white  w-100" >
                        <div className="p-2 bd-highlight">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">
                                    Stoklar
              </span>
                                <span className="text-muted mt-3 font-weight-bold font-size-sm">
                                    Bir Galeri'de bulunan stok adedi Kapasitesi ile sınırlıdır.
              </span>
                            </h3>
                        </div>
                        <div className="p-2 bd-highlight">
                            <div className="card-toolbar">

                            </div>

                        </div>
                    </Card.Header>
                    {/* end::Header */}
                </Accordion.Toggle>

                {/* begin::Body */}
                <Accordion.Collapse eventKey="0" >
                    <Card.Body>
                        <StocksUIProvider currentDealerId={parentId}>
                            <Stocks />
                        </StocksUIProvider>
                    </Card.Body>
                </Accordion.Collapse>
                {/* end::Body */}
            </div>
            {/* end::Advance Table Widget 9 */}
        </Accordion>
    )
}
