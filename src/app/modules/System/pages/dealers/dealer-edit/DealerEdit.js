/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSubheader } from "../../../../../../_metronic/layout";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/dealers/dealersActions";
import * as taxOfficesActions from "../../../_redux/taxOffices/taxOfficesActions"
import * as professionsActions from "../../../_redux/professions/professionsActions"
import * as citiesActions from "../../../_redux/_cities/citiesActions"
import * as townsActions from "../../../_redux/_towns/townsActions"
import * as neighborhoodsActions from "../../../_redux/_neighborhoods/neighborhoodsActions"
import * as usersActions from "../../../_redux/users/usersActions"
import * as addressesActions from "../../../_redux/addresses/addressesActions";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";
import {
  DealerTypeTitles
} from "../DealersUIHelpers";
import { Field } from "formik";
import * as Yup from "yup";
import { format } from 'react-string-format';

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { DealerEditForm } from "./DealerEditForm";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { Wizard } from "./Wizard";
import { v4 as generateGuid } from 'uuid';
import { Galleries } from "../dealer-galleries/Galleries";
import { GalleriesUIProvider } from "../dealer-galleries/GalleriesUIContext";


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
  tel1: "",
  tel2: "",
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
  openAddress: "",

};

const arrayProgress = [
  {
    id: 1,
    title: "Bayi",
    description: "Bayi Bilgilerini Giriniz",
    icon: "/media/svg/icons/Home/Building.svg"
  },
  {
    id: 2,
    title: "Bayi İletişim",
    description: "Bayinin İletişim Bilgilerini Giriniz",
    icon: "/media/svg/icons/Communication/Adress-book1.svg"
  },
  {
    id: 3,
    title: "Bayi Yöneticisi",
    description: "Bayi için bir yönetici atayın",
    icon: "/media/svg/icons/Communication/Add-user.svg"
  },

  {
    id: 4,
    title: "Bayi Adres",
    description: "Bayinin Adres Bilgilerini Giriniz",
    icon: "/media/svg/icons/Map/Marker1.svg"
  },
  {
    id: 5,
    title: "Sonuç",
    description: "Bilgilerinizi kontrol ediniz",
    icon: "/media/svg/icons/Code/Done-circle.svg"
  }
];


const LENGTH = "Lütfen {0} {1} karakter uzunluğunda olmalıdır.";
const MIN_LENGTH = "En az {0} karakter giriniz";
const MAX_LENGTH = "En fazla {0} karakter giriniz";
const DIGIT_CONTROL = "Sadece sayısal karakter giriniz";
const REQUIRED = "{0} Zorunludur";
const Step1Schema = Yup.object().shape({
  dealerName: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Bayi Adı")),
  dealerTypeId: Yup.number()
    .required(format(REQUIRED, "Bayi Tipi")),
  taxIdentityNo: Yup.string()
    .matches(/^[0-9]+$/, DIGIT_CONTROL)
    .min(10, format(MIN_LENGTH, "10"))
    .max(11, format(MAX_LENGTH, "11"))
    .required(format(REQUIRED, "Vergi No")),

  taxOfficeId: Yup.string()
    .required(format(REQUIRED, "Vergi Dairesi")),
});
const Step2Schema = Yup.object().shape({
  email: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .email('Geçersiz E-Posta')
    .required(format(REQUIRED, "E-Posta")),

  tel1: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Telefon No.1")),

});
const Step3Schema = Yup.object().shape({
  ownerEmail: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .email('Geçersiz E-Posta')
    .required(format(REQUIRED, "E-Posta")),
  identityNo: Yup.string()
    .matches(/^[0-9]+$/, DIGIT_CONTROL)
    .length(11, format(LENGTH, "Kimlik No", "11"))
    .required(format(REQUIRED, "Kimlik No")),
  username: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Kullanıcı Adı")),
  firstName: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Ad")),

  lastName: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Soyad")),
  professionId: Yup.string()
    .required(format(REQUIRED, "Vergi Dairesi")),

});

const Step4Schema = Yup.object().shape({
  addressName: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Adres Adı")),
  cityId: Yup.number()
    .required(format(REQUIRED, "İl")),
  townId: Yup.number()
    .required(format(REQUIRED, "İlçe")),
  openAddress: Yup.string()
    .min(30, format(MIN_LENGTH, "30"))
    .max(500, format(MAX_LENGTH, "500"))


});

const schemaArray = [Step1Schema, Step2Schema, Step3Schema, Step4Schema];


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

  const { actionsLoading, dealerForEdit, taxOffices, users, professions, cities, towns, neighborhoods,currentUser } = useSelector(
    (state) => ({
      currentUser:state.auth.user,
      actionsLoading: state.dealers.actionsLoading,
      dealerForEdit: state.dealers.dealerForEdit,
      taxOffices: state.taxOffices.entities,
      professions: state.professions.entities,
      cities: state.cities.entities,
      towns: state.towns.entities,
      neighborhoods: state.neighborhoods.entities,
      users: state.dealers.usersOfDealer
    }),
    shallowEqual
  );

  // const getTowns = (e) => {
  //   dispatch(townsActions.fetchTownsByCity(e.target.value))

  //   return new Promise((resolve, reject) =>  resolve(towns));
  // };
  // const getNeighborhoods = (e) => {
  //   dispatch(neighborhoodsActions.fetchNeighborhoodsByTown(e.target.value))
  //   return new Promise((resolve, reject) =>  resolve(neighborhoods));
  // };
  useEffect(() => {
    dispatch(taxOfficesActions.fetchAllTaxOffice());
    dispatch(professionsActions.fetchAllProfession());
    dispatch(citiesActions.fetchAllCity());
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


  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const required = value => (value ? undefined : "Required");


  if(currentUser.dealer==undefined&&currentUser.dealer.isManager){
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

          {id && (
            <>
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
        {id === undefined
          ? <Wizard
            initialValues={initDealer}
            arrayProgress={arrayProgress}
            schemaArray={schemaArray}
            onSubmit={(values, formActions) => {
              sleep(300).then(() => {
                // window.alert(JSON.stringify(values, null, 2));
                const dealer = {
                  name: values.dealerName,
                  taxIdentityNo: values.taxIdentityNo,
                  taxOfficeId: values.taxOfficeId,
                  dealerTypeId: values.dealerTypeId,
                  email: values.email,
                  fax: values.fax,
                  tel1: values.tel1,
                  tel2: values.tel2,
                  guid: values.guid,
                }
                const adminUser = {
                  email: values.ownerEmail,
                  identityNo: values.identityNo,
                  firstName: values.firstName,
                  lastName: values.lastName,
                  username: values.username,
                  professionId: values.professionId,
                  tel1: values.ownerTel,
                  tel2: "",
                  relationGuid: values.guid,
                  relationTable: "Dealers"
                }
                const address = {
                  name: values.addressName,
                  cityId: values.cityId,
                  townId: values.townId,
                  neighborhoodId: values.neighborhoodId,
                  openAddress: values.openAddress,
                  relationGuid: values.guid,
                  relationTable: "Dealers"
                }
                dispatch(usersActions.createUser(adminUser)).then((response) => {
                  
                  dealer.adminId = response?.id;
                  dispatch(actions.createDealer(dealer)).then(() => {
                    dispatch(addressesActions.createAddress(address)).then(() => {
                      backToDealersList()
                      // dispatch(actions.fetchCustomers(customersUIProps.queryParams));
                      // // clear selections list
                      // customersUIProps.setIds([]);
                    })
                  })

                })


                formActions.setSubmitting(false);
              });
            }}

          >
            <Wizard.Page>
              {props => {
                console.log(props, "this props 1");
                return (
                  <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 1).description}</h4>
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Field
                          name="dealerName"
                          component={Input}
                          placeholder="Bayi Adı"
                          label="Bayi Adı"
                          value="Anka"
                        />
                      </div>
                      <div className="col-lg-6">
                        <Select name="dealerTypeId" label="Bayi Tipi" options={DealerTypeTitles} value={1} />

                      </div>

                    </div>
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Select name="taxOfficeId" label="Vergi Dairesi" options={taxOffices} autoSelect={false} value="3" />

                      </div>
                      <div className="col-lg-6">
                        <Field
                          name="taxIdentityNo"
                          component={Input}
                          placeholder="Vergi No"
                          label="Vergi No"
                          value="321365498754"
                        />
                      </div>
                    </div>

                  </div>
                );
              }}
            </Wizard.Page>
            <Wizard.Page>
              {props => {
                console.log(props, "this props 2");
                return (
                  <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 2).description}</h4>

                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Field
                          name="email"
                          component={Input}
                          placeholder="E-Posta"
                          label="E-Posta"
                          value="info@anka.com"
                        />
                      </div>
                      <div className="col-lg-6">
                        <Field
                          name="fax"
                          component={Input}
                          placeholder="Fax"
                          label="Fax"
                          value="02163259874"


                        />
                      </div>

                    </div>
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Field
                          name="tel1"
                          component={Input}
                          placeholder="Telefon No.1"
                          label="Telefon No.1"
                          value="05318540265"

                        />
                      </div>
                      <div className="col-lg-6">
                        <Field
                          name="tel2"
                          component={Input}
                          placeholder="Telefon No.2"
                          label="Telefon No.2"
                          value="05318540266"

                        />
                      </div>

                    </div>

                  </div>
                );
              }}
            </Wizard.Page>

            <Wizard.Page>
              {props => {
                console.log(props, "this props 3");
                return (
                  <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 3).description}</h4>
                    <div className="form-group row">
                      <div className="col-lg-4">
                        <Field
                          name="firstName"
                          component={Input}
                          placeholder="Ad"
                          label="Ad"
                          value="Bilal"
                        />
                      </div>
                      <div className="col-lg-4">
                        <Field
                          name="lastName"
                          component={Input}
                          placeholder="Soyad"
                          label="Soyad"
                          value="Öner"
                        />
                      </div>
                      <div className="col-lg-4">
                        <Select name="professionId" label="Meslek" options={professions} value="1" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Field
                          name="identityNo"
                          component={Input}
                          placeholder="Kimlik No"
                          label="Kimlik No"
                          value="1054569874"
                        />
                      </div>
                      <div className="col-lg-6">
                        <Field
                          name="username"
                          component={Input}
                          placeholder="Kullanıcı Adı"
                          label="Kullanıcı Adı"
                          value="bilal.oner"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Field
                          name="ownerEmail"
                          component={Input}
                          placeholder="E-Posta"
                          label="E-Posta"
                          value="bilal.oner@otocrm.com"
                        />
                      </div>
                      <div className="col-lg-6">
                        <Field
                          name="ownerTel"
                          component={Input}
                          placeholder="Telefon"
                          label="Telefon"
                          value="05348540225"

                        />
                      </div>

                    </div>

                  </div>
                );
              }}
            </Wizard.Page>
            <Wizard.Page>
              {props => {
                console.log(props, "this props 4");
                return (
                  <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 4).description}</h4>

                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Field
                          name="addressName"
                          component={Input}
                          placeholder="Merkez, Şube vb."
                          label="Adres Adı"
                          value="Merkez"

                        />
                      </div>
                      <div className="col-lg-6">
                        {/* <Field
                id="cityId"
                name="cityId"
                as="select"
                value={values.cityId}
                onChange={async e => {
                  const { value } = e.target;
                  const _towns = await getTowns(value);
                  console.log(_towns);
                  setFieldValue("cityId", value);
                  setFieldValue("townId", "");
                  setFieldValue("towns", _towns);
                }}
             /> */}
                        <Select
                          name="cityId"
                          label="İl"
                          options={cities}
                          onChange={(e) => {
                            const { value } = e.target;
                            dispatch(townsActions.fetchTownsByCity(value))
                            props.setFieldValue("cityId", value);
                            props.setFieldValue("townId", "");
                            props.setFieldValue("neighborhoodId", "");
                          }} />
                      </div>

                    </div>
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <Select
                          name="townId"
                          label="İlçe"
                          options={towns}
                          onChange={(e) => {
                            const { value } = e.target;
                            dispatch(neighborhoodsActions.fetchNeighborhoodsByTown(value))
                            props.setFieldValue("townId", value);
                            props.setFieldValue("neighborhoodId", "");
                          }} />
                        {/* onchange i kontrol et */}
                      </div>
                      <div className="col-lg-6">
                        <Select
                          name="neighborhoodId"
                          label="Mahalle"
                          options={neighborhoods} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-12">
                        <Field
                          type="textarea"
                          rows="4"
                          name="openAddress"
                          component={Input}
                          placeholder="Açık Adres"
                          label="Açık Adress"
                        />
                      </div>
                    </div>
                  </div>
                );
              }}
            </Wizard.Page>
            <Wizard.Page>
              {props => {
                const data = props.values;
                return (
                  <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                    {/*begin::Section*/}
                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 5).description}</h4>
                    <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id === 1).title}:</h6>
                    <div className="text-dark-50 line-height-lg">
                      <div><span>Bayi Adı:</span> {data.dealerName}</div>
                      <div><span>Bayi Tipi:</span> {DealerTypeTitles.find(q => q.id == data.dealerTypeId).name}</div>
                      <div><span>Bayi Dairesi:</span> {taxOffices.find(q => q.id == data.taxOfficeId).name}</div>
                      <div><span>Vergi No:</span> {data.taxIdentityNo}</div>
                    </div>
                    <div className="separator separator-dashed my-5"></div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id === 2).title}:</h6>
                    <div className="text-dark-50 line-height-lg">
                      <div><span>Adı:</span> {data.firstName}</div>
                      <div><span>Soyadı:</span> {data.lastName}</div>
                      <div><span>Kimlik No:</span> {data.identityNo}</div>
                      <div><span>Kullanıcı Adı:</span> {data.username}</div>
                      <div><span>E-Posta:</span> {data.ownerEmail}</div>
                      <div><span>Telefon:</span> {data.phone}</div>
                    </div>
                    <div className="separator separator-dashed my-5"></div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id === 3).title}:</h6>
                    <div className="text-dark-50 line-height-lg">
                      <div><span>E-Posta:</span> {data.email}</div>
                      <div><span>Fax:</span> {data.fax}</div>
                      <div><span>Telefon No.1:</span> {data.tel1}</div>
                      <div><span>Telefon No.2:</span> {data.tel2}</div>
                    </div>
                    <div className="separator separator-dashed my-5"></div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id === 4).title}:</h6>
                    <div className="text-dark-50 line-height-lg">
                      <div><span>Adres Adı:</span> {data.addressName}</div>
                      <div><span>İl:</span> {cities.find(q => q.id == data.cityId).name}</div>
                      <div><span>İlçe:</span> {towns.find(q => q.id == data.townId).name}</div>
                      <div><span>Mahalle:</span> {neighborhoods.find(q => q.id == data.neighborhoodId).name}</div>
                      <div><span>Açık Adres:</span> {data.openAddress}</div>
                    </div>
                    {/*end::Section*/}
                  </div>
                );
              }}
            </Wizard.Page>
          </Wizard>
          : (<>
            <ul className="nav nav-tabs nav-tabs-line " role="tablist">
              <li className="nav-item" onClick={() => setTab("basic")}>
                <a className={`nav-link ${tab === "basic" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "basic")}
                >
                  Bayi
                  </a>
              </li>
              <li className="nav-item" onClick={() => setTab("galleries")}>
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
                  btnReset={btnReset}
                  saveDealer={saveDealer}
                  handleReset={handleReset}
                  taxOffices={taxOffices}
                  users={users}
                />
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
          </>)
        }
      </CardBody>
    </Card>
  );
}
