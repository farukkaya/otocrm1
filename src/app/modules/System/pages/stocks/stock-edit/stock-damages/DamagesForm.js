import React from 'react'
import { Button } from "react-bootstrap";
import { format } from 'react-string-format';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { CurrencyInput, Input, Select } from "../../../../../../../_metronic/_partials/controls";
import { DamageTypes } from "../../StocksUIHelper";
import {adorments} from '../../../../../../utilities/constans'
import { REQUIRED } from "../../../../../../validations/validMessages";
const DamageFormSchema = Yup.object().shape({
    damageTypeId: Yup.number()
        .required(format(REQUIRED, "Hasar Tipi")),
    damageDate: Yup.date()
        .required(format(REQUIRED, "Hasar Tarihi")),
});
let id = 0;
let initialDamage = {
    damageOrder: "",
    damageTypeId: "",
    amount: "",
    damageDate: "",
}
export function DamageForm({ damages, setDamages,pageProps }) {

    const onHandleSubmit=(values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        const { damageTypeId, amount, damageDate } = values;
        id++;
        var damageOrder=`KZ${id}`;
        damages.push({ damageOrder, damageTypeId, amount,damageDate})
        setDamages(damages)
        resetForm(initialDamage)
        pageProps.setFieldValue("amount",undefined)
    }
    return (
        <>
            <Formik
                initialValues={initialDamage}
                enableReinitialize={true}
                validationSchema={DamageFormSchema}
                onSubmit={onHandleSubmit}

                render={({ handleSubmit, setFieldValue, handleChange, handleBlur, values, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <div className="col-lg-3">
                                <Field
                                    name="damageDate"
                                    component={Input}
                                    type="date"
                                    placeholder="Hasar Tarihi"
                                    max={new Date().toJSON().split('T')[0]}
                                    label="Hasar Tarihi"
                                />
                            </div>
                            <div className="col-lg-5">
                                <Select name="damageTypeId" label="Hasar Tipi" options={DamageTypes} />
                            </div>
                            <div className="col-lg-3">
                                <Field
                                    name="amount"
                                    component={CurrencyInput}
                                    placeholder="Hasar Tutarı"
                                    label="Hasar Tutarı"
                                    adornment={adorments.priceAdorment}

                                />
                            </div>
                            <div className="col-lg-1">
                                <Button variant="danger" className="mt-10" size="sm" type="submit">
                                    Ekle
                                </Button>
                            </div>
                        </div>
                      
                    </Form>

                )}
            />
        </>
    )
}
