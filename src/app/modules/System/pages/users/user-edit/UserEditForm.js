// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";
import * as professionsActions from "../../../_redux/professions/professionsActions"
import { format } from 'react-string-format';

import {
  LENGTH,
  MIN_LENGTH,
  MAX_LENGTH,
  DIGIT_CONTROL,
  REQUIRED
} from "../../../../../validations/validMessages";

export function UserEditForm({
  user,
  btnRef,
  saveUser
}) {
  // Validation schema
 
  const UserEditSchema = Yup.object().shape({
    email: Yup.string()
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

  });

  const { professions } = useSelector(
    (state) => ({
      professions: state.professions.entities
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(professionsActions.fetchAllProfession());

  }, [dispatch]);
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={user}
        validationSchema={UserEditSchema}
        onSubmit={(values) => {
          saveUser(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="firstname"
                    component={Input}
                    placeholder="İsim"
                    label="İsim"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="lastname"
                    component={Input}
                    placeholder="Soyisim"
                    label="Soyisim"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="professionId" label="Meslek" options={professions} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <Field
                    name="identityNo"
                    component={Input}
                    placeholder="Kimlik No"
                    label="Kimlik No"
                    customFeedbackLabel="Lütfen Kullancı adı giriniz"
                  />
                </div>
                <div className="col-lg-6">
                  <Field
                    name="username"
                    component={Input}
                    placeholder="Kullanıcı Adı"
                    label="Kullanıcı Adı"
                    customFeedbackLabel="Lütfen Kullancı adı giriniz"
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
                    name="phone"
                    component={Input}
                    placeholder="Telefon"
                    label="Telefon"
                  />
                </div>

              </div>
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
