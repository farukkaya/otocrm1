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



const initDealer = {

  //STEP1-> BAYİ
  guid: generateGuid(),
  dealerName: "",
  taxIdentityNo: "",
  taxOfficeId: undefined,
  dealerTypeId: undefined,
  //STEP2-> İLETİŞİM
  email: "",
  fax: "",
  phone1: "",
  phone2: "",
  //STEP3-> YÖNETİCİ(KULLANICI)
  firstName: "",
  professionId: "1",
  lastName: "",
  identityNo: "",
  username: "",
  ownerEmail: "",
  phone: "",

  //STEP4-> ADRES
  addressName: "",
  cityId: undefined,
  townId: undefined,
  neighborhoodId: undefined,
  addressLine: "",

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
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading, dealerForEdit, dealersForCombo,taxOffices, users, professions, cities, towns, neighborhoods, currentUser } = useSelector(
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
    dispatch(actions.fetchUsersByDealer(id));
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
      dispatch(actions.createDealer(values))
      backToDealersList()
    } else {
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
  const btnRef = useRef();
  const btnReset = useRef();

  const handleResetClick = () => {
    if (btnReset && btnReset.current) {
      btnReset.current.click();
    }
  };

  const saveDealerClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
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
          {id && (
            <>

              {`  `}
              <button
                type="submit"
                data-wizard-type="action-submit"
                className="btn btn-primary ml-2"
                onClick={saveDealerClick}
              >
                Kaydet
            </button>
            </>
          )}

        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {id === undefined ? (<>
          <DealerEditForm
            actionsLoading={actionsLoading}
            dealer={initDealer}
            btnRef={btnRef}
            history={history}
            btnReset={btnReset}
            saveDealer={saveDealer}
            handleReset={handleReset}
            taxOffices={taxOffices}
            users={users}
            professions={professions}
            cities={cities}
            towns={towns}
            neighborhoods={neighborhoods}
            dealersForCombo={dealersForCombo}
          /></>) : (<>
            <ul className="nav nav-tabs nav-tabs-line " role="tablist">
              <li className="nav-item" onClick={() => setTab("basic")}>
                <a className={`nav-link ${tab === "basic" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "basic")}
                >
               {dealerForEdit?.dealerTypeId == 1  ? "Bayi"
              : dealerForEdit?.dealerTypeId == 2 ? "Galeri"
              : "Bayi&Galeri" }
                  </a>
              </li>
              {/* {dealerForEdit?.dealerTypeId !== 1 && (  )} */}
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
            </ul>
            <div className="mt-5">
              {tab === "basic" && (
                <DealerEditForm
                  actionsLoading={actionsLoading}
                  dealer={dealerForEdit || initDealer}
                  btnRef={btnRef}
                  history={history}
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
            </div>
          </>)}

      </CardBody>
    </Card>
  );
}
