/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { format } from 'react-string-format';
import { v4 as generateGuid } from 'uuid';

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import * as actions from "../../../_redux/dealers/dealersActions";

import { DealerEditForm } from "./DealerEditForm";
import { Galleries } from "../dealer-galleries/Galleries";
import { GalleriesUIProvider } from "../dealer-galleries/GalleriesUIContext";
import { Stocks } from "../dealer-stocks/Stocks";
import { StocksUIProvider } from "../dealer-stocks/StocksUIContext";
import { Users } from "../dealer-users/Users";
import { UsersUIProvider } from "../dealer-users/UsersUIContext";
import { Addresses } from "../dealer-addresses/Addresses";
import { AddressesUIProvider } from "../dealer-addresses/AddressesUIContext";

const newGuid = generateGuid();
const initDealer = {

  //STEP1-> BAYİ
  guid: newGuid,
  dealerName: "",
  taxIdentityNo: "",
  parentId: "",
  taxOfficeId: "",
  dealerTypeId: "",
  capacityId: "",
  //STEP2-> İLETİŞİM
  email: "",
  fax: "",
  phone1: "",
  phone2: "",
  //STEP3-> YÖNETİCİ(KULLANICI)
  firstname: "",
  professionId: "",
  lastname: "",
  identityNo: "",
  username: "",
  ownerEmail: "",
  phone: "",

  //STEP4-> ADRES
  addressName: "",
  cityId: "",
  townId: "",
  neighborhoodId: "",
  addressLine: "",
  isPrimaryAddress: true,
  relationGuid: newGuid

};


export function DealerEdit({
  history,
  match: {
    params: { id },
  },
}) {

  // Dealers UI Context
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const [isFirstPage, setIsFirtPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading, dealerForEdit, dealersForCombo, taxOffices, users, professions, cities, towns, neighborhoods, currentUser } = useSelector(
    (state) => ({
      currentUser: state.auth.user,
      actionsLoading: state.dealers.actionsLoading,
      dealerForEdit: state.dealers.dealerForEdit,
      dealersForCombo: state.dealers.entitiesForCombo,
      taxOffices: state.taxOffices.entities,
      professions: state.professions.entities,
      cities: state.main.cities.entities,
      towns: state.main.towns.entities,
      neighborhoods: state.main.neighborhoods.entities,
      users: state.dealers.usersOfDealer
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchDealer(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "Yeni Bayi"
    if (dealerForEdit && id) {
      _title = format("Bayi Güncelle -'{0}'", `${dealerForEdit.name}`);
    }
    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealerForEdit, id]);

  const saveDealer = (values) => {
    if (!id) {
        const dealerWizardDto ={
          dealer:{
            parentId: +values.parentId,
            name: values.dealerName,
            taxIdentityNo: values.taxIdentityNo,
            taxOfficeId: +values.taxOfficeId,
            dealerTypeId: +values.dealerTypeId,
            capacityId: +values.capacityId,
            email: values.email,
            fax: values.fax,
            phone1: values.phone1,
            phone2: values.phone2,
            guid: values.guid
          },
          adminUser : {
            email: values.ownerEmail,
            identityNo: values.identityNo,
            firstname: values.firstname,
            lastname: values.lastname,
            username: values.username,
            professionId: +values.professionId,
            phone: values.ownerTel
          },
          address : {
            isPrimaryAddress:true,
            name: values.addressName,
            cityId: +values.cityId,
            townId: +values.townId,
            neighborhoodId: +values.neighborhoodId,
            addressLine: values.addressLine,
            relationGuid: values.guid
          }
        } 
        dispatch(actions.createDealer(dealerWizardDto)).then((resp) => {
          backToDealersList()
        })
       
    } else {
      //TODO: SELECT companenti value type her zaman string dönüyor, eğer number dönerse bu kod bloğuna ihtiyacç kalmaz...
      values.parentId = +values.parentId;
      values.dealerTypeId = +values.dealerTypeId;
      values.capacityId = +values.capacityId;
      values.taxOfficeId = +values.taxOfficeId;
      dispatch(actions.updateDealer(values))//.then(() => );
      backToDealersList()
    }
  };

  const handleReset = (values) => {
    if (values.id) {
      values = dealerForEdit
    } else {
    }
  };
  const btnSave = useRef();
  const btnReset = useRef();
  const btnPrevious = useRef();
  const btnNext = useRef();

  const handleResetClick = () => {
    if (btnReset && btnReset.current)
    {
      btnReset.current.click();
      
      //AMAÇ: Eğer bu blok olmazsa reset fonksiyonu WizardPage'i başa alıyor ama componentleri temizlemiyor ikinci reset click'e ihtiyac duyuyoruz
      setTimeout(() => {
        btnReset.current.click();
      }, 100);
    }
  };

  const saveDealerClick = () => {
    if (btnSave && btnSave.current)
        btnSave.current.click();
  };

  const previousClick = () => {
    if (btnPrevious && btnPrevious.current){
      const nextPageOrder=parseInt(btnNext.current.dataset.page)+1;
      setIsFirtPage(nextPageOrder===0)
      setIsLastPage(btnNext.current.dataset.pagecount-1==nextPageOrder)
        btnPrevious.current.click();
    }
    
  };
  const nextClick = () => {
    if (btnNext && btnNext.current){
      const nextPageOrder=parseInt(btnNext.current.dataset.page)+1;
      setIsFirtPage(nextPageOrder===0)
      setIsLastPage(btnNext.current.dataset.pagecount-1==nextPageOrder)
      btnNext.current.click();
    }
  };
  const backToDealersList = () => {
    history.push(`/system/dealers`);
  };



  if (currentUser.dealer === undefined && currentUser.dealer.isManager) {
    alert("Bayi Ekleme Yetkiniz Yok!!!");
    backToDealersList();
  }
  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToDealersList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i> Listeye Dön
          </button>
          {`  `}
          <button
            className="btn btn-light ml-2"
            onClick={handleResetClick}
          >
            <i className="fa fa-redo"></i> Reset
          </button>
          {`  `}
          {!isFirstPage && (
            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-outline-primary ml-2"
              onClick={previousClick}
            >
              <i className="fa fa-arrow-left"></i> Geri
            </button>)}

          {`  `}
          {!isLastPage && !id && (

            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-outline-primary ml-2"
              onClick={nextClick}
            >
              İleri <i className="fa fa-arrow-right"></i> 
            </button>
          )}

          {`  `}
          {isLastPage || id && (

            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-primary ml-2"
              onClick={saveDealerClick}
            >
              Kaydet
            </button>
          )}

        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {!id  &&(<>
          <DealerEditForm
            actionsLoading={actionsLoading}
            dealer={initDealer}
            btnSave={btnSave}
            btnReset={btnReset}
            btnPrevious={btnPrevious}
            btnNext={btnNext}
            saveDealer={saveDealer}
            handleReset={handleReset}
            taxOffices={taxOffices}
            professions={professions}
            cities={cities}
            towns={towns}
            neighborhoods={neighborhoods}
            dealersForCombo={dealersForCombo}
          /></>) }
          {dealerForEdit&&(
            <>
            <ul className="nav nav-tabs nav-tabs-line " role="tablist">
              <li className="nav-item" onClick={() => setTab("basic")}>
                <a className={`nav-link ${tab === "basic" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "basic")}
                >
                  {dealerForEdit?.dealerTypeId == 1 ? "Bayi"
                    : dealerForEdit?.dealerTypeId == 2 ? "Galeri"
                      : "Bayi&Galeri"}
                </a>
              </li>
              <li className={`nav-item ${dealerForEdit?.dealerTypeId == 1 && "offcanvas"}`} onClick={() => setTab("stocks")}>
                <a
                  className={`nav-link ${tab === "stocks" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "stocks")}
                >
                  Stokları
                </a>
              </li>
              <li className={`nav-item ${dealerForEdit?.dealerTypeId == 2 && "offcanvas"}`} onClick={() => setTab("galleries")}>
                <a
                  className={`nav-link ${tab === "galleries" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "galleries")}
                >
                  Galerileri
                </a>
              </li>
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
              <li className="nav-item" onClick={() => setTab("addresses")}>
                <a
                  className={`nav-link ${tab === "addresses" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "addresses")}
                >
                  Adresleri
                </a>
              </li>
            </ul>
            <div className="mt-5">
              {tab === "basic" && (
                <DealerEditForm
                  actionsLoading={actionsLoading}
                  dealer={dealerForEdit || initDealer}
                  btnSave={btnSave}
                  btnReset={btnReset}
                  saveDealer={saveDealer}
                  handleReset={handleReset}
                  taxOffices={taxOffices}
                  users={users}
                  professions={professions}
                  cities={cities}
                  towns={towns}
                  neighborhoods={neighborhoods}
                />
              )}
              {tab === "stocks" && id && (
                <StocksUIProvider currentDealerId={id}>
                  <Stocks />
                </StocksUIProvider>
              )}
              {tab === "galleries" && id && (
                <GalleriesUIProvider currentDealerId={id}>
                  <Galleries />
                </GalleriesUIProvider>
              )}
              {tab === "users" && id && (
                <UsersUIProvider currentDealerId={id}>
                  <Users />
                </UsersUIProvider>
              )}
              {tab === "addresses" && id && (
                <AddressesUIProvider guid={dealerForEdit.guid}>
                  <Addresses />
                </AddressesUIProvider>
              )}
            </div>
          </>
          )}
      </CardBody>
    </Card>
  );
}
