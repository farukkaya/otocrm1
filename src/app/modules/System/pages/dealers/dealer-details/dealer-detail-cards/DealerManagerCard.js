/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownCustomToggler,
  DropdownMenu4,
} from "../../../../../../../_metronic/_partials/dropdowns";

export function DealerManagerCard(user) {

  return (
    <>
      {user && (
               <div className="card card-custom card-stretch gutter-b">
               {/* begin::Header */}
     <div className="card-header border-0">
       <h3 className="card-title font-weight-bolder text-dark">
         Bayi Yöticisi
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
         
           {/* begin::User */}
           <div className="d-flex align-items-center">
             <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
               <div
                 className="symbol-label"
                 style={{ backgroundImage: `url(${user.pic})` }}
               ></div>
               {/* style="background-i
               mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
               <i className="symbol-badge bg-success"></i>
             </div>
             <div>
               <a
                 href="#"
                 className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
               >
                 Faruk KAYA
               </a>
               <div className="text-muted">Genel Müdür</div>
               <div className="mt-2">
               <a
                   href="#"
                   className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                 >
                   Mesaj Gönder
                 </a>
                 <a
                   href="#"
                   className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                 >
                   Takip Et
                 </a>
                 <a
                   href="#"
                   className="btn btn-sm btn-primary font-weight-bold py-2 px-3 px-xxl-5 my-1"
                 >
                   Güncelle
                 </a>
                
               </div>
             </div>
           </div>
           {/* end::User */}
           {/* begin::Contact */}
           <div className="py-9">
             <div className="d-flex align-items-center justify-content-between mb-2">
               <span className="font-weight-bold mr-2">E-Posta:</span>
               <span className="text-muted text-hover-primary">
                 faruk.kaya@otocrm.com.tr
               </span>
             </div>
             <div className="d-flex align-items-center justify-content-between mb-2">
               <span className="font-weight-bold mr-2">Telefon:</span>
               <span className="text-muted">0531 854 0220</span>
             </div>
             <div className="d-flex align-items-center justify-content-between">
               <span className="font-weight-bold mr-2">Lokasyon:</span>
               <span className="text-muted">BUCA/İZMİR</span>
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
