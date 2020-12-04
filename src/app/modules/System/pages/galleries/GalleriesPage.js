import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { GalleriesLoadingDialog } from "./galleries-loading-dialog/GalleriesLoadingDialog";
import { GalleryDeleteDialog } from "./gallery-delete-dialog/GalleryDeleteDialog";
import { GalleriesCard } from "./GalleriesCard";
import { GalleriesUIProvider } from "./GalleriesUIContext";
import { GalleriesFetchDialog } from "./galleries-fetch-dialog/GalleriesFetchDialog";
import { GalleriesUpdateStatusDialog } from "./galleries-update-status-dialog/GalleriesUpdateStatusDialog";
import { GalleriesDeleteDialog } from "./galleries-delete-dialog/GalleriesDeleteDialog";
import { GalleryUpdateStatusDialog } from "./gallery-update-status-dialog/GalleryUpdateStatusDialog";

export const GalleriesPage=({ history }) =>{

  const { dealer } = useSelector(
    ({ auth }) => ({
      dealer: auth.user.dealer,
    }),
    shallowEqual
  );
  const backToDashboard = () => {
    history.push(`/dashboard`);
  };

  
  if(dealer==undefined){
    alert("Bu Ekranı Görme Yetkiniz Yok!!!");
    backToDashboard();
  }

  const galleriesUIEvents = {
    newGalleryButtonClick: () => {
      history.push("/system/galleries/new");
    },
    openEditGalleryPage: (id) => {
      history.push(`/system/galleries/${id}/edit`);
    },
    openDeleteGalleryDialog: (id) => {
      history.push(`/system/galleries/${id}/delete`);
    },
  
    openDeleteGalleriesDialog: () => {
      history.push(`/system/galleries/deleteGalleries`);
    },
    openFetchGalleriesDialog: () => {
      history.push(`/system/galleries/fetch`);
    },
    openUpdateGalleriesStatusDialog: () => {
      history.push("/system/galleries/updateStatus");
    },
    openUpdateGalleryStatusDialog: (id) => {
      history.push(`/system/galleries/${id}/updateStatus`);
    }
  };
  return (
    <GalleriesUIProvider galleriesUIEvents={galleriesUIEvents}>
      <GalleriesLoadingDialog />
      <Route path="/system/galleries/deleteGalleries">
        {({ history, match }) => (
          <GalleriesDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/system/galleries");
            }}
          />
        )}
      </Route>
      <Route path="/system/galleries/:id/delete"> 
        {({ history, match }) => {
          return(
            <GalleryDeleteDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/galleries");
              }}
            />
          )
        }}
      </Route>
      <Route path="/system/galleries/fetch">
        {({ history, match }) => (
          <GalleriesFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/system/galleries");
            }}
          />
        )}
      </Route>
      <Route path="/system/galleries/updateStatus">
        {({ history, match }) => (
          <GalleriesUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/system/galleries");
            }}
          />
        )}
      </Route>
      <Route path="/system/galleries/:id/updateStatus"> 
        {({ history, match }) => {
          return(
            <GalleryUpdateStatusDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push("/system/galleries");
              }}
            />
          )
        }}
      </Route>
      <GalleriesCard />
    </GalleriesUIProvider>
  );
}
