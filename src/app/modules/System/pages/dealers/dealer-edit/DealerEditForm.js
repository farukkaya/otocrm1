// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';
import { Wizard } from "../../../../../../_metronic/layout/components/extras/wizards/Wizard";
import { arrayProgress, DealerTypeTitles,CapacityTitles } from "../DealersUIHelpers"
import * as taxOfficesActions from "../../../_redux/taxOffices/taxOfficesActions"
import * as professionsActions from "../../../_redux/professions/professionsActions"
import * as mainActions from "../../../_redux/_main/mainActions"
import * as actions from "../../../_redux/dealers/dealersActions";
import{ 
 LENGTH,
 MIN_LENGTH ,
 MAX_LENGTH ,
 DIGIT_CONTROL,
 REQUIRED} from "../../../../../validations/validMessages";

export function DealerEditForm({
  dealer,
  btnSave,
  btnReset,
  btnPrevious,
  btnNext,
  saveDealer,
  handleReset,
  dealersForCombo,
  taxOffices,
  professions, cities, towns, neighborhoods
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if(dealer.id === undefined ){
      dispatch(taxOfficesActions.fetchAllTaxOffice())
     }
  }, [dispatch]);


  // Validation schema
  const DealerEditSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Bayi Adı")),
    dealerTypeId: Yup.string()
      .required(format(REQUIRED, "Bayi Tipi")),
    capacityId:Yup.string()
      .when("dealerTypeId", {
        is: value => value && value != 1, 
        then: Yup.string().required(format(REQUIRED, "Kapasite")),
        otherwise: Yup.string()
      }),
    taxIdentityNo: Yup.string()
      .matches(/^[0-9]+$/, DIGIT_CONTROL)
      .min(10, format(MIN_LENGTH, "10"))
      .max(11, format(MAX_LENGTH, "11"))
      .required(format(REQUIRED, "Vergi No")),
    taxOfficeId: Yup.string()
      .required(format(REQUIRED, "Vergi Dairesi")),
  });

  const Step1Schema = Yup.object().shape({
    dealerName: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Bayi Adı")),
    dealerTypeId: Yup.number()
      .required(format(REQUIRED, "Bayi Tipi")),
    capacityId:Yup.string()
      .when("dealerTypeId", {
        is: value => value && value !== 1, 
        then: Yup.string().required(format(REQUIRED, "Kapasite")),
        otherwise: Yup.string()
      }),
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
      .max(150, format(MAX_LENGTH, "150"))
      .email('Geçersiz E-Posta')
      .required(format(REQUIRED, "E-Posta")),

    phone1: Yup.string()
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
    firstname: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Ad")),

    lastname: Yup.string()
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
      .required(format(REQUIRED, "Adres Adı")),//TODO: İL ve İLÇE yi ata
    cityId: Yup.number()
      .required(format(REQUIRED, "İl")),
    townId: Yup.number()
      .required(format(REQUIRED, "İlçe")),
    addressLine: Yup.string()
      .min(10, format(MIN_LENGTH, "10"))
      .max(500, format(MAX_LENGTH, "500"))


  });

  const schemaArray = [Step1Schema, Step2Schema, Step3Schema, Step4Schema];

  //const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  //const required = value => (value ? undefined : "Required");
  // let showAlert=false;
  
  let IsDısabledCapacity=true;
  return (

    dealer.id === undefined ? (
      <Wizard
        initialValues={dealer}
        arrayProgress={arrayProgress}
        schemaArray={schemaArray}
        btnSave={btnSave}
        btnNext={btnNext}
        btnPrevious={btnPrevious}
        btnReset={btnReset}
        onReset={(values) => handleReset(values)}
        onSubmit={(values) => saveDealer(values)}
      >
        <Wizard.Page>
          {props => {
         
            return (
              <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
               {/* {
                 !IsDısabledCapacity&&(
                    <Alert variant="info" onClose={handleDismiss} dismissible>
                    <Alert.Heading>Düzenlenemez Alan!</Alert.Heading>
                    <p>
                      Bu alan yalnızca 'Galeri' ve 'Bayi-Galeri' Tipli kayıtlarda gereklidir.
                    </p>
                  </Alert>
                   )
                 
               } */}
                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 1).description}</h4>
                <div className="form-group row">
                  <div className="col-lg-6">
                  <Select name="dealerTypeId" label="Bayi Tipi" options={DealerTypeTitles}  
                    onChange={(e) => {
                      const { value } = e.target;
                      props.setFieldValue("dealerTypeId", +value);
                      props.setFieldValue("capacityId", value==1?"":+props.values.capacityId);
                      IsDısabledCapacity= value==1;
                    }} />

                  </div>
                  <div className="col-lg-6">
                    <Select name="capacityId" 
                            label="Kapasite" 
                            customFeedbackLabel="Galeri işlevi olan kayıtlar için"
                            disabled={IsDısabledCapacity}
                            options={CapacityTitles} 
                      />

                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="dealerName"
                      component={Input}
                      placeholder="Bayi Adı"
                      label="Bayi Adı"
                    />
                  </div>
                  <div className="col-lg-6">
                  <Select name="parentId" 
                            label="Üst Bayi" 
                            options={dealersForCombo} 
                            onFocus={(e)=>dispatch(actions.fetchDealersForCombo())} 
                           />
                  

                  </div>

                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Select name="taxOfficeId" 
                            label="Vergi Dairesi" 
                            options={taxOffices} 
                            autoSelect={false} 
                            onFocus={(e)=>dispatch(taxOfficesActions.fetchAllTaxOffice())}
                            />

                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="taxIdentityNo"
                      component={Input}
                      placeholder="Vergi No"
                      label="Vergi No"
                    />
                  </div>
                </div>

              </div>
            );
          }}
        </Wizard.Page>
        <Wizard.Page>
          {props => {
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
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="fax"
                      component={Input}
                      placeholder="Fax"
                      label="Fax"
                    />
                  </div>

                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="phone1"
                      component={Input}
                      placeholder="Telefon No.1"
                      label="Telefon No.1"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="phone2"
                      component={Input}
                      placeholder="Telefon No.2"
                      label="Telefon No.2"
                    />
                  </div>

                </div>

              </div>
            );
          }}
        </Wizard.Page>
        <Wizard.Page>
          {props => {
            return (
              <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 3).description}</h4>
                <div className="form-group row">
                  <div className="col-lg-4">
                    <Field
                      name="firstname"
                      component={Input}
                      placeholder="Ad"
                      label="Ad"
                    />
                  </div>
                  <div className="col-lg-4">
                    <Field
                      name="lastname"
                      component={Input}
                      placeholder="Soyad"
                      label="Soyad"
                    />
                  </div>
                  <div className="col-lg-4">
                    <Select name="professionId" label="Meslek" options={professions} onFocus={(e)=>{
                      dispatch(professionsActions.fetchAllProfession());
                    }}/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="identityNo"
                      component={Input}
                      placeholder="Kimlik No"
                      label="Kimlik No"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="username"
                      component={Input}
                      placeholder="Kullanıcı Adı"
                      label="Kullanıcı Adı"
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
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="ownerTel"
                      component={Input}
                      placeholder="Telefon"
                      label="Telefon"
                    />
                  </div>

                </div>

              </div>
            );
          }}
        </Wizard.Page>
        <Wizard.Page>
          {props => {
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
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select
                      name="cityId"
                      label="İl"
                      options={cities}
                      onFocus={(e)=>{
                        dispatch(mainActions.fetchAllCity());
                      }}
                      onChange={(e) => {
                        const { value } = e.target;
                        dispatch(mainActions.fetchTownsByCity(value))
                        props.setFieldValue("cityId", +value);
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
                        dispatch(mainActions.fetchNeighborhoodsByTown(value))
                        props.setFieldValue("townId", +value);
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
                      name="addressLine"
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
                  {
                    data.dealerTypeId!=1&&(
                      <div><span>Kapasite:</span> {CapacityTitles.find(q => q.id == data.capacityId)?.name|| "-"}</div>
                    )
                  }
                  <div><span>Bayi Dairesi:</span> {taxOffices.find(q => q.id == data.taxOfficeId).name}</div>
                  <div><span>Vergi No:</span> {data.taxIdentityNo}</div>
                </div>
                <div className="separator separator-dashed my-5"></div>
                {/*end::Section*/}
                {/*begin::Section*/}
              <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id === 2).title}:</h6>
                <div className="text-dark-50 line-height-lg">
                  <div><span>Adı:</span> {data.firstname}</div>

                  <div><span>Soyadı:</span> {data.lastname}</div>

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
                  <div><span>Telefon No.1:</span> {data.phone1}</div>
                  <div><span>Telefon No.2:</span> {data.phone2}</div>
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
                  <div><span>Açık Adres:</span> {data.addressLine}</div>
                </div>
                {/*end::Section*/}
              </div>
            );
          }}
        </Wizard.Page>

      </Wizard>

    ) : (<Formik
      enableReinitialize={true}
      initialValues={dealer}
      validationSchema={DealerEditSchema}
      onSubmit={(values) => saveDealer(values)}
      onReset={(values) => handleReset(values)}
    >
      {({ handleSubmit, handleReset,values,setFieldValue }) => (
        <>
          <Form className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-4">
                <Field
                  name="name"
                  component={Input}
                  placeholder="Bayi Adı"
                  label="Bayi Adı"
                />
              </div>
             
              <div className="col-lg-4">
                <Select name="dealerTypeId" label="Bayi Tipi" options={DealerTypeTitles} onChange={(e)=>{
                   const { value } = e.target;
                   setFieldValue("dealerTypeId", +value);
                   setFieldValue("capacityId", value==1?"":+dealer.capacityId);
                }} />
              </div>
              <div className="col-lg-4">
                {/* Bayi değilse, Galeri veya Bayi&Galeri ise DISABLED değil */}
            
                <Select name="capacityId" label="Kapasite" options={CapacityTitles} disabled={values.dealerTypeId==1} />
              </div>
            </div>
          
            <div className="form-group row">
              <div className="col-lg-6">
                
                <Select name="taxOfficeId" label="Vergi Dairesi" options={taxOffices} />
              </div>
              <div className="col-lg-6">
                <Field
                  name="taxIdentityNo"
                  component={Input}
                  placeholder="Vergi No"
                  label="Vergi No"
                />
              </div>
            </div>
            <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="email"
                      component={Input}
                      placeholder="E-Posta"
                      label="E-Posta"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="fax"
                      component={Input}
                      placeholder="Fax"
                      label="Fax"
                    />
                  </div>

                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="phone1"
                      component={Input}
                      placeholder="Telefon No.1"
                      label="Telefon No.1"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="phone2"
                      component={Input}
                      placeholder="Telefon No.2"
                      label="Telefon No.2"
                    />
                  </div>

                </div>

            <button
              type="reset"
              style={{ display: "none" }}
              ref={btnReset}
              onSubmit={() => handleReset()}
            ></button>
            <button
              type="submit"
              style={{ display: "none" }}
              ref={btnSave}
              onSubmit={() => handleSubmit()}
            ></button>
          </Form>
        </>
      )}
    </Formik>
      )
  );
}
