// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; import {
    Button
} from "react-bootstrap";
import { FileUpload, Input, Select, CurrencyInput } from "../../../../../../_metronic/_partials/controls";
import { DokaDropzone } from "../../../../../../_metronic/layout/components/extras/DokaDropzone";
import { Wizard } from "../../../../../../_metronic/layout/components/extras/wizards/Wizard";
import { format } from 'react-string-format';
import * as mainActions from "../../../_redux/_main/mainActions"
import * as actions from "../../../_redux/stocks/stocksActions"


import { LENGTH, MIN_LENGTH, MAX_LENGTH, DIGIT_CONTROL, REQUIRED } from "../../../../../validations/validMessages";
import { CaseTypes, GearTypes, FuelTypes, CarColors, FromWhoTitles, Sources, arrayProgress, EngineCapacities, EnginePowers, DocumentTypes, TramerTypes } from "../StocksUIHelper";
import DocumentsTable from "./stock-documents/Documents";
import { ExpertiseForm } from "./stock-expertise/ExpertiseForm";


const stockSchema = {
    categoryId: Yup.number()
        .required(format(REQUIRED, "Kategori")),
    brandId: Yup.number()
        .required(format(REQUIRED, "Marka")),
    modelId: Yup.number()
        .required(format(REQUIRED, "Model")),
    modelTypeId: Yup.number()
        .required(format(REQUIRED, "Model Tipi")),
    year: Yup.string()
        .matches(/^[0-9]+$/, DIGIT_CONTROL)
        .length(4, format(LENGTH, "Model Yılı", "4"))
        .required(format(REQUIRED, "Model Yıl")),
    caseTypeId: Yup.number()
        .required(format(REQUIRED, "Kasa Tipi")),
    gearTypeId: Yup.number()
        .required(format(REQUIRED, "Vites Tipi")),
    fuelTypeId: Yup.number()
        .required(format(REQUIRED, "Yakıt Tipi")),
    colorId: Yup.number()
        .required(format(REQUIRED, "Renk")),
    plateNo: Yup.string()
        .min(7, format(MIN_LENGTH, "7"))
        .max(10, format(MAX_LENGTH, "10"))
        .required(format(REQUIRED, "Plaka")),
    kilometer: Yup.string()
        .required(format(REQUIRED, "Kilometre")),
    enginePowerId: Yup.string()
        .required(format(REQUIRED, "Motor Gücü")),
    engineCapacityId: Yup.string()
        .required(format(REQUIRED, "Motor Hacmi")),
    vinNo: Yup.string()
        .length(17, format(LENGTH, "Şase No", "17"))
        .required(format(REQUIRED, "Şase No")),
    engineNo: Yup.string()
        .length(15, format(LENGTH, "Motor No", "15"))
        .required(format(REQUIRED, "Motor No")),
    fromWhoId: Yup.number()
        .required(format(REQUIRED, "Kimden")),
    purchaseTypeId: Yup.number()
        .required(format(REQUIRED, "Alım Türü")),
}
const stockPricingSchema = {
    buyingPrice: Yup.string()
        //.matches(/^[0-9]+$/, DIGIT_CONTROL)
        .min(2, format(MIN_LENGTH, "2"))
        .max(150, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Alış Fiyatı")),

    sellingPrice: Yup.string()
        // .matches(/^[0-9]+$/, DIGIT_CONTROL)
        .min(2, format(MIN_LENGTH, "2"))
        .max(50, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Satış Fiyatı")),

    // insuranceValue: Yup.string()
    //     .matches(/^[0-9]+$/, DIGIT_CONTROL)
    //     .min(2, format(MIN_LENGTH, "2"))
    //     .max(50, format(MAX_LENGTH, "50"))
    //     .required(format(REQUIRED, "Kasko Değeri")),
}
const StockEditSchema = Yup.object().shape({ ...stockSchema, ...stockPricingSchema });

const Step1Schema = Yup.object().shape(stockSchema);
const Step2Schema = Yup.object().shape(stockPricingSchema);
const Step3Schema = Yup.object().shape({
    tramerTypeId: Yup.number()
        .required(format(REQUIRED, "Kimden")),
    tramerValue: Yup.string()
        //  .matches(/^[0-9]+$/, DIGIT_CONTROL)
        .min(2, format(MIN_LENGTH, "2"))
        .max(150, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Toplam Tramer")),
});
const Step4Schema = Yup.object().shape({
    documentTypeId: Yup.number()
        .required(format(REQUIRED, "Belge Tipi")),
    name: Yup.string()
        .min(2, format(MIN_LENGTH, "2"))
        .max(150, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Belge Adı")),
});
const Step5Schema = Yup.object().shape({
    addressName: Yup.string()
        .min(2, format(MIN_LENGTH, "2"))
        .max(150, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Adres Adı")),
    cityId: Yup.number()
        .required(format(REQUIRED, "İl")),
    townId: Yup.number()
        .required(format(REQUIRED, "İlçe")),
    addressLine: Yup.string()
        .min(10, format(MIN_LENGTH, "10"))
        .max(500, format(MAX_LENGTH, "500"))


});

const schemaArray = [Step1Schema, Step2Schema, Step3Schema, Step4Schema, Step5Schema];
  //TODO: adorments Globale taşınacak 
const adorments = {
    priceAdorment: {
        endAdorment: {
            icon: "fas fa-lira-sign",
            type: "icon",
            style: { color: "GrayText" }
        }
    },
    enginePowerAdorment: {
        endAdorment: {
            icon: "HP",
            type: "text",
            style: { color: "GrayText" }
        }
    },
    engineCapacityAdorment: {
        endAdorment: {
            icon: "CC",
            type: "text",
            style: { color: "GrayText" }
        }
    },
}
export function StockEditForm({
    stock,
    btnRef,
    btnReset,
    saveStock,
    handleReset,
    categories,
    brands,
    models,
    modelTypes,
    insuranceValue

}) {
    const dispatch = useDispatch();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [expertiseValues, setExpertiseValues] = useState(stock.expertiseValues)
    const [documents, setDocuments] = useState(stock.documents)
    const [images, setImages] = useState(stock.images)
    const [disabledValue, setDisabledValue] = useState(true)
    const [attachment, setAttachment] = useState({})

    return (
        stock.id === undefined ? (
            
            <Wizard
                initialValues={stock}
                arrayProgress={arrayProgress}
                schemaArray={schemaArray}
                onReset={(values) => handleReset(values)}
                onSubmit={(values, formActions) => {
                    sleep(300).then(() => {
                    
                        const formData=new FormData();
                        formData.append('documents',JSON.stringify(values.documents))
                        dispatch(actions.createStock(formData)).then((resp) => {
                            //backToDealersList()
                              // dispatch(actions.fetchDealers(deal.queryParams));
                              // //clear selections list
                              // customersUIProps.setIds([]);
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
                                    <div className="col-lg-4">
                                        <Field
                                            name="plateNo"
                                            component={Input}
                                            placeholder="Plaka"
                                            label="Plaka"
                                            style={{ textTransform: 'uppercase' }}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="kilometer"
                                            component={Input}
                                            placeholder="Kilometre"
                                            label="Kilometre"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="year"
                                            component={Input}
                                            placeholder="Model Yılı"
                                            label="Yıl"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">


                                    <div className="col-lg-3">
                                        <Select name="categoryId" label="Kategori"
                                            options={categories}
                                            onFocus={(e) => {
                                                dispatch(mainActions.fetchAllVehicleCategory());
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="brandId" label="Marka" options={brands}
                                            onFocus={(e) => {
                                                dispatch(mainActions.fetchAllVehicleBrand());
                                            }}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                props.setFieldValue("brandId", value);
                                                props.setFieldValue("modelId", "");
                                                dispatch(mainActions.fetchAllVehicleModel(props.values.categoryId, value));
                                            }} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="modelId" label="Model" options={models}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                props.setFieldValue("modelId", value);
                                                props.setFieldValue("modelTypeId", "");
                                                dispatch(mainActions.fetchAllVehicleModelType(value));
                                            }} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="modelTypeId" label="Model Tipi" options={modelTypes}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const { brandCode, typeCode } = modelTypes.find(q => q.id == value);
                                                props.setFieldValue("modelTypeId", value);
                                                dispatch(actions.fetchInsuranceValue(props.values.year, brandCode, typeCode));
                                            }} />
                                    </div>

                                </div>

                                <div className="form-group row">
                                    <div className="col-lg-3">
                                        <Select name="caseTypeId" label="Kasa Tipi" options={CaseTypes} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="gearTypeId" label="Vites Tipi" options={GearTypes} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="fuelTypeId" label="Yakıt Tipi" options={FuelTypes} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="colorId" label="Renk" options={CarColors} />
                                    </div>

                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Select name="enginePowerId" label="Motor Gücü" options={EnginePowers} />
                                    </div>
                                    <div className="col-lg-6">
                                        <Select name="engineCapacityId" label="Motor Hacmi" options={EngineCapacities} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Field
                                            name="vinNo"
                                            component={Input}
                                            placeholder="Şase No"
                                            label="Şase No"
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <Field
                                            name="engineNo"
                                            component={Input}
                                            placeholder="Motor No"
                                            label="Motor No"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Select name="fromWhoId" label="Kimden" options={FromWhoTitles} />
                                    </div>
                                    <div className="col-lg-6">
                                        <Select name="purchaseTypeId" label="Alım Türü" options={Sources} />
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </Wizard.Page>
                <Wizard.Page>
                    {props => {
                        console.log(props, "this props 2");

                        props.values.insuranceValue = insuranceValue;

                        return (
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 2).description}</h4>

                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Field
                                            name="buyingPrice"
                                            component={CurrencyInput}
                                            placeholder="Alış Fiyatı"
                                            label="Alış Fiyatı"
                                            adornment={adorments.priceAdorment}

                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <Field
                                            name="sellingPrice"
                                            component={CurrencyInput}
                                            placeholder="Satış Fiyatı"
                                            label="Satış Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Field
                                            name="minPrice"
                                            component={CurrencyInput}
                                            placeholder="Min. Satış Fiyatı"
                                            label="Min. Nakit Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <Field
                                            name="maxPrice"
                                            component={CurrencyInput}
                                            placeholder="Max. Satış Fiyatı"
                                            label="Max. Satış Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-12">
                                        <Field
                                            name="insuranceValue"
                                            component={CurrencyInput}
                                            fixedDecimalLength="2"
                                            placeholder="Kasko Değeri"
                                            disabled={insuranceValue !== undefined || ""}
                                            label="Kasko Değeri"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                </div>

                            </div>
                        );
                    }}
                </Wizard.Page>
                <Wizard.Page className="pl-40 pr-20 col-md-12">
                    {props => {
                        props.values.expertiseValues=expertiseValues;

                        console.log(props, "this props 3");
                        return (
                            <div className="page-form pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 3).description}</h4>

                                <ExpertiseForm expertiseValues={expertiseValues} setValues={setExpertiseValues} />
                                <br />
                                <br />
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Select name="tramerTypeId" label="Tramer Tipi" options={TramerTypes}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                props.setFieldValue("tramerTypeId",value)
                                                props.setFieldValue("tramerValue", value == "2" ? 0 : undefined)
                                                setDisabledValue(value == "2" || value == "3")

                                            }
                                            } />
                                    </div>
                                    <div className="col-lg-6">
                                        <Field
                                            name="tramerValue"
                                            component={CurrencyInput}
                                            disabled={disabledValue}
                                            placeholder="Toplam Tramer"
                                            label="Toplam Tramer"
                                            adornment={adorments.priceAdorment}

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
                        props.values.documents=documents;
                        let id=0;
                        const addDocument = () => {
                            const { name, validityDate, description } = props.values;
                            id++;
                            const formData = new FormData();
                            formData.append("id",id);
                            formData.append("name",name);
                            formData.append("validityDate",validityDate);
                            formData.append("description",description);
                            formData.append("path",attachment.name.split('.').slice(0, -1).join('.'));
                            formData.append("attachment",attachment);
                            
                            documents.push(formData)
                            setDocuments(documents)
                            props.setFieldValue("documentTypeId", undefined)
                            props.setFieldValue("name", undefined)
                            props.setFieldValue("decription", undefined)
                            props.setFieldValue("validityDate", undefined)
                            //props.setFieldValue("path", undefined)
                        }
                        return (
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 4).description}</h4>
                                <form autoComplete={false} noValidate> 

                            
                                <div className="form-group row">
                                    <div className="col-lg-4">
                                        <Select name="documentTypeId" label="Belge Tipi"
                                            options={DocumentTypes}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                props.setFieldValue("documentTypeId", value);
                                                if (value != 4) props.setFieldValue("name", DocumentTypes.find(q => q.id == value).name);
                                                else props.setFieldValue("name", "");
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="name"
                                            component={Input}
                                            disabled={props.values.documentTypeId != 4}
                                            placeholder="Belge Adı"
                                            label="Belge Adı"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="decription"
                                            component={Input}
                                            placeholder="Açıklama"
                                            label="Açıklama"
                                        />
                                    </div>

                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-4">
                                        <Field
                                            name="validityDate"
                                            component={Input}
                                            type="date"
                                            placeholder="Geçerlilik Tarihi"
                                            min={new Date().toJSON().split('T')[0]}
                                            label="Geçerlilik Tarihi"
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <Field
                                            name="file"
                                            component={Input}
                                            type="file"
                                            placeholder="Belge"
                                            label="Belge"
                                            accept="image/png, image/jpeg,application/pdf"
                                            onChange={e => setAttachment(e.currentTarget.files[0])}
                                        />
                                    </div>

                                    <div className="col-lg-1">
                                        <Button variant="danger" className="mt-10" size="sm" onClick={addDocument}>
                                            Ekle
                                    </Button>
                                    </div>
                                </div>
                                </form>
                                  <div className="form-group row">
                                    <DocumentsTable documents={documents} />
                                </div>
                            </div>
                        );
                    }}
                </Wizard.Page>
          
                <Wizard.Page>
                    {props => {
                        props.values.images=images;
                        console.log(props, "this props 5");
                        return (
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 5).description}</h4>
                                <DokaDropzone images={images} setImages={setImages} />
                            </div>
                        );
                    }}
                </Wizard.Page>
                <Wizard.Page>
                    {props => {
                        return (
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                {/*begin::Section*/}
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 6).description}</h4>
                                <h6 className="font-weight-bolder mb-3">{arrayProgress.find(q => q.id === 1).title}:</h6>

                            </div>
                        );
                    }}
                </Wizard.Page>
            </Wizard>

        ) : (
            <Formik
                enableReinitialize={true}
                initialValues={stock}
                validationSchema={StockEditSchema}
                onSubmit={(values) => saveStock(values)}
                onReset={(values) => handleReset(values)}
            >
                {({ handleSubmit, handleReset, setFieldValue }) => (
                    <>
                        <Form className="form form-label-right">
                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <Select name="brandId" label="Marka" options={brands}
                                        onChange={(e) => {
                                            const { value } = e.target;

                                            setFieldValue("brandId", value);
                                            setFieldValue("modelId", "");
                                        }} />
                                </div>
                                <div className="col-lg-4">
                                    <Select name="modelId" label="Model" options={models} />
                                </div>
                                <div className="col-lg-4">
                                    <Field
                                        name="year"
                                        component={Input}
                                        placeholder="Model Yılı"
                                        label="Yıl"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <Select name="caseTypeId" label="Kasa Tipi" options={CaseTypes} />
                                </div>
                                <div className="col-lg-3">
                                    <Select name="gearTypeId" label="Vites Tipi" options={GearTypes} />
                                </div>
                                <div className="col-lg-3">
                                    <Select name="fuelTypeId" label="Kasa Tipi" options={FuelTypes} />
                                </div>
                                <div className="col-lg-3">
                                    <Select name="colorId" label="Renk" options={CarColors} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <Field
                                        name="plateNo"
                                        component={Input}
                                        placeholder="Plaka"
                                        label="Plaka"
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Field
                                        name="kilometer"
                                        component={Input}
                                        placeholder="Kilometre"
                                        label="Kilometre"
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Select name="enginePower" label="Motor Gücü" options={EnginePowers} />
                                    {/* <Field
                                            name="enginePower"
                                            component={Input}
                                            placeholder="Motor Gücü"
                                            label="Motor Gücü"
                                            adornment={adorments.enginePowerAdorment}
                                        /> */}
                                </div>
                                <div className="col-lg-3">
                                    <Select name="engineCapacity" label="Motor Hacmi" options={EngineCapacities} />
                                    {/* <Field
                                            name="engineCapacity"
                                            component={Input}
                                            placeholder="Motor Hacmi"
                                            label=""
                                            adornment={adorments.engineCapacityAdorment}   /> */}


                                </div>

                            </div>
                            <div className="form-group row">
                                <div className="col-lg-6">
                                    <Field
                                        name="vinNo"
                                        component={Input}
                                        placeholder="Şase No"
                                        label="Şase No"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Field
                                        name="engineNo"
                                        component={Input}
                                        placeholder="Motor No"
                                        label="Motor No"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <Field
                                        name="buyingPrice"
                                        component={Input}
                                        placeholder="Alış Fiyatı"
                                        label="Alış Fiyatı"
                                        adornment={adorments.priceAdorment}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Field
                                        name="sellingPrice"
                                        component={Input}
                                        placeholder="Satış Fiyatı"
                                        label="Satış Fiyatı"
                                        adornment={adorments.priceAdorment}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Field
                                        name="cashSellingPrice"
                                        component={Input}
                                        placeholder="Nakit Fiyatı"
                                        label="Nakit Fiyatı"
                                        adornment={adorments.priceAdorment}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Field
                                        name="swapSellingPrice"
                                        component={Input}
                                        placeholder="Takas Fiyatı"
                                        label="Takas Fiyatı"
                                        adornment={adorments.priceAdorment}
                                    />
                                </div>

                            </div>
                            <div className="form-group row">
                                <div className="col-lg-6">
                                    <Select name="fromWhoId" label="Kimden" options={FromWhoTitles} />
                                </div>
                                <div className="col-lg-6">
                                    <Select name="purchaseTypeId" label="Alım Türü" options={Sources} />
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
                                ref={btnRef}
                                onSubmit={() => handleSubmit()}
                            ></button>
                        </Form>
                    </>
                )}
            </Formik>
        )
    );
}
