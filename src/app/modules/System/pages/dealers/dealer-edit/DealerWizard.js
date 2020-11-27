import React from 'react'
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers/AssetsHelpers";
import { Formik, Form, Field } from "formik";
import { Input, AutoSelect, Select } from "../../../../../../_metronic/_partials/controls";
import * as Yup from "yup";
import { format } from 'react-string-format';
import {
    DealerTypeTitles
} from "../DealersUIHelpers";
import KTWizard from '../../../../../../_metronic/_assets/js/components/wizard';
function getSteps() {
    return [
        {
            id: 1,
            step: "Bayi",
            title: "Bayi Bilgilerini Giriniz",
            icon: "/media/svg/icons/Home/Building.svg"
        },
        {
            id: 2,
            step: "Yöneticisi",
            title: "Bayi için bir yönetici atayın",
            icon: "/media/svg/icons/Communication/Add-user.svg"
        },
        {
            id: 3,
            step: "İletişim",
            title: "Bayinin İletişim Bilgilerini Giriniz",
            icon: "/media/svg/icons/Communication/Adress-book1.svg"
        },
        {
            id: 4,
            step: "Adres",
            title: "Bayinin Adres Bilgilerini Giriniz",
            icon: "/media/svg/icons/Map/Marker1.svg"
        },
        {
            id: 5,
            step: "Sonuç",
            title: "Bilgilerinizi kontrol ediniz",
            icon: "/media/svg/icons/Code/Done-circle.svg"
        }];
}
const MIN_LENGTH = "En az {0} karakter giriniz";
const MAX_LENGTH = "En fazla {0} karakter giriniz";
const DIGIT_CONTROL = "Sadece sayısal karakter giriniz";
const REQUIRED = "{0} Zorunludur";
const DealerEditSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, format(MIN_LENGTH, "2"))
        .max(150, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Bayi Adı")),
    dealerType: Yup.string()
        .required(format(REQUIRED, "Bayi Adı")),
    taxIdentityNo: Yup.string()
        .matches(/^[0-9]+$/, DIGIT_CONTROL)
        .min(10, format(MIN_LENGTH, "10"))
        .max(11, format(MAX_LENGTH, "11"))
        .required(format(REQUIRED, "Vergi No")),
    adminId: Yup.number()
        .required(format(REQUIRED, "Yönetici")),
    taxOfficeId: Yup.string()
        .required(format(REQUIRED, "Vergi Dairesi")),
});


export const DealerWizard = ({
    btnRef,
    saveDealer,
    taxOffices
}) => {

    new KTWizard("kt_wizard");
    const steps = getSteps();


    return (
        <Formik
            enableReinitialize={true}
            validationSchema={DealerEditSchema}
            onSubmit={(values) => saveDealer(values)}
        >
            {({ handleSubmit }) => (
                <div className="wizard wizard-2" id="kt_wizard" data-wizard-state="step-first"
                    data-wizard-clickable="false">
                    <div className="wizard-nav border-right py-8 px-8 py-lg-20 px-lg-10">
                        <div className="wizard-steps" >
                            {steps.map((item) => (
                                <div key={item.id} className="wizard-step">
                                    <div className="wizard-wrapper" >
                                        <div className="wizard-icon">
                                            <span className="svg-icon svg-icon-2x">
                                                <SVG src={toAbsoluteUrl(item.icon)} />

                                            </span>
                                        </div>
                                        <div className="wizard-label">
                                            <h3 className="wizard-title">{item.step}</h3>
                                            <div className="wizard-desc">{item.title}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                    {/*begin: Wizard Body*/}
                    <div className="wizard-body py-8 px-8 py-lg-20 px-lg-10">
                        {/*begin: Wizard Form*/}
                        <div className="row">
                            <div className="offset-xxl-1 col-xxl-10">
                                <Form className="form form-label-right">

                                    {/*begin: Wizard Step 1*/}
                                    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current"/*{activeStep === 1 ? "current" : ""}*/>
                                        <h4 className="mb-10 font-weight-bold text-dark">{steps.find(q => q.id === 1).title}</h4>
                                        <div className="form-group row">
                                            <div className="col-lg-6">
                                                <Field
                                                    name="name"
                                                    component={Input}
                                                    placeholder="Bayi Adı"
                                                    label="Bayi Adı"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <Select name="dealerType" label="Bayi Tipi">
                                                    {DealerTypeTitles.map((item, i) => (
                                                        i !== 1 && (
                                                            <option key={i} value={i}>
                                                                {item}
                                                            </option>
                                                        )
                                                    ))}
                                                </Select>
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-6">

                                                <Field
                                                    id="taxOfficeId"
                                                    name="taxOfficeId"
                                                    component={AutoSelect}
                                                    options={taxOffices}
                                                    label="Vergi Dairesi"
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
                                    {/*end: Wizard Step 1*/}
                                    {/*begin: Wizard Step 2*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                        <h4 className="mb-10 font-weight-bold text-dark">{steps.find(q => q.id === 2).title}</h4>
                                        {/* STEP 2 */}
                                    </div>
                                    {/*end: Wizard Step 2*/}
                                    {/*begin: Wizard Step 3*/}
                                    <div className="pb-5" data-wizard-type="step-content" >
                                        <h4 className="mb-10 font-weight-bold text-dark">{steps.find(q => q.id === 3).title}</h4>

                                    </div>
                                    {/*end: Wizard Step 3*/}
                                    {/*begin: Wizard Step 4*/}
                                    <div className="pb-5" data-wizard-type="step-content" >
                                        <h4 className="mb-10 font-weight-bold text-dark">{steps.find(q => q.id === 4).title}</h4>


                                    </div>
                                    {/*end: Wizard Step 4*/}

                                    {/*begin: Wizard Step 5*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                        {/*begin::Section*/}
                                        <h4 className="mb-10 font-weight-bold text-dark">{steps.find(q => q.id === 5).title}</h4>
                                        <h6 className="font-weight-bolder mb-3">Current Address:</h6>
                                        <div className="text-dark-50 line-height-lg">
                                            <div>Address Line 1</div>
                                            <div>Address Line 2</div>
                                            <div>Melbourne 3000, VIC, Australia</div>
                                        </div>
                                        <div className="separator separator-dashed my-5"></div>
                                        {/*end::Section*/}
                                        {/*begin::Section*/}
                                        <h6 className="font-weight-bolder mb-3">Delivery Details:</h6>
                                        <div className="text-dark-50 line-height-lg">
                                            <div>Package: Complete Workstation (Monitor, Computer, Keyboard &amp; Mouse)</div>
                                            <div>Weight: 25kg</div>
                                            <div>Dimensions: 110cm (w) x 90cm (h) x 150cm (L)</div>
                                        </div>
                                        <div className="separator separator-dashed my-5"></div>
                                        {/*end::Section*/}
                                        {/*begin::Section*/}
                                        <h6 className="font-weight-bolder mb-3">Delivery Service Type:</h6>
                                        <div className="text-dark-50 line-height-lg">
                                            <div>Overnight Delivery with Regular Packaging</div>
                                            <div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
                                        </div>
                                        <div className="separator separator-dashed my-5"></div>
                                        {/*end::Section*/}
                                        {/*begin::Section*/}
                                        <h6 className="font-weight-bolder mb-3">Delivery Address:</h6>
                                        <div className="text-dark-50 line-height-lg">
                                            <div>Address Line 1</div>
                                            <div>Address Line 2</div>
                                            <div>Preston 3072, VIC, Australia</div>
                                        </div>
                                        {/*end::Section*/}
                                    </div>
                                    {/*end: Wizard Step 5*/}
                                    {/*begin: Wizard Actions*/}
                                    <div className="d-flex justify-content-between border-top mt-5 pt-10">
                                        <div className="mr-2">
                                            <button type="button" className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-prev">Geri</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-success font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-submit">Tamamla</button>
                                            <button type="button" className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-next">İleri</button>
                                        </div>
                                    </div>
                                    {/*end: Wizard Actions*/}
                                </Form>

                            </div>
                            {/*end: Wizard*/}
                        </div>
                        {/*end: Wizard Form*/}
                    </div>
                    {/*end: Wizard Body*/}
                </div>

            )}
        </Formik>

    )
}

