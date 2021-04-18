// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FileUpload, Input, Select } from "../../../../../../_metronic/_partials/controls";
import {DokaDropzone} from "../../../../../../_metronic/layout/components/extras/DokaDropzone";
import { Wizard } from "../../../../../../_metronic/layout/components/extras/wizards/Wizard";
import { format } from 'react-string-format';
import { LENGTH,MIN_LENGTH,MAX_LENGTH,DIGIT_CONTROL,REQUIRED} from "../../../../../validations/validMessages";
import { BrandList, ModelList, Years, CaseTypes, GearTypes, FuelTypes, CarColors, FromWhoTitles, Sources, arrayProgress } from "../StocksUIHelper";
export function StockEditForm({
    stock,
    btnRef,
    btnReset,
    saveStock,
    handleReset,
}) {

    const stockSchema = {
        brandId: Yup.number()
            .required(format(REQUIRED, "Marka")),
        modelId: Yup.number()
            .required(format(REQUIRED, "Model")),
        year: Yup.number()
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
        enginePower: Yup.string()
            .required(format(REQUIRED, "Motor Gücü")),
        engineCapacity: Yup.string()
            .required(format(REQUIRED, "Motor Hacmi")),
        vinNo: Yup.string()
            .length(17, format(LENGTH, "Şase No", "17"))
            .required(format(REQUIRED, "Şase No")),
        engineNo: Yup.string()
            .length(15, format(LENGTH, "Motor No", "15"))
            .required(format(REQUIRED, "Motor No")),
        fromWhoId: Yup.number()
            .required(format(REQUIRED, "Kimden")),
        sourceId: Yup.number()
            .required(format(REQUIRED, "Kaynak")),
    }
    const stockPricingSchema = {
        buyingPrice: Yup.string()
            .matches(/^[0-9]+$/, DIGIT_CONTROL)
            .min(2, format(MIN_LENGTH, "2"))
            .max(150, format(MAX_LENGTH, "50"))
            .required(format(REQUIRED, "Alış Fiyatı")),

        sellingPrice: Yup.string()
            .matches(/^[0-9]+$/, DIGIT_CONTROL)
            .min(2, format(MIN_LENGTH, "2"))
            .max(50, format(MAX_LENGTH, "50"))
            .required(format(REQUIRED, "Satış Fiyatı")),
    }

    // Validation schema
    const StockEditSchema = Yup.object().shape({ ...stockSchema, ...stockPricingSchema });

    const Step1Schema = Yup.object().shape(stockSchema);
    const Step2Schema = Yup.object().shape(stockPricingSchema);
    const Step3Schema = Yup.object().shape({
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

    const schemaArray = [Step1Schema, Step2Schema,Step3Schema, Step4Schema];

    const [models, setModels] = useState(ModelList)
   

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    
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
    return (
        stock.id === undefined ? (
            <Wizard
                initialValues={stock}
                arrayProgress={arrayProgress}
                schemaArray={schemaArray}
                onReset={(values) => handleReset(values)}
                onSubmit={(values, formActions) => {
                    sleep(300).then(() => {
                        // window.alert(JSON.stringify(values, null, 2));
                        //   const dealer = {
                        //     name: values.dealerName,
                        //     taxIdentityNo: values.taxIdentityNo,
                        //     taxOfficeId: values.taxOfficeId,
                        //     dealerTypeId: values.dealerTypeId,
                        //     email: values.email,
                        //     fax: values.fax,
                        //     tel1: values.tel1,
                        //     tel2: values.tel2,
                        //     guid: values.guid,
                        //   }
                        //   const adminUser = {
                        //     email: values.ownerEmail,
                        //     identityNo: values.identityNo,
                        //     firstName: values.firstName,
                        //     lastName: values.lastName,
                        //     username: values.username,
                        //     professionId: values.professionId,
                        //     tel1: values.ownerTel,
                        //     tel2: "",
                        //     relationGuid: values.guid,
                        //     relationTable: "Dealers"
                        //   }
                        //   const address = {
                        //     name: values.addressName,
                        //     cityId: values.cityId,
                        //     townId: values.townId,
                        //     neighborhoodId: values.neighborhoodId,
                        //     openAddress: values.openAddress,
                        //     relationGuid: values.guid,
                        //     relationTable: "Dealers"
                        //   }
                        //   dispatch(usersActions.createUser(adminUser)).then((response) => {

                        //     dealer.adminId = response?.id;
                        //     dispatch(actions.createDealer(dealer)).then(() => {
                        //       dispatch(addressesActions.createAddress(address)).then(() => {
                        //         backToDealersList()
                        //         // dispatch(actions.fetchCustomers(customersUIProps.queryParams));
                        //         // // clear selections list
                        //         // customersUIProps.setIds([]);
                        //       })
                        //     })

                        //   })


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
                                        <Select name="brandId" label="Marka" options={BrandList}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const modelsByValue = ModelList.filter(q => q.brandId === value);
                                                setModels(modelsByValue)

                                                props.setFieldValue("brandId", value);
                                                props.setFieldValue("modelId", "");
                                            }} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Select name="modelId" label="Model" options={models} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Select name="year" label="Yıl" options={Years} />
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
                                        <Field
                                            name="enginePower"
                                            component={Input}
                                            placeholder="Motor Gücü"
                                            label="Motor Gücü"
                                            adornment={adorments.enginePowerAdorment}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <Field
                                            name="engineCapacity"
                                            component={Input}
                                            placeholder="Motor Hacmi"
                                            label="Motor Hacmi"
                                            adornment={adorments.engineCapacityAdorment}
                                        />
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
                                        <Select name="sourceId" label="Kaynak" options={Sources} />
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
                                            name="buyingPrice"
                                            component={Input}
                                            placeholder="Alış Fiyatı"
                                            label="Alış Fiyatı"
                                            adornment={adorments.priceAdorment}

                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <Field
                                            name="sellingPrice"
                                            component={Input}
                                            placeholder="Satış Fiyatı"
                                            label="Satış Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <Field
                                            name="cashSellingPrice"
                                            component={Input}
                                            placeholder="Nakit Fiyatı"
                                            label="Nakit Fiyatı"
                                            adornment={adorments.priceAdorment}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <Field
                                            name="swapSellingPrice"
                                            component={Input}
                                            placeholder="Takas Fiyatı"
                                            label="Takas Fiyatı"
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
                        console.log(props, "this props 3");
                        return (
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 3).description}</h4>
                                    <FileUpload/>
                        
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
                                <DokaDropzone/>
                            </div>
                        );
                    }}
                </Wizard.Page>
                <Wizard.Page>
                    {props => {
                        return (
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                {/*begin::Section*/}
                                <h4 className="mb-10 font-weight-bold text-dark">{arrayProgress.find(q => q.id === 5).description}</h4>
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
                                        <Select name="brandId" label="Marka" options={BrandList}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const modelsByValue = ModelList.filter(q => q.brandId === value);
                                                setModels(modelsByValue)

                                                setFieldValue("brandId", value);
                                                setFieldValue("modelId", "");
                                            }} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Select name="modelId" label="Model" options={models} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Select name="year" label="Yıl" options={Years} />
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
                                        <Field
                                            name="enginePower"
                                            component={Input}
                                            placeholder="Motor Gücü"
                                            label="Motor Gücü"
                                            adornment={adorments.enginePowerAdorment}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <Field
                                            name="engineCapacity"
                                            component={Input}
                                            placeholder="Motor Hacmi"
                                            label="Motor Hacmi"
                                            adornment={adorments.engineCapacityAdorment}

                                        />
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
                                        <Select name="sourceId" label="Kaynak" options={Sources} />
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
