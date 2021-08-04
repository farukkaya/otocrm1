// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { DashboardUpload, Input, Select, CurrencyInput } from "../../../../../../_metronic/_partials/controls";
import { Wizard } from "../../../../../../_metronic/layout/components/extras/wizards/Wizard";
import * as mainActions from "../../../_redux/_main/mainActions"
import * as actions from "../../../_redux/stocks/stocksActions"


import { format } from 'react-string-format';
import { LENGTH, MIN_LENGTH, MAX_LENGTH, DIGIT_CONTROL, REQUIRED } from "../../../../../validations/validMessages";
import { CaseTypes, GearTypes, FuelTypes, CarColors, FromWhoTitles, PurchaseTypes, arrayProgress, EngineCapacities, EnginePowers, TramerTypes } from "../StocksUIHelper";
import { ExpertiseForm } from "./stock-expertise/ExpertiseForm";
import { DocumentForm } from "./stock-documents/DocumentForm";
import DocumentsTable from "./stock-documents/Documents";
import {adorments} from '../../../../../utilities/constans';
import { DamageForm } from "./stock-damages/DamagesForm";
import DamagesTable from "./stock-damages/Damages";
const stockSchema = {
    categoryId: Yup.number()
        .required(format(REQUIRED, "Kategori")),
    brandId: Yup.number()
        .required(format(REQUIRED, "Marka")),
    modelId: Yup.number()
        .required(format(REQUIRED, "Model")),
    modelTypeId: Yup.number()
        .required(format(REQUIRED, "Model Tipi")),
    modelYear: Yup.string()
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
        .required(format(REQUIRED, "Tramer Tipi")),
    tramerValue: Yup.string()
        //.matches(/^[0-9]+$/, DIGIT_CONTROL)
        //.min(2, format(MIN_LENGTH, "2"))
        .max(25, format(MAX_LENGTH, "25"))
    //.required(format(REQUIRED, "Toplam Tramer")),
});

const schemaArray = [Step1Schema, Step2Schema, Step3Schema];

export function StockEditForm({
    stock,
    btnSave,
    btnNext,
    btnPrevious,
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

    useEffect(() => { 
        if(stock?.id){
            dispatch(mainActions.fetchAllVehicleCategory()).then(()=>{
                if(brands.length==0) dispatch(mainActions.fetchAllVehicleBrand()).then(()=>{
                   
                 if(models.length==0&&stock.categoryId&&stock.brandId) setTimeout(() => {
                    dispatch(mainActions.fetchAllVehicleModel(stock.categoryId,stock.brandId)).then(()=>{
                        if(modelTypes.length==0&&stock.modelId) setTimeout(() => {
                            dispatch(mainActions.fetchAllVehicleModelType(stock.modelId))
                        }, 1000);
                       })
                 }, 1000);
                })
               
             })
        }
      }, [dispatch]);
    const [stockExpertise, setStockExpertise] = useState(stock?.stockExpertise)
    const [documents, setDocuments] = useState(stock?.documents)
    const [damages, setDamages] = useState(stock?.stockDamages)
    const [images, setImages] = useState(stock?.images)
    const [disabledValue, setDisabledValue] = useState(true)
   
    return (

        stock&&(
            stock.id === undefined ? (
                <Wizard
                    initialValues={stock}
                    arrayProgress={arrayProgress}
                    schemaArray={schemaArray}
                    btnSave={btnSave}
                    btnNext={btnNext}
                    btnPrevious={btnPrevious}
                    btnReset={btnReset}
                    onReset={(values) => handleReset(values)}
                    onSubmit={(values, formActions) => saveStock(values)}
                >
                     
                  
                    <Wizard.Page>
                        {props => {
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
                                                name="modelYear"
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
                                                    dispatch(actions.fetchInsuranceValue(props.values.modelYear, brandCode, typeCode));
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
                                            <Select name="purchaseTypeId" label="Alım Türü" options={PurchaseTypes} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </Wizard.Page>
                    <Wizard.Page>
                        {props => {
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
                            props.values.stockExpertise = stockExpertise;
                            return (
                                <div className="page-form pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 3).description}</h4>
    
                                    <ExpertiseForm stockExpertise={stockExpertise} setValues={setStockExpertise} />
                                    <br />
                                    <br />
                                    <div className="form-group row">
                                        <div className="col-lg-6">
                                            <Select name="tramerTypeId" label="Tramer Tipi" options={TramerTypes}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    props.setFieldValue("tramerTypeId", value)
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
                    <Wizard.Page className="pl-40 pr-20 col-md-12">
                        {props => {
                            props.values.stockDamages = damages;
                            return (
                                <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                    <h4 className="mb-5 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 4).description}</h4>
                                    <span className="mb-5 font-weight-bold text-dark">Hasar Sorgulama için <a target="_blank" href="https://www.sigortam360.com/">buraya</a> tıklayınız.</span><br/><br/><br/>
                                    <DamageForm damages={damages} setDamages={setDamages} pageProps={props}/>
                                    <DamagesTable damages={damages} />
                                </div>
                            );
                        }}
                    </Wizard.Page>
                    <Wizard.Page className="pl-40 pr-20 col-md-12">
                        {props => {
                            props.values.documents = documents;
                            return (
                                <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 5).description}</h4>
                                    <DocumentForm documents={documents} setDocuments={setDocuments} transactionId={stock.transactionId} pageProps={props}/>
                                    <DocumentsTable documents={documents} />
                                </div>
                            );
                        }}
                    </Wizard.Page>
                   
                    <Wizard.Page>
                        {props => {
                            props.values.images = images;
                            return (
                                <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                    <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 6).description}</h4>
                                    <DashboardUpload images={images} setImages={setImages} transactionId={stock.transactionId} />
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
    
    
                                </div>
                            );
                        }}
                    </Wizard.Page>
                </Wizard >
    
            ) : (
                <Formik
                    enableReinitialize={true}
                    initialValues={stock}
                    validationSchema={StockEditSchema}
                    onSubmit={(values) => saveStock(values)}
                    onReset={(values) => handleReset(values)}
                >
                    {({ handleSubmit, handleReset, setFieldValue,values }) => (
                        <>
                            <Form className="form form-label-right">
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
                                                name="modelYear"
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
                                                setFieldValue("brandId", value);
                                                setFieldValue("modelId", "");
                                                dispatch(mainActions.fetchAllVehicleModel(values.categoryId, value));
                                            }} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="modelId" label="Model" options={models}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                setFieldValue("modelId", value);
                                                setFieldValue("modelTypeId", "");
                                                dispatch(mainActions.fetchAllVehicleModelType(value));
                                            }} />
                                    </div>
                                    <div className="col-lg-3">
                                        <Select name="modelTypeId" label="Model Tipi" options={modelTypes}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const { brandCode, typeCode } = modelTypes.find(q => q.id == value);
                                                setFieldValue("modelTypeId", value);
                                                dispatch(actions.fetchInsuranceValue(values.modelYear, brandCode, typeCode));
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
                                        <Select name="fuelTypeId" label="Kasa Tipi" options={FuelTypes} />
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
                                            name="minPrice"
                                            component={Input}
                                            placeholder="En Düşük Fiyatı"
                                            label="En Düşük Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <Field
                                            name="maxPrice"
                                            component={Input}
                                            placeholder="En Yüksek Fiyatı"
                                            label="En Yüksek Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
    
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Select name="fromWhoId" label="Kimden" options={FromWhoTitles} />
                                    </div>
                                    <div className="col-lg-6">
                                        <Select name="purchaseTypeId" label="Alım Türü" options={PurchaseTypes} />
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
        )
    );
}
