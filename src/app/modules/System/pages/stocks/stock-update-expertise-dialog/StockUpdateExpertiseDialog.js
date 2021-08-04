/* eslint-disable no-restricted-imports */
import React, { useEffect,useState,useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {  TramerTypes } from "../StocksUIHelper";
import { ExpertiseForm } from "../stock-edit/stock-expertise/ExpertiseForm";
import * as actions from "../../../_redux/stocks/stocksActions"
import * as expertisesActions from "../../../_redux/stockExpertises/stockExpertisesActions"
import {adorments} from '../../../../../utilities/constans';
import { CurrencyInput, ModalProgressBar,Select } from "../../../../../../_metronic/_partials/controls";

import { format } from 'react-string-format';
import { MAX_LENGTH, REQUIRED } from "../../../../../validations/validMessages";

const ExpertiseEditSchema = Yup.object().shape({
  tramerTypeId: Yup.number()
      .required(format(REQUIRED, "Tramer Tipi")),
  tramerValue: Yup.string()
      //.matches(/^[0-9]+$/, DIGIT_CONTROL)
      //.min(2, format(MIN_LENGTH, "2"))
      .max(25, format(MAX_LENGTH, "25"))
  //.required(format(REQUIRED, "Toplam Tramer")),
});

export function StockUpdateExpertiseDialog({ id, show, onHide }) {

  const btnUpdate = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(expertisesActions.fetchStockExpertiseByStock(id))
    dispatch(actions.fetchStockExpertise(id))
    dispatch(actions.fetchStock(id))
    if (!id) {
      onHide();
    }
  }, [id, dispatch]);

  const [stockExpertise, setStockExpertise] = useState({})
  const [disabledValue, setDisabledValue] = useState(true)

  const { isLoading,stock,expertise } = useSelector(
    (state) => ({
      // expertise:state.stockExpertises.stockExpertiseForEdit,
      expertise:state.stocks.stockExpertise,
      isLoading: state.stocks.actionsLoading,
      stock:state.stocks.stockForEdit,
    }),
    shallowEqual
  );
setTimeout(() => {
  // SetTimeout olmazsa nesne boş ike companent yüklenmiş oluyor
  //if koymazsam default değeri set ettiği için yapılan değişiklik görünmüyor 
  if(stockExpertise==undefined||JSON.stringify(stockExpertise)=="{}"||JSON.stringify(expertise)==JSON.stringify(stockExpertise))
     setStockExpertise(expertise);

     setDisabledValue(stock?.tramerTypeId == "2"||stock?.tramerTypeId == "3" )
}, 1000);

  const updateExpertise = () => {
    if (btnUpdate && btnUpdate.current) {
      btnUpdate.current.click();
    }
  }
  const updateForm= (values) => {
    if(typeof(values.tramerValue)!=="number")
      values.tramerValue=parseFloat(values.tramerValue.replace(".",""))
      
    dispatch(actions.updateStock(values)).then(()=>{
      dispatch(expertisesActions.updateStockExpertise(stockExpertise)).then(()=>{
        dispatch(actions.fetchStocks({filter: {
          isActive:"true"
      },
      sortOrder: "asc",
      sortField: "id",
      pageNumber: 1,
      pageSize: 10}));
        onHide()
      })
    })
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-xl">
          {format("Expertiz Bilgi Güncelleme -'{0}'", `${stock?.plateNo}`)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
              {isLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}

{stockExpertise&&(
  <Formik
                    enableReinitialize={true}
                    initialValues={stock}
                    validationSchema={ExpertiseEditSchema}
                    onSubmit={(values) => updateForm(values)}
                  //  onReset={(values) => handleReset(values)}
                >
                    {({ handleSubmit, handleReset, setFieldValue,values }) => (
                   <Form className="form form-label-right">
                        <ExpertiseForm stockExpertise={stockExpertise} setValues={setStockExpertise} />
                      <br />
                      <br />
                      <div className="form-group row">
                          <div className="col-lg-6">
                              <Select name="tramerTypeId" label="Tramer Tipi" options={TramerTypes}
                                  onChange={(e) => {
                                      const { value } = e.target;
                                      setFieldValue("tramerTypeId", value)
                                      setFieldValue("tramerValue", value == "2" ? 0 : undefined)
                                      setDisabledValue(value == "2" || value == "3")

                                  }
                                  } />
                          </div>
                          <div className="col-lg-6">
                              <Field
                                  name="tramerValue"
                                  component={CurrencyInput}
                                  disabled={disabledValue}
                                  placeholder="Toplam Tramer"
                                  label="Toplam Tramer"
                                  adornment={adorments.priceAdorment}

                              />
                          </div>
                      </div>
                    
                  <button
                      type="submit"
                      style={{ display: "none" }}
                      ref={btnUpdate}
                      onSubmit={() => handleSubmit()}
                  ></button>

                </Form>
                    )}
                </Formik>
              )}
      
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
          İptal
          </button>
          <> </>
          <button
            type="button"
            onClick={updateExpertise}
            className="btn btn-primary btn-elevate"
          >
           Güncelle
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
