/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import {  OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";

import moment from 'moment';
import 'moment/locale/tr';
export function UserCard({user}) {

  return (
    <>
      {user && (
         <div className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
         id="kt_profile_aside" >
        <div className="card card-custom card-stretch gutter-b mb-10">
           
         {/* begin::Body */}
         <div className="card-body pt-4">
         
           {/* begin::User */}
           <div className="d-flex align-items-center">
             <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
               <div
                 className="symbol-label"
                 style={{ backgroundImage: `url(${user.picturePath})` }}
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
                 {user.fullname}
               </a>
               <div className="text-muted">{user.profession}</div>
               </div>
           </div>
           {/* end::User */}
           {/* begin::Info */}
           <div className="py-5">
           <div className="mt-2">
               {/* <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" >
                   Mesaj Gönder
                 </a> */}
              
                 
               </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
            <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" >
                   Mesaj Gönder
                 </a> 
            {/* <a href="#" className="btn btn-xs btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"  >
                   Takip Et
                 </a> */}
                 <a href={`/system/users/${user.id}/edit`}  className="btn btn-sm btn-primary font-weight-bold py-2 px-3 px-xxl-5 my-1" >
                   Güncelle
                 </a>
                
             </div>
           <div className="d-flex align-items-center justify-content-between mb-2">
               <span className="font-weight-bold mr-2">Bayi:</span>
               <span className="text-muted text-hover-primary">
               {user.dealer}
               </span>
             </div>
             <div className="d-flex align-items-center justify-content-between mb-2">
               <span className="font-weight-bold mr-2">Kullanıcı Adı:</span>
               <span className="text-muted text-hover-primary">
               {user.username}
               </span>
             </div>
             <div className="d-flex align-items-center justify-content-between mb-2">
               <span className="font-weight-bold mr-2">E-Posta:</span>
               <span className="text-muted text-hover-primary">
               {user.email}
               </span>
             </div>
             <div className="d-flex align-items-center justify-content-between mb-2">
               <span className="font-weight-bold mr-2">Telefon:</span>
               <span className="text-muted">{user.phone}</span>
             </div>
             <div className="d-flex align-items-center justify-content-between">
               <span className="font-weight-bold mr-2">Lokasyon:</span>
               <span className="text-muted">{user.location}</span>
             </div>
             <div className="d-flex align-items-center justify-content-between">
               <span className="font-weight-bold mr-2">Durumu:</span>
               <span className="text-muted">{user.isActive?"Aktif":"Pasif"}</span>
             </div>
             <div className="d-flex align-items-center justify-content-between">
               <span className="font-weight-bold mr-2">Oluşturma Tarihi:</span>
               <span className="text-muted">
               {moment(user.createdDate).locale('tr').format('L')}
              </span>
             </div>
           </div>
           {/* end::Info */}

           {/* <div class="d-flex flex-row-reverse h-150px">
            <div class="mt-auto p-2"><a class="navi-link py-4" href="/user-profile/account-information"><span class="navi-text font-size-lg">...Diğer Yöneticler ({count-1}) &gt;</span></a></div>
          </div> */}
         </div>
         {/* end::Body */}
       </div>
       </div>
       
       )}
    </>
  );
}
