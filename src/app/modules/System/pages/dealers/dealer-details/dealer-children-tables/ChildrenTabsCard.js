import React,{useState} from 'react'
import {Card, Accordion } from "react-bootstrap";
import { Galleries } from "../../dealer-galleries/Galleries";
import { GalleriesUIProvider } from "../../dealer-galleries/GalleriesUIContext";
export function ChildrenTabsCard({ parentId, className }) {
    
  const [tab, setTab] = useState("gallery");
    return (
        <Accordion defaultActiveKey="-1" > 
        {/* begin::Advance Table Widget 9 */}
        <div className={`card card-custom ${className}`}>
        <Accordion.Toggle as={Card.Header} eventKey="0"  variant="link" >
  
          {/* begin::Header */}
          <Card.Header className="d-flex justify-content-between bg-white  w-100" >
          <div className="p-2 bd-highlight">
          <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
               Bağlı olan Bayi ve Galeriler
              </span>
              <span className="text-muted mt-3 font-weight-bold font-size-sm">
                Bir bayi veya Galeri  kendine altında bayi ve galeriler oluşturup yönetebilir.
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
            <>
            <ul className="nav nav-tabs nav-tabs-line " role="tablist">
            <li className={`nav-item `} onClick={() => setTab("gallery")}>
                  <a
                    className={`nav-link ${tab === "gallery" && "active"}`}
                    data-toggle="tab"
                    role="button"
                    aria-selected={(tab === "gallery")}
                  >
                    Galeriler
                    </a>
                </li>
              <li className="nav-item" onClick={() => setTab("dealer")}>
                <a className={`nav-link ${tab === "dealer" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "dealer")}
                > Bayiler </a>
              </li>
              
              <li className="nav-item" onClick={() => setTab("gallery_dealer")}>
                <a
                  className={`nav-link ${tab === "gallery_dealer" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "gallery_dealer")}
                >
                  Bayi&Galeriler
                    </a>
              </li>
            </ul>
            <div className="mt-5">
              
              {tab === "gallery" && (
                <GalleriesUIProvider currentDealerId={parentId} dealerType="2">
                    <Galleries />
                </GalleriesUIProvider>
              )}
              {tab === "dealer" && (
                <GalleriesUIProvider currentDealerId={parentId} dealerType="1">
                   <Galleries />
                 </GalleriesUIProvider>
              )}
              {tab === "gallery_dealer"  && (
                 <GalleriesUIProvider currentDealerId={parentId} dealerType="3">
                 <Galleries />
              </GalleriesUIProvider>
              )}
           
            </div>
          </>
            </Card.Body>
          </Accordion.Collapse>
          {/* end::Body */}
        </div>
        {/* end::Advance Table Widget 9 */}
        </Accordion>
    )
}
