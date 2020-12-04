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



export function UserEditForm({
  user,
  btnRef,
  saveUser
}) {
  // Validation schema
  const UserEditSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, "Minimum 2 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Model is required"),
    identityNo: Yup.string()
      .min(2, "Minimum 2 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Manufacture is required"),
    firstName: Yup.number()
      .min(1950, "1950 is minimum")
      .max(2020, "2020 is maximum")
      .required("Model year is required"),
    lastName: Yup.number()
      .min(0, "0 is minimum")
      .max(1000000, "1000000 is maximum")
      .required("Mileage is required")

  });
 
  const { professions} = useSelector(
    (state) => ({
      professions:state.professions.entities
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
                    name="firstName"
                    component={Input}
                    placeholder="İsim"
                    label="İsim"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="lastName"
                    component={Input}
                    placeholder="Soyisim"
                    label="Soyisim"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="professionId" label="Meslek">
                   <option/>
                    {professions.map((item) => (
                      <option key={item.name} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
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
