import React from 'react'
import {Card, Accordion } from "react-bootstrap";
import { Users } from "../../dealer-users/Users";
import { UsersUIProvider } from "../../dealer-users/UsersUIContext";
export function UsersCard({ parentId,openDetailUserPage, className }) {
    
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
               Kullanıcılar
              </span>
              <span className="text-muted mt-3 font-weight-bold font-size-sm">
                Bir bayiye ait birden fazla yönetici ataması yapılabilir...
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
            <UsersUIProvider currentDealerId={parentId} openDetailUserPage={openDetailUserPage}>
                  <Users />
                </UsersUIProvider>
            </Card.Body>
          </Accordion.Collapse>
          {/* end::Body */}
        </div>
        {/* end::Advance Table Widget 9 */}
        </Accordion>
    )
}
