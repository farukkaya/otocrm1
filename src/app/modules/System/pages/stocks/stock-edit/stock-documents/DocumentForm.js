import React,{useState,useCallback,useEffect} from 'react'
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { format } from 'react-string-format';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; 
import {Input, Select } from "../../../../../../../_metronic/_partials/controls";
import * as filesActions from "../../../../_redux/_files/filesActions"
import { DocumentTypes } from "../../StocksUIHelper";

import { LENGTH, MIN_LENGTH, MAX_LENGTH, DIGIT_CONTROL, REQUIRED } from "../../../../../../validations/validMessages";
const DocumentFormSchema = Yup.object().shape({
    documentTypeId: Yup.number()
        .required(format(REQUIRED, "Belge Tipi")),
    name: Yup.string()
        .min(2, format(MIN_LENGTH, "2"))
        .max(150, format(MAX_LENGTH, "50"))
        .required(format(REQUIRED, "Belge Adı")),
});
let id = 0;
let initialDocument = {
    documentTypeId: "",
    name: "",
    description: "",
    validityDate: "",
}
export function DocumentForm({documents,setDocuments,transactionId ,pageProps}) {

    const [attachment, setAttachment] = useState({})
    const onHandleInputChangeSingle = useCallback(
        e => {
            e.preventDefault();
            return setAttachment(e.currentTarget.files[0]);
        },
        [setAttachment]
    );

    const dispatch = useDispatch();
    const onHandleSubmit=(values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        const { name, validityDate, description } = values;
        id++;
        const formData = new FormData();
        formData.append(transactionId, attachment);
        formData.append("name", name);
        formData.append("validityDate", validityDate);
        formData.append("description", description);
        formData.append("transactionId", transactionId);
        formData.append("documentTypeId", 1);
        documents.push({ id, name, validityDate, description, transactionId})
        setDocuments(documents)
        dispatch(filesActions.createFile(formData)).then(({ guid, path }) => {
            const doc=documents.find(doc=>doc.id==id);
            doc.path=path;
            doc.guid=guid;
            setDocuments(documents)
            resetForm(initialDocument);
            document.getElementById("document").value = '';
            pageProps.setFieldValue("file",undefined)
        }).finally(()=>{
            
            for (var key of formData.keys()) 
                formData.delete(key)
        })
    }
    return (
      <>
        <Formik
            initialValues={initialDocument}
            enableReinitialize={true}
            validationSchema={DocumentFormSchema}
            onSubmit={onHandleSubmit}

            render={({ handleSubmit, setFieldValue, handleChange, handleBlur, values, errors }) => (
                <Form onSubmit={handleSubmit}>
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
                        <div className="col-lg-7">
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
