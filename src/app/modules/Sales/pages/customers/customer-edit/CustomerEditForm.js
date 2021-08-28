// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React,{useState} from "react";
import { StocksUIProvider } from "./customer-stocks/StocksUIContext";
import { Stocks } from "./customer-stocks/Stocks";

import { useDispatch } from "react-redux";
import * as mainActions from "../../../../System/_redux/_main/mainActions"
import { Notice } from "../../../../../../_metronic/_partials/controls";
import { Wizard } from "../../../../../../_metronic/layout/components/extras/wizards/Wizard";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { format } from 'react-string-format';
import {
  PAYMENTMETHODLIST,
  CUSTOMERSOURCELIST,
  arrayProgress,
  CUSTOMERTYPELIST
} from "../CustomersUIHelpers";
import {
  Input,
  Select
} from "../../../../../../_metronic/_partials/controls";
import { MIN_LENGTH, MAX_LENGTH, DIGIT_CONTROL, REQUIRED, LENGTH } from "../../../../../validations/validMessages";
import { StocksFetchDialog } from "./customer-stocks/StocksFetchDialog";

// Validation schema
const CustomerSchema = {


  firstName: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(50, format(MAX_LENGTH, "50"))
    .required(format(REQUIRED, "Müşteri Adı")),
  lastName: Yup.string()
    .when("customerTypeId", (customerTypeId, schema) => {
      if (customerTypeId == 1) {
        return schema
          .min(2, format(MIN_LENGTH, "2"))
          .max(50, format(MAX_LENGTH, "50"))
          .required(format(REQUIRED, "Müşteri Soyadı"))
      }
      return Yup.mixed().notRequired()

    }),

  identityNo: Yup.string()
    .when("customerTypeId", (customerTypeId, schema) => {
      if (customerTypeId == 1) {
        return schema.matches(/^[0-9]+$/, DIGIT_CONTROL)
          .length(11, format(LENGTH, "Kimlik No", "11"))
          .required(format(REQUIRED, "Kimlik No"))
      }
      return schema
        .matches(/^[0-9]+$/, DIGIT_CONTROL)
        .min(10, format(MIN_LENGTH, "10"))
        .max(11, format(MAX_LENGTH, "11"))
        .required(format(REQUIRED, "Vergi No"))
    }),

  advancePayment: Yup.string()
    .matches(/^[0-9]+$/, DIGIT_CONTROL)
    .required(format(REQUIRED, "Peşinat")),
  email: Yup.string()
    .max(150, format(MAX_LENGTH, "150"))
    .email('Geçersiz E-Posta')
    .required(format(REQUIRED, "E-Posta")),
  phone1: Yup.string()
    .min(2, format(MIN_LENGTH, "2"))
    .max(150, format(MAX_LENGTH, "150"))
    .required(format(REQUIRED, "Kişisel Telefon")),
  paymentMethodId: Yup.string()
    .required(format(REQUIRED, "Ödeme Tipi")),
  customerSourceId: Yup.string()
    .required(format(REQUIRED, "Müşteri Kaynağı")),

}
const CustomerEditSchema = Yup.object().shape(CustomerSchema);
const Step1Schema = Yup.object().shape({
  customerTypeId: Yup.number()
    .required(format(REQUIRED, "Müşteri Tipi"))
});
const Step2Schema = Yup.object().shape(CustomerSchema);
const Step3Schema = Yup.object().shape({
  // countryId: Yup.number()
  //   .required(format(REQUIRED, "Ülke")),
  cityId: Yup.number()
    .required(format(REQUIRED, "İl")),
  townId: Yup.number()
    .required(format(REQUIRED, "İlçe")),
  addressLine: Yup.string()
    .min(10, format(MIN_LENGTH, "10"))
    .max(500, format(MAX_LENGTH, "500"))
});

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const schemaArray = [Step1Schema, Step2Schema, Step3Schema];
export function CustomerEditForm({
  customer,
  btnSave,
  btnReset,
  btnPrevious,
  btnNext,
  saveCustomer,
  handleReset,
  currentDealerId,
  cities, towns, neighborhoods,
  openDetailStockPage
}) {
  const dispatch = useDispatch();
  const [selectedStocks, setSelectedStocks] = useState(customer.selectedStocks)

  return (
    customer.id == undefined ? (
      <StocksUIProvider currentDealerId={currentDealerId} openDetailStockPage={openDetailStockPage}>
       
        <Wizard
          initialValues={customer}
          arrayProgress={arrayProgress}
          schemaArray={schemaArray}
          btnSave={btnSave}
          btnNext={btnNext}
          btnPrevious={btnPrevious}
          btnReset={btnReset}
          onReset={(values) => handleReset(values)}
          onSubmit={(values) => saveCustomer(values)}>
   

          <Wizard.Page>
            {props => {
              console.log(props, "this props 1");
              return (
                <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>

                  <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 1).description}</h4>

                  <Notice icon="flaticon-warning font-primary">
                    <span>
                      Müşteri Tipi bilgisi <b>değiştirilemez</b> bir bilgidir.
                  </span>
                  </Notice>

                  <div className="form-group row">
                    <div className="col-xl-6">
                      <input type="radio" id="control_01" name="customerTypeId" value="1" checked={props.values.customerTypeId == 1}
                        onChange={event => {
                          event.persist()
                          const { id, name, value, type } = event.target
                          props.setFieldValue(name, value);
                        }} />
                      <label htmlFor="control_01" id="radio_customerType">
                        <div className="card card-custom card-stretch">
                          <div className="card-body d-flex align-items-center py-0 mt-8">
                            <div className="d-flex flex-column flex-grow-1 py-2 py-lg-5">
                              <span className="card-title font-weight-bolder text-dark-75 font-size-h5 mb-2 text-hover-primary">BİREYSEL</span>
                              <span className="font-weight-bold text-muted font-size-lg">Bireysel müşteri için bu kartı seçerek devam edebilirsiniz...</span>
                            </div>
                            <img src="/media/svg/avatars/004-boy-1.svg" alt="" className="align-self-end h-100px" />
                          </div>
                        </div>

                      </label>
                    </div>

                    <div className="col-xl-6">
                      <input type="radio" id="control_02" name="customerTypeId" value="2" checked={props.values.customerTypeId == 2}
                        onChange={event => {
                          event.persist()
                          const { id, name, value, type } = event.target
                          props.setFieldValue(name, value);
                        }} />
                      <label htmlFor="control_02" id="radio_customerType">
                        <div className="card card-custom card-stretch">
                          <div className="card-body d-flex align-items-center py-0 mt-8">
                            <div className="d-flex flex-column flex-grow-1 py-2 py-lg-5">
                              <span className="card-title font-weight-bolder text-dark-75 font-size-h5 mb-2 text-hover-primary">KURUMSAL</span>
                              <span className="font-weight-bold text-muted font-size-lg">Kurumsal müşteri için bu kartı seçerek devam edebilirsiniz...</span>
                            </div>
                            <img src="/media/svg/building.png" alt="" className="align-self-end h-100px" />
                          </div>
                        </div>

                      </label>
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
                    <div className={`${props.values.customerTypeId == 1 ? "col-lg-4" : "col-lg-6"}`}>
                      <Field
                        name="identityNo"
                        component={Input}
                        placeholder={props.values.customerTypeId == 1 ? "Kimlik No" : "Vergi No"}
                        label={props.values.customerTypeId == 1 ? "Kimlik No" : "Vergi No"}
                      />
                    </div>
                    <div className={`${props.values.customerTypeId == 1 ? "col-lg-4" : "col-lg-6"}`}>
                      <Field
                        name="firstName"
                        component={Input}
                        placeholder="Müşteri Adı"
                        label="Müşteri Adı"
                      />
                    </div>
                    {props.values.customerTypeId == 1 && (<div className="col-lg-4">
                      <Field
                        name="lastName"
                        component={Input}
                        placeholder="Müşteri Soyadı"
                        label="Müşteri Soyadı"
                      />
                    </div>)}

                  </div>
                  <div className="form-group row">
                    <div className="col-lg-4">
                      <Field
                        name="phone1"
                        component={Input}
                        placeholder="Kişisel Telefon"
                        label="Kişisel Telefon"
                      />
                    </div>
                    <div className="col-lg-4">
                      <Field
                        name="phone2"
                        component={Input}
                        placeholder="İş Telefonu"
                        label="İş Telefonu"
                      />
                    </div>
                    <div className="col-lg-4">
                      <Field
                        name="email"
                        component={Input}
                        placeholder="E-Posta"
                        label="E-Posta"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-lg-4">
                      <Field
                        name="advancePayment"
                        component={Input}
                        placeholder="Peşinat"
                        label="Peşinat"
                      />
                    </div>
                    <div className="col-lg-4">
                      <Select name="paymentMethodId" label="Ödeme Tipi" options={PAYMENTMETHODLIST} />

                    </div>
                    <div className="col-lg-4">
                      <Select name="customerSourceId" label="Kaynak" options={CUSTOMERSOURCELIST} />
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
                        onFocus={()=>dispatch(mainActions.fetchAllCity())}
                        onChange={(e) => {
                          const { value } = e.target;
                          dispatch(mainActions.fetchTownsByCity(value))
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
                          dispatch(mainActions.fetchNeighborhoodsByTown(value))
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
              console.log(props, "this props 4");
              return (
                <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                  <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 4).description}</h4>
                  <Stocks />
                </div>
              );
            }}
          </Wizard.Page>
          <Wizard.Page>
            {props => {
              console.log(props, "this props 5");
              const data = props.values;
              data.selectedStocks=selectedStocks;
              return (
                <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>

                  <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id == 5).description}</h4>
                  <div className="row">
                    {/*begin::Müşteri Bigileri*/}
                    <div className="col-md-6 margin-bottom-10-mobile">
                      <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id == 2).title}:</h6>
                      <div className="text-dark-50 line-height-lg">
                        <div><span><b>Müşteri Tipi: {CUSTOMERTYPELIST.find(q => q.id == data.customerTypeId).name}</b></span> </div>

                        <div><span><b>Müşteri Adı:</b></span> {data.firstName} {data.lastName}</div>


                        <div><span><b>Tc\Vergi No:</b></span> {data.identityNo}</div>
                        <div><span><b>Peşinat:</b></span> {`${parseFloat(data.advancePayment)} ₺`}</div>
                        <div><span><b>Email:</b></span> {data.email}</div>
                        <div><span><b>Kişisel Telefon:</b></span> {data.personalPhone}</div>
                        <div><span><b>Ödeme Tipi:</b></span> {PAYMENTMETHODLIST.find(q => q.id == data.paymentMethodId).name}</div>
                        <div><span><b>Müşteri Kaynağı:</b></span> {CUSTOMERSOURCELIST.find(q => q.id == data.customerSourceId).name}</div>
                      </div>
                    </div>
                    {/*end::Müşteri Bilgileri*/}

                    {/*begin::Müşteri Adres Bilgileri*/}
                    <div className="col-md-6 margin-bottom-10-mobile">
                      <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id == 3).title}:</h6>
                      <div className="text-dark-50 line-height-lg">
                        <div><span><b>Adres Adı:</b></span> {data.addressName}</div>
                        <div><span><b>İl:</b></span> {cities.find(q => q.id == data.cityId).name}</div>
                        <div><span><b>İlçe:</b></span> {towns.find(q => q.id == data.townId).name}</div>
                        <div><span><b>Mahalle:</b></span> {neighborhoods.find(q => q.id == data.neighborhoodId).name}</div>
                        <div><span><b>Açık Adres:</b></span> {data.addressLine}</div>
                      </div>
                    </div>
                    {/*end::Müşteri Adres Bilgileri*/}
                  </div>

                  <div className="separator separator-dashed my-5"></div>

                  {/*begin::Müşterinin İlgilendiği Araçlar*/}
                  <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id == 4).title}:</h6>
                  <div className="text-dark-50 line-height-lg">
                    <StocksFetchDialog setSelectedStocks={setSelectedStocks} />
                  </div>
                  {/*begin::Müşterinin İlgilendiği Araçlar*/}

                </div>
              );
            }}
          </Wizard.Page>
        </Wizard >
      </StocksUIProvider>
    ) : (
      <Formik
        enableReinitialize={true}
        initialValues={customer}
        validationSchema={CustomerEditSchema}
        onReset={(values) => handleReset(values)}
        onSubmit={(values) => saveCustomer(values)}
      >
        {({ handleSubmit, handleReset }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className={`${customer.customerTypeId == 1 ? "col-lg-4" : "col-lg-6"}`}>
                  <Field
                    name="identityNo"
                    component={Input}
                    placeholder={customer.customerTypeId == 1 ? "Kimlik No" : "Vergi No"}
                    label={customer.customerTypeId == 1 ? "Kimlik No" : "Vergi No"}
                  />
                </div>
                <div className={`${customer.customerTypeId == 1 ? "col-lg-4" : "col-lg-6"}`}>
                  <Field
                    name="firstName"
                    component={Input}
                    placeholder="Müşteri Adı"
                    label="Müşteri Adı"
                  />
                </div>
                {customer.customerTypeId == 1 ?
                  <div className="col-lg-4">
                    <Field
                      name="lastName"
                      component={Input}
                      placeholder="Müşteri Soyadı"
                      label="Müşteri Soyadı"
                    />
                  </div>
                  : <></>}

              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="phone1"
                    component={Input}
                    placeholder="Kişisel Telefon"
                    label="Kişisel Telefon"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="phone2"
                    component={Input}
                    placeholder="İş Telefonu"
                    label="İş Telefonu"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="email"
                    component={Input}
                    placeholder="E-Posta"
                    label="E-Posta"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="advancePayment"
                    component={Input}
                    placeholder="Peşinat"
                    label="Peşinat"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="paymentMethodId" label="Ödeme Tipi" options={PAYMENTMETHODLIST} />

                </div>
                <div className="col-lg-4">
                  <Select name="customerSourceId" label="Kaynak" options={CUSTOMERSOURCELIST} />
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
      </Formik>)

  );
}
