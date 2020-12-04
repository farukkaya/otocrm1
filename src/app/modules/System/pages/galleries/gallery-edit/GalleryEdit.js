/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSubheader } from "../../../../../../_metronic/layout";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/galleries/galleriesActions"
import * as taxOfficesActions from "../../../_redux/taxOffices/taxOfficesActions"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { GalleryEditForm } from "./GalleryEditForm";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';

import { Users } from "../gallery-users/Users";
import { UsersUIProvider } from "../gallery-users/UsersUIContext";


export function GalleryEdit({
  history,
  match: {
    params: { id },
  },
}) {

  // Galleries UI Context
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  
  const { actionsLoading, galleryForEdit,taxOffices ,currentUser} = useSelector(
    (state) => ({
      currentUser:state.auth.user,
      actionsLoading: state.galleries.actionsLoading,
      galleryForEdit: state.galleries.galleryForEdit,
      taxOffices:state.taxOffices.entities
    }),
    shallowEqual
  );
  
  const initGallery = {
    id:undefined,
    name: "",
    level:undefined,
    dealerId:currentUser.dealer?.id,
    taxOfficeId:undefined,
    taxIdentityNo: "",
};

  useEffect(() => {
    dispatch(taxOfficesActions.fetchAllTaxOffice());

    dispatch(actions.fetchGallery(id));
  }, [id,dispatch]);
  

  useEffect(() => {
    let _title = id ? "" : "Yeni Galeri"
    if (galleryForEdit && id) {
      _title = format("Galeri Güncelle -'{0}'",`${galleryForEdit.name}`);
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryForEdit,id]);

  const saveGallery = (values) => {
    if (!id) {
      dispatch(actions.createGallery(values))
      backToGalleriesList()
    } else {
      dispatch(actions.updateGallery(values))//.then(() => );
      backToGalleriesList()
    }
  };

  const handleReset = (values) => {
    if (values.id) {
      values=galleryForEdit
    } else {
      values=initGallery
    }
  };
  const btnRef= useRef();  
  const btnReset= useRef();  

  const handleResetClick = () => {
    
    if (btnReset && btnReset.current) {
      btnReset.current.click();
    }
  };

  const saveGalleryClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToGalleriesList = () => {
    history.push(`/system/galleries`);
  };
  if(currentUser.dealer==undefined){
    alert("Galeri Ekleme Yetkiniz Yok!!!");
    backToGalleriesList();
  }
  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToGalleriesList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
          Geri
          </button>
          {`  `}
          <button 
          className="btn btn-light ml-2"
          onClick={handleResetClick}
          >
            <i className="fa fa-redo"></i>
            Reset
          </button>
          {`  `}
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={saveGalleryClick}
          >
           Kaydet
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
      <ul className="nav nav-tabs nav-tabs-line " role="tablist">
          <li className="nav-item" onClick={() => setTab("basic")}>
            <a
              className={`nav-link ${tab === "basic" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "basic")}
            >
             Galeri
            </a>
          </li>
          {id && (
            <>
              {" "}
              <li className="nav-item" onClick={() => setTab("users")}>
                <a
                  className={`nav-link ${tab === "users" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "users")}
                >
                Kullanıcıları
                </a>
              </li>
            </>
          )}
        </ul>
        <div className="mt-5">
          {tab === "basic" && (
            <GalleryEditForm
            actionsLoading={actionsLoading}
            gallery={galleryForEdit || initGallery}
            btnRef={btnRef}
            btnReset={btnReset}
            saveGallery={saveGallery}
            handleReset={handleReset}
            taxOffices={taxOffices}
          />
          )}
          {tab === "users" && id && (
            <UsersUIProvider currentGalleryId={id}>
            <Users />
          </UsersUIProvider>
          )}
         
        </div>
     
      </CardBody>
    </Card>
  );
}
