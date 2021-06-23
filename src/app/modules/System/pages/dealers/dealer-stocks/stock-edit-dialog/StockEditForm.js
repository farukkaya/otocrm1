// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../../_metronic/_partials/controls";
import { format } from 'react-string-format';

import { LENGTH, MIN_LENGTH, MAX_LENGTH, DIGIT_CONTROL, REQUIRED } from "../../../../../../validations/validMessages";
import { BrandList, ModelList, Years, CaseTypes, GearTypes, FuelTypes, CarColors, FromWhoTitles, Sources } from "../StocksUIHelper";

// Validation schema
const StockEditSchema = Yup.object().shape({
  brandId: Yup.number()
    .required(format(REQUIRED, "Marka")),
  modelId: Yup.number()
    .required(format(REQUIRED, "Model")),
  year: Yup.number()
    .required(format(REQUIRED, "Model Yıl")),
  caseTypeId: Yup.number()
    .required(format(REQUIRED, "Kasa Tipi")),
  gearTypeId: Yup.number()
    .required(format(REQUIRED, "Vites Tipi")),
  fuelTypeId: Yup.number()
    .required(format(REQUIRED, "Yakıt Tipi")),
  colorId: Yup.number()
    .required(format(REQUIRED, "Renk")),
  plateNo: Yup.string()
    .min(7, format(MIN_LENGTH, "7"))
    .max(10, format(MAX_LENGTH, "10"))
    .required(format(REQUIRED, "Plaka")),
  kilometer: Yup.string()
    .required(format(REQUIRED, "Kilometre")),
  enginePower: Yup.string()
    .required(format(REQUIRED, "Motor Gücü")),
  engineCapacity: Yup.string()
    .required(format(REQUIRED, "Motor Hacmi")),
  vinNo: Yup.string()
    .length(17, format(LENGTH, "Şase No", "17"))
    .required(format(REQUIRED, "Şase No")),
  engineNo: Yup.string()
    .length(15, format(LENGTH, "Motor No", "15"))
    .required(format(REQUIRED, "Motor No")),
  fromWhoId: Yup.number()
    .required(format(REQUIRED, "Kimden")),
  purchaseTypeId: Yup.number()
    .required(format(REQUIRED, "Alım Türü")),
});

export function StockEditForm({ saveStock, stock, actionsLoading, onHide }) {
  const [models, setModels] = useState(ModelList)
  const adorments = {
    priceAdorment: {
      endAdorment: {
        icon: "fas fa-lira-sign",
        type: "icon",
        style: { color: "GrayText" }
      }
    },
    enginePowerAdorment: {
      endAdorment: {
        icon: "HP",
        type: "text",
        style: { color: "GrayText" }
      }
    },
    engineCapacityAdorment: {
      endAdorment: {
        icon: "CC",
        type: "text",
        style: { color: "GrayText" }
      }
    },
  }
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={stock}
        validationSchema={StockEditSchema}
        onSubmit={(values) => saveStock(values)}
      >
        {({ handleSubmit,setFieldValue }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">

                <div className="form-group row">
                  <div className="col-lg-4">
                    <Select name="brandId" label="Marka" options={BrandList}
                      onChange={(e) => {
                        const { value } = e.target;
                        const modelsByValue = ModelList.filter(q => q.brandId === value);
                        setModels(modelsByValue)

                        setFieldValue("brandId", value);
                        setFieldValue("modelId", "");
                      }} />
                  </div>
                  <div className="col-lg-4">
                    <Select name="modelId" label="Model" options={models} />
                  </div>
                  <div className="col-lg-4">
                    <Select name="year" label="Yıl" options={Years} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-3">
                    <Select name="caseTypeId" label="Kasa Tipi" options={CaseTypes} />
                  </div>
                  <div className="col-lg-3">
                    <Select name="gearTypeId" label="Vites Tipi" options={GearTypes} />
                  </div>
                  <div className="col-lg-3">
                    <Select name="fuelTypeId" label="Kasa Tipi" options={FuelTypes} />
                  </div>
                  <div className="col-lg-3">
                    <Select name="colorId" label="Renk" options={CarColors} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-3">
                    <Field
                      name="plateNo"
                      component={Input}
                      placeholder="Plaka"
                      label="Plaka"
                    />
                  </div>
                  <div className="col-lg-3">
                    <Field
                      name="kilometer"
                      component={Input}
                      placeholder="Kilometre"
                      label="Kilometre"
                    />
                  </div>
                  <div className="col-lg-3">
                    <Field
                      name="enginePower"
                      component={Input}
                      placeholder="Motor Gücü"
                      label="Motor Gücü"
                      adornment={adorments.enginePowerAdorment}
                    />
                  </div>
                  <div className="col-lg-3">
                    <Field
                      name="engineCapacity"
                      component={Input}
                      placeholder="Motor Hacmi"
                      label="Motor Hacmi"
                      adornment={adorments.engineCapacityAdorment}

                    />
                  </div>

                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="vinNo"
                      component={Input}
                      placeholder="Şase No"
                      label="Şase No"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      name="engineNo"
                      component={Input}
                      placeholder="Motor No"
                      label="Motor No"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-3">
                    <Field
                      name="buyingPrice"
                      component={Input}
                      placeholder="Alış Fiyatı"
                      label="Alış Fiyatı"
                      adornment={adorments.priceAdorment}
                    />
                  </div>
                  <div className="col-lg-3">
                    <Field
                      name="sellingPrice"
                      component={Input}
                      placeholder="Satış Fiyatı"
                      label="Satış Fiyatı"
                      adornment={adorments.priceAdorment}
                    />
                  </div>
                  <div className="col-lg-3">
                    <Field
                      name="cashSellingPrice"
                      component={Input}
                      placeholder="Nakit Fiyatı"
                      label="Nakit Fiyatı"
                      adornment={adorments.priceAdorment}
                    />
                  </div>
                  <div className="col-lg-3">
                    <Field
                      name="swapSellingPrice"
                      component={Input}
                      placeholder="Takas Fiyatı"
                      label="Takas Fiyatı"
                      adornment={adorments.priceAdorment}
                    />
                  </div>

                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Select name="fromWhoId" label="Kimden" options={FromWhoTitles} />
                  </div>
                  <div className="col-lg-6">
                    <Select name="purchaseTypeId" label="Alım Türü" options={Sources} />
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
