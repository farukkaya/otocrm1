import React from 'react'

export function SalesPersonCard({user}) {
    return (
        <>
        {user && (
                 <div className="card card-custom card-stretch gutter-b">
                 {/* begin::Header */}
       <div className="card-header border-0">
         <h3 className="card-title font-weight-bolder text-dark">
           Müşteri Temsilcisi
         </h3>
         <div className="card-toolbar">
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
                 <div className="mt-2">
                 <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1" >
                     Mesaj Gönder
                   </a>
                   <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"  >
                     Takip Et
                   </a>
                   <a href={`/system/users/${user.id}/edit`}  className="btn btn-sm btn-primary font-weight-bold py-2 px-3 px-xxl-5 my-1" >
                     Güncelle
                   </a>
                  
                 </div>
               </div>
             </div>
             {/* end::User */}
             {/* begin::Info */}
             <div className="py-5">
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
             </div>
             {/* end::Info */}
  
             {/* <div class="d-flex flex-row-reverse h-150px">
              <div class="mt-auto p-2"><a class="navi-link py-4" href="/user-profile/account-information"><span class="navi-text font-size-lg">...Diğer Yöneticler ({count-1}) &gt;</span></a></div>
            </div> */}
           </div>
           {/* end::Body */}
         </div>
  
        )}
      </>
    )
}
