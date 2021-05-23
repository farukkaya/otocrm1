import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/dealers/dealersActions";
import { GalleryEditDialogHeader } from "./GalleryEditDialogHeader";
import { GalleryEditForm } from "./GalleryEditForm";
import { useGalleriesUIContext } from "../GalleriesUIContext";

// function getFormattedDate(date) {
//   if (typeof date === "string") {
//     return date;
//   }

//   var year = date.getFullYear();

//   var month = (1 + date.getMonth()).toString();
//   month = month.length > 1 ? month : "0" + month;

//   var day = date.getDate().toString();
//   day = day.length > 1 ? day : "0" + day;

//   return month + "/" + day + "/" + year;
// }

export function GalleryEditDialog() {
  // Gallery UI Context
  const galleriesUIContext = useGalleriesUIContext();
  
  const galleriesUIProps = useMemo(() => {
    return {
      id: galleriesUIContext.selectedId,
      setIds: galleriesUIContext.setIds,
      parentId: galleriesUIContext.parentId,
      queryParams: galleriesUIContext.queryParams,
      showEditGalleryDialog: galleriesUIContext.showEditGalleryDialog,
      closeEditGalleryDialog: galleriesUIContext.closeEditGalleryDialog,
      initGallery: galleriesUIContext.initGallery,
    };
  }, [galleriesUIContext]);

  // Gallery Redux state
  const dispatch = useDispatch();
  const { actionsLoading, galleryForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.dealers.galleriesOfDealer.actionsLoading,
      galleryForEdit: state.dealers.galleriesOfDealer.dealerForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting gallery by seleted id
    dispatch(actions.fetchGallery(galleriesUIProps.id));
  }, [galleriesUIProps.id, dispatch]);

  const saveGallery = (gallery) => {
    //TODO: CLICK IS NOT WORKING, CHECK THIS FUNCTION

    //gallery.dueDate = getFormattedDate(gallery.dueDate);
    if (!galleriesUIProps.id) {

      gallery.parentId=galleriesUIProps.id;

      // server request for creating galleries
      dispatch(actions.createDealer(gallery)).then(() => {
        // refresh list after deletion
        dispatch(
          actions.fetchGalleriesByParent(
            galleriesUIProps.queryParams,
            galleriesUIProps.parentId
          )
        ).then(() => {
          // clear selections list
          galleriesUIProps.setIds([]);
          // closing edit modal
          galleriesUIProps.closeEditGalleryDialog();
        });
      });
    } else {
      // server request for updating galleries
      dispatch(actions.updateDealer(gallery)).then(() => {
        // refresh list after deletion
        dispatch(
          // refresh list after deletion
          actions.fetchGalleriesByParent(
            galleriesUIProps.queryParams,
            galleriesUIProps.parentId
          )
        ).then(() => {
          // clear selections list
          galleriesUIProps.setIds([]);
          // closing edit modal
          galleriesUIProps.closeEditGalleryDialog();
        });
      });
    }
  };

  return (
    <Modal
      show={galleriesUIProps.showEditGalleryDialog}
      onHide={galleriesUIProps.closeEditGalleryDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      <GalleryEditDialogHeader id={galleriesUIProps.id} />
      <GalleryEditForm
        saveGallery={saveGallery}
        actionsLoading={actionsLoading}
        gallery={galleryForEdit || galleriesUIProps.initGallery}
        onHide={galleriesUIProps.closeEditGalleryDialog}
      />
    </Modal>
  );
}
