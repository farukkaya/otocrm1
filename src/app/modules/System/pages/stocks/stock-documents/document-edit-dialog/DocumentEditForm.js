// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React,{useCallback} from 'react'
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';
import {  MIN_LENGTH, MAX_LENGTH, REQUIRED } from "../../../../../../validations/validMessages";
import { DocumentTypes } from "../../StocksUIHelper";

const DocumentFormSchema = Yup.object().shape({
  documentTypeId: Yup.number()
      .required(format(REQUIRED, "Belge Tipi")),
  name: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Belge Adı")),
});
export function DocumentEditForm({ saveDocument, setAttachment,document, actionsLoading, onHide }) {

  const onHandleInputChangeSingle = useCallback(
    e => {
        e.preventDefault();
        return setAttachment(e.currentTarget.files[0]);
    },
    [setAttachment]
);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={document}
        validationSchema={DocumentFormSchema}
        onSubmit={(values) => saveDocument(values)}
      >
        {({ handleSubmit,setFieldValue ,values}) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form>
                    <div className="form-group row">
                        <div className="col-lg-4">
                            <Select name="documentTypeId" label="Belge Tipi"
                                options={DocumentTypes}
                                onChange={(e) => {
                                    const { value } = e.target;
                                    setFieldValue("documentTypeId", value);
                                    if (value != 4) setFieldValue("name", DocumentTypes.find(q => q.id == value).name);
                                    else setFieldValue("name", "");
                                }}
                            />
                        </div>
                        <div className="col-lg-4">
                            <Field
                                name="name"
                                component={Input}
                                disabled={values.documentTypeId != 4}
                                placeholder="Belge Adı"
                                label="Belge Adı"
                            />
                        </div>
                        <div className="col-lg-4">
                            <Field
                                name="description"
                                component={Input}
                                placeholder="Açıklama"
                                label="Açıklama"
                            />
                        </div>

                    </div>
                    <div className="form-group row">
                        <div className="col-lg-4">
                            <Field
                                name="validityDate"
                                component={Input}
                                type="date"
                                placeholder="Geçerlilik Tarihi"
                                min={new Date().toJSON().split('T')[0]}
                                label="Geçerlilik Tarihi"
                            />
                        </div>
                        <div className="col-lg-8">
                            <Field
                                id="document"
                                name="file"
                                component={Input}
                                type="file"
                                label="Belge"
                                accept="image/png, image/jpeg,application/pdf"
                                onChange={onHandleInputChangeSingle}
                            />
                        </div>
                    </div>
                    {values.id&&(
                        <div className="form-group row">
                          <div className="col-lg-12">
                            <span> Yeni bir dosya seçmeniz halinde bu alanda görüntülemete olduğunuz döküman silinecektir!!!</span>
                          <iframe src={process.env.REACT_APP_API_DEVELOPMENT_URL+values.path} width="100%" height="400"/>
                          </div>
                      </div>
                    )}
         
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
