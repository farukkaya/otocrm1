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
import * as mainActions from "../../../../_redux/_main/mainActions"
import {
  LENGTH,
  MIN_LENGTH,
  MAX_LENGTH,
  DIGIT_CONTROL,
  REQUIRED
} from "../../../../../../validations/validMessages";

const AddressEditSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, format(MIN_LENGTH, "2"))
      .max(150, format(MAX_LENGTH, "50"))
      .required(format(REQUIRED, "Adres Adı")),
    cityId: Yup.number()
      .required(format(REQUIRED, "İl")),
    townId: Yup.number()
      .required(format(REQUIRED, "İlçe")),
    addressLine: Yup.string()
      .min(10, format(MIN_LENGTH, "10"))
      .max(500, format(MAX_LENGTH, "500"))

});


export function AddressEditForm({ saveAddress, address, actionsLoading, onHide }) {

  const dispatch = useDispatch();


  const { cities,towns,neighborhoods } = useSelector(
    (state) => ({
      cities: state.main.cities.entities,
      towns: state.main.towns.entities,
      neighborhoods: state.main.neighborhoods.entities
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(mainActions.fetchAllCity()).then(()=>{
       if(towns.length==0&&address.cityId) dispatch(mainActions.fetchTownsByCity(address.cityId)).then(()=>{
        if(neighborhoods.length==0&&address.townId) dispatch(mainActions.fetchNeighborhoodsByTown(address.townId))
       })
      
    })
   
  }, [address,dispatch]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={address}
        validationSchema={AddressEditSchema}
        onSubmit={(values) => saveAddress(values)}
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
                  <div className="col-lg-6">
                    <Field
                      name="name"
                      component={Input}
                      placeholder="Merkez, Şube vb."
                      label="Adres Adı"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select
                      name="cityId"
                      label="İl"
                      options={cities}
                      // onFocus={(e)=>{
                      //   dispatch(mainActions.fetchAllCity());
                      // }}
                      onChange={(e) => {
                        const { value } = e.target;
                        dispatch(mainActions.fetchTownsByCity(value))
                        setFieldValue("cityId", +value);
                        setFieldValue("townId", "");
                        setFieldValue("neighborhoodId", "");
                      }} />
                  </div>

                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Select
                      name="townId"
                      label="İlçe"
                      options={towns}
                      onChange={(e) => {
                        const { value } = e.target;
                        dispatch(mainActions.fetchNeighborhoodsByTown(value))
                        setFieldValue("townId", +value);
                        setFieldValue("neighborhoodId", "");
                      }} />
                    {/* onchange i kontrol et */}
                  </div>
                  <div className="col-lg-6">
                    <Select
                      name="neighborhoodId"
                      label="Mahalle"
                      options={neighborhoods} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <Field
                      type="textarea"
                      rows="4"
                      name="addressLine"
                      component={Input}
                      placeholder="Açık Adres"
                      label="Açık Adress"
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
