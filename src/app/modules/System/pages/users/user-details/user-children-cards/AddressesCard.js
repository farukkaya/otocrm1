import React from 'react'
import { Card, Accordion } from "react-bootstrap";
import { Addresses } from "../../dealer-addresses/Addresses";
import { AddressesUIProvider } from "../../dealer-addresses/AddressesUIContext";
export function AddressesCard({ parentGuid, className }) {
// const onToggleAccordion=(e,x)=>{
// 
// };

    return (
        <Accordion defaultActiveKey="-1" >
            {/* begin::Advance Table Widget 9 */}
            <div className={`card card-custom ${className}`}>
                <Accordion.Toggle as={Card.Header} eventKey="0" variant="link"  /*onClick={onToggleAccordion}*/>

                    {/* begin::Header */}
                    <Card.Header className="d-flex justify-content-between bg-white  w-100" >
                        <div class="p-2 bd-highlight">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">
                                    Adresler  </span>
                                <span className="text-muted mt-3 font-weight-bold font-size-sm">
                                    Kullanıı adreslerinde bir adres birincil adres olarak seçilebilir...    </span>
                            </h3>
                        </div>
                        <div class="p-2 bd-highlight">
                            <div className="card-toolbar">

                            </div>

                        </div>
                    </Card.Header>
                    {/* end::Header */}
                </Accordion.Toggle>

                {/* begin::Body */}
                <Accordion.Collapse eventKey="0" >
                    <Card.Body>
                       {parentGuid&&(
                             <AddressesUIProvider guid={parentGuid}>
                             <Addresses />
                          </AddressesUIProvider>
      
                       )}
                  
                    </Card.Body>
                </Accordion.Collapse>
                {/* end::Body */}
            </div>
            {/* end::Advance Table Widget 9 */}
        </Accordion>
    )
}
