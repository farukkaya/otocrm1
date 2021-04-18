// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';
import * as taxOfficesActions from "../../../../_redux/taxOffices/taxOfficesActions";
import { GalleryLevelList,DealerTypeTitles } from "../../dealer-galleries/GalleriesUIHelper";
import { LENGTH, MIN_LENGTH, MAX_LENGTH, DIGIT_CONTROL, REQUIRED, MORE_THEN, LESS_THEN } from "../../../../../../validations/validMessages";

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
  taxOfficeId: Yup.string()
    .required(format(REQUIRED, "Vergi Dairesi")),
});

export function GalleryEditForm({ saveGallery, gallery, actionsLoading, onHide }) {

  const dispatch = useDispatch();


  const { taxOffices } = useSelector(
    (state) => ({
      taxOffices: state.taxOffices.entities
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(taxOfficesActions.fetchAllTaxOffice());
  }, [dispatch]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={gallery}
        validationSchema={GalleryEditSchema}
        onSubmit={(values) => saveGallery(values)}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">

                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="name"
                      component={Input}
                      placeholder="Galeri Adı"
                      label="Galeri Adı"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select name="dealerTypeId" label="Tipi" options={DealerTypeTitles} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Select name="taxOfficeId" label="Vergi Dairesi" options={taxOffices} />
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
                    <Select name="levelId" label="Seviye" options={GalleryLevelList} />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="email"
                      component={Input}
                      placeholder="E-Posta"
                      label="E-Posta"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="tel1"
                      component={Input}
                      placeholder="Telefon No"
                      label="Telefon No"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="fax"
                      component={Input}
                      placeholder="Fax No"
                      label="Fax No"
                    />
                  </div>
                </div>



              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                İptal
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Kaydet
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}