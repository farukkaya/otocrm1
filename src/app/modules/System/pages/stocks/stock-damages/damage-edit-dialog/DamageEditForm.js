// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select, CurrencyInput } from "../../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';

import { adorments } from '../../../../../../utilities/constans';
import { REQUIRED } from "../../../../../../validations/validMessages";

import { DamageTypes } from "../../StocksUIHelper";

const DamageFormSchema = Yup.object().shape({
  damageTypeId: Yup.number()
    .required(format(REQUIRED, "Hasar Tipi")),
  damageDate: Yup.date()
    .required(format(REQUIRED, "Hasar Tarihi")),
});

export function DamageEditForm({ saveDamage, damage, actionsLoading, onHide }) {

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={damage}
        validationSchema={DamageFormSchema}
        onSubmit={(values) => saveDamage(values)}
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
                      name="damageDate"
                      component={Input}
                      type="date"
                      placeholder="Hasar Tarihi"
                      max={new Date().toJSON().split('T')[0]}
                      label="Hasar Tarihi"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select name="damageTypeId" label="Hasar Tipi" options={DamageTypes} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <Field
                      name="amount"
                      component={CurrencyInput}
                      placeholder="Hasar Tutarı"
                      label="Hasar Tutarı"
                      adornment={adorments.priceAdorment}

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
