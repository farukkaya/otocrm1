// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input,AutoSelect,Select } from "../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';

export function GalleryEditForm({
  gallery,
  btnRef,
  btnReset,
  saveGallery,
  handleReset,
  taxOffices
}) {



  const LESS_THEN = "{0} {1}'den az olmamalı";
  const MORE_THEN = "{0} {1}'den fazla olmamalı";
  const MIN_LENGTH = "En az {0} karakter giriniz";
  const MAX_LENGTH = "En fazla {0} karakter giriniz";
  const DIGIT_CONTROL = "Sadece sayısal karakter giriniz";
  const REQUIRED = "{0} Zorunludur";

  // Validation schema
  const GalleryEditSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Galeri Adı")),
    taxIdentityNo: Yup.string()
      .matches(/^[0-9]+$/, DIGIT_CONTROL)
      .min(10, format(MIN_LENGTH, "10"))
      .max(11, format(MAX_LENGTH, "11"))
      .required(format(REQUIRED, "Vergi No")),
    level: Yup.number()
      .moreThan(0, format(MORE_THEN, "Seviye", "0"))
      .lessThan(6, format(LESS_THEN, "Seviye", "6"))
      .required(format(REQUIRED, "Seviye")),
    dealerId: Yup.number()
      .required(format(REQUIRED, "Bayi")),
    taxOfficeId: Yup.string()
      .required(format(REQUIRED, "Vergi Dairesi")),
  });


  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={gallery}
        validationSchema={GalleryEditSchema}
        onSubmit={(values) => saveGallery(values)}
        onReset={(values) => handleReset(values)}
      >
        {({ handleSubmit, handleReset }) => (
          <>
            <Form className="form form-label-right">
            <div className="form-group row">
                <div className="col-lg-6">
                  <Field
                    name="dealerId"
                    component={Input}
                    placeholder="Bayi"
                    label="Bayi"
                  />
                </div>
                <div className="col-lg-6">
                  <Field
                    name="name"
                    component={Input}
                    placeholder="Galeri Adı"
                    label="Galeri Adı"
                  />
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
                 
                    {/* <Select name="taxOfficeId" label="Vergi Dairesi">
                    <option key="" value=""></option>
                    {taxOffices.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select> */}
                  {/* <Select autocomplete={true}  options={taxOffices} name="taxOfficeId" label={t["SYSTEM.GALLERIES.FIELD.TAXOFFICE"]}/> */}
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
                    name="level"
                    component={Input}
                    placeholder="Seviye"
                    label="Seviye"
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
