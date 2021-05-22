import React, { useEffect, useState, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import * as actions from "../../../_redux/customers/customersActions";
import { CustomerEditForm } from "./CustomerEditForm";
import { format } from 'react-string-format';
import { v4 as generateGuid } from 'uuid';

const initCustomer={
  guid: generateGuid(),
<<<<<<< HEAD
  firstName : "",
  lastname : "",
=======
  firstname : "",
  lastName : "",
>>>>>>> CFN-230521-firstName
  personalPhone : "",
  workPhone : "",
  identityNo : "",
  email:"",
  advancePayment: "",
  customerTypeId : undefined,
  customerSourceId:undefined,
  paymentMethodId: undefined,
  isActive : true,
  createdDate : "07/03/2015",
  createdBy : 1,
  updatedDate : null,
  updatedBy : null,
  deletedDate : null,
  deletedBy : null,
}
export function CustomerEdit({
  history,
  match: {
    params: { id },
  },
}) {
 
  // Customers UI Context
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading, customerForEdit,currentUser,cities, towns, neighborhoods } = useSelector(
    (state) => ({
      currentUser: state.auth.user,
      actionsLoading: state.customers.actionsLoading,
      customerForEdit: state.customers.customerForEdit,
      cities: state.main.cities.entities,
      towns: state.main.towns.entities,
      neighborhoods: state.main.neighborhoods.entities,
    }),
    shallowEqual
  );

  // const getTowns = (e) => {
  //   dispatch(townsActions.fetchTownsByCity(e.target.value))

  //   return new Promise((resolve, reject) =>  resolve(towns));
  // };
  // const getNeighborhoods = (e) => {
  //   dispatch(neighborhoodsActions.fetchNeighborhoodsByTown(e.target.value))
  //   return new Promise((resolve, reject) =>  resolve(neighborhoods));
  // };
  useEffect(() => {
    dispatch(actions.fetchCustomer(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "Yeni Müşteri"
    if (customerForEdit && id) {
<<<<<<< HEAD
      _title = format("Müşteri Güncelle -'{0}'", `${customerForEdit.firstName} ${customerForEdit.lastname}`);
=======
      _title = format("Müşteri Güncelle -'{0}'", `${customerForEdit.firstname} ${customerForEdit.lastName}`);
>>>>>>> CFN-230521-firstName
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerForEdit, id]);

  const saveCustomer = (values) => {
    if (!id) {
      dispatch(actions.createCustomer(values))
      backToCustomersList()
    } else {
      dispatch(actions.updateCustomer(values))//.then(() => );
      backToCustomersList()
    }
  };

  const handleReset = (values) => {
    if (values.id) {
      values = customerForEdit
    } else {

    }
  };
  const btnRef = useRef();
  const btnReset = useRef();

  const handleResetClick = () => {
    if (btnReset && btnReset.current) {
      btnReset.current.click();
    }
  };

  const saveCustomerClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToCustomersList = () => {
    history.push(`/sales/customers`);
  };


  return (
    <Card>
    {actionsLoading && <ModalProgressBar />}
    <CardHeader title={title}>
      <CardHeaderToolbar>
        <button
          type="button"
          onClick={backToCustomersList}
          className="btn btn-light"
        >
          <i className="fa fa-arrow-left"></i>
        Geri
        </button>
        {`  `}
        <button
          className="btn btn-light ml-2"
          onClick={handleResetClick}
        >
          <i className="fa fa-redo"></i>
           Reset
         </button>
        {id && (
          <>

            {`  `}
            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-primary ml-2"
              onClick={saveCustomerClick}
            >
              Kaydet
          </button>
          </>
        )}

      </CardHeaderToolbar>
    </CardHeader>
    <CardBody>
      <CustomerEditForm
        saveCustomer={saveCustomer}
        handleReset={handleReset}
        actionsLoading={actionsLoading}
        customer={customerForEdit || initCustomer}
        cities={cities}
        towns={towns}
        currentGalleryId={currentUser.dealer?.id}
        neighborhoods={neighborhoods}
      />
      </CardBody>
    </Card>
  );
}
