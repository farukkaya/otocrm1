// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect,useMemo } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { TransferList } from "./TransferList";
import { Formik, Form } from "formik";
import {Alert} from "react-bootstrap";
import * as claimsActions from "../../../.././_redux/claims/claimsActions"

import { useClaimsUIContext } from "../ClaimsUIContext";



export function ClaimEditForm({ saveClaim,userId, claim, actionsLoading, onHide }) {

  const dispatch = useDispatch();
  // const claimsUIContext = useClaimsUIContext();
  // const claimsUIProps = useMemo(() => {
  //   return {
  //     id: claimsUIContext.selectedId,
  //     userId: claimsUIContext.userId,
  //     ownClaims:claimsUIContext.ownClaims,
  //     //setOwnClaims:claimsUIContext.setOwnClaims
  //   };
  // }, [claimsUIContext]);

  const { ownClaims,allClaims } = useSelector(
    (state) => ({
      ownClaims: state.claims.ownClaims,
      allClaims: state.claims.allClaims
    }),
    shallowEqual
  );
  //claimsUIProps.setOwnClaims(ownClaims)
  useEffect(() => {
    dispatch(claimsActions.fetchClaimsForTransfer(userId)).then(()=>{
      dispatch(claimsActions.fetchAll())
    })
   
  }, [claim,dispatch]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={claim}
        onSubmit={() => saveClaim()}
      >
        {({ handleSubmit,setFieldValue }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
               <Alert variant="info">  Mesleki yetkiler  <Alert.Link href="#">Mevcut Yetkiler</Alert.Link> içinde pasif ve değiştirilemez olarak bilgi amaçlı gösterilmiştir. </Alert>
              <Form className="form form-label-right">
                {allClaims.length>0&&(

                  <TransferList allClaims={allClaims}  ownClaims={ownClaims}/>
                ) }
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
