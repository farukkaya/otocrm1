// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, AutoSelect, Select } from "../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';
import {
  DealerTypeTitles
} from "../DealersUIHelpers";
export function DealerEditForm({
  dealer,
  btnRef,
  btnReset,
  saveDealer,
  handleReset,
  taxOffices,
  users
}) {
debugger
  // const LESS_THEN = "{0} {1}'den az olmamalı";
  // const MORE_THEN = "{0} {1}'den fazla olmamalı";
  const MIN_LENGTH = "En az {0} karakter giriniz";
  const MAX_LENGTH = "En fazla {0} karakter giriniz";
  const DIGIT_CONTROL = "Sadece sayısal karakter giriniz";
  const REQUIRED = "{0} Zorunludur";

  // Validation schema
  const DealerEditSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Bayi Adı")),
    dealerTypeId: Yup.string()
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


  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={dealer}
        validationSchema={DealerEditSchema}
        onSubmit={(values) => saveDealer(values)}
        onReset={(values) => handleReset(values)}
      >
        {({ handleSubmit, handleReset }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                {users==undefined ?(
                  <>
                    <div className="col-lg-6">
                      <Field
                        name="name"
                        component={Input}
                        placeholder="Bayi Adı"
                        label="Bayi Adı"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Select name="dealerTypeId" label="Bayi Tipi" options={DealerTypeTitles}  />

                    </div>
                  </>
                ): (
                  <>
                    <div className="col-lg-4">
                      <Field
                        name="name"
                        component={Input}
                        placeholder="Bayi Adı"
                        label="Bayi Adı"
                      />
                    </div>
                    <div className="col-lg-4">
                      <Select name="adminId" label="Yönetici" options={users} optionLabel="fullName"/>
                    </div>
                    <div className="col-lg-4">
                      <Select name="dealerTypeId" label="Bayi Tipi" options={DealerTypeTitles} />
                    </div>
                  </>
                )}
               
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                <Select name="taxOfficeId"  label="Vergi Dairesi" options={taxOffices}/>
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
    </>
  );
}
