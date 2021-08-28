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
import { DocumentsUIProvider } from "../../../../System/pages/stocks/stock-documents/DocumentsUIContext";
import { Documents } from "../../../../System/pages/stocks/stock-documents/Documents";
import { AddressesUIProvider } from "../../../../System/pages/dealers/dealer-addresses/AddressesUIContext";
import { Addresses } from "../../../../System/pages/dealers/dealer-addresses/Addresses";
import { StocksUIProvider } from "./customer-stocks/StocksUIContext";
import { Stocks } from "./customer-stocks/Stocks";

export function CustomerEdit({
  history,
  match: {
    params: { id },
  },
}) {
  const openDetailStockPage= (id) => {
    window.open(`/system/stocks/${id}/detail`, "_blank")
    //history.push(`/system/stocks/${id}/detail`);
  };
  // Customers UI Context
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const [isFirstPage, setIsFirtPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading, customerForEdit, currentUser, cities, towns, neighborhoods } = useSelector(
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

  const initCustomer = {
    dealerId: currentUser.dealerId,
    salesPersonId: currentUser.id,

    guid: generateGuid(),
    firstName: "",
    lastName: "",
    phone1: "",
    phone2: "",
    identityNo: "",
    email: "",
    advancePayment: "",
    customerTypeId: "",
    customerSourceId: "",
    paymentMethodId: "",
    selectedStocks: []
  }
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
      _title = format("Müşteri Güncelle -'{0}'", `${customerForEdit.firstName} ${customerForEdit.lastName}`);
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerForEdit, id]);

  const saveCustomer = (values) => {
    if (!id) {
      const customerkWizardData = {
        customer: {
          dealerId: initCustomer.dealerId,
          salesPersonId: initCustomer.salesPersonId,
          customerTypeId: +values.customerTypeId,
          paymentMethodId: +values.paymentMethodId,
          customerSourceId: +values.customerSourceId,
          firstName: values.firstName,
          lastName: values.lastName,
          identityNo: values.identityNo,
          email: values.email,
          phone1: values.phone1,
          phone2: values.phone2,
          advancePayment: parseFloat(values.advancePayment),
        },
        address: {
          isPrimaryAddress: true,
          name: values.addressName,
          cityId: +values.cityId,
          townId: +values.townId,
          neighborhoodId: +values.neighborhoodId,
          addressLine: values.addressLine,
          relationGuid: values.guid
        },
        stocks: values.selectedStocks,
      }
      dispatch(actions.createCustomer(customerkWizardData)).then((resp) => {
        backToCustomersList()
      })
    }
    else{
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
  const btnSave = useRef();
  const btnReset = useRef();
  const btnPrevious = useRef();
  const btnNext = useRef();

  const handleResetClick = () => {
    if (btnReset && btnReset.current) {
      btnReset.current.click();

      //AMAÇ: Eğer bu blok olmazsa reset fonksiyonu WizardPage'i başa alıyor ama componentleri temizlemiyor ikinci reset click'e ihtiyac duyuyoruz
      setTimeout(() => {
        btnReset.current.click();
      }, 100);
    }
  };

  const saveCustomerClick = () => {
    if (btnSave && btnSave.current) {
      btnSave.current.click();
    }
  };
  const previousClick = () => {
    if (btnPrevious && btnPrevious.current) {
      const nextPageOrder = parseInt(btnNext.current.dataset.page) + 1;
      setIsFirtPage(nextPageOrder === 0)
      setIsLastPage(btnNext.current.dataset.pagecount - 1 == nextPageOrder)
      btnPrevious.current.click();
    }

  };
  const nextClick = () => {
    if (btnNext && btnNext.current) {
      const nextPageOrder = parseInt(btnNext.current.dataset.page) + 1;
      setIsFirtPage(nextPageOrder === 0)
      setIsLastPage(btnNext.current.dataset.pagecount - 1 == nextPageOrder)
      btnNext.current.click();
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
            <i className="fa fa-arrow-left"></i> Listeye Dön
          </button>
          {`  `}
          <button
            className="btn btn-light ml-2"
            onClick={handleResetClick}
          >
            <i className="fa fa-redo"></i> Reset
          </button>
          {`  `}
          {!isFirstPage && (
            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-outline-primary ml-2"
              onClick={previousClick}
            >
              <i className="fa fa-arrow-left"></i> Geri
            </button>)}

            {id && (

<button
  type="submit"
  data-wizard-type="action-submit"
  className="btn btn-primary ml-2"
  onClick={saveCustomerClick}
>
  Kaydet
</button>
)}
          {isLastPage  && (

            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-primary ml-2"
              onClick={saveCustomerClick}
            >
              Kaydet
            </button>
          )}
          {`  `}

          {!isLastPage && !id && (

            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-outline-primary ml-2"
              onClick={nextClick}
            >
              İleri <i className="fa fa-arrow-right"></i>
            </button>
          )}

       

        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {!id && (
          <CustomerEditForm
            actionsLoading={actionsLoading}
            customer={initCustomer}
            btnSave={btnSave}
            btnReset={btnReset}
            btnPrevious={btnPrevious}
            btnNext={btnNext}
            saveCustomer={saveCustomer}
            handleReset={handleReset}
            cities={cities}
            towns={towns}
            currentDealerId={currentUser.dealer?.id}
            neighborhoods={neighborhoods}
            openDetailStockPage={openDetailStockPage}
          />
        )}
        {customerForEdit && (
          <>
            <ul className="nav nav-tabs nav-tabs-line " role="tablist">
              <li className="nav-item" onClick={() => setTab("basic")}>
                <a className={`nav-link ${tab === "basic" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "basic")}
                >
                  Müşteri
                </a>
              </li>
              <li className="nav-item" onClick={() => setTab("interestedStocks")}>
                <a
                  className={`nav-link ${tab === "interestedStocks" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "interestedStocks")}
                >
                  İlgilendiği Araçlar
                </a>
              </li>
              <li className="nav-item" onClick={() => setTab("documents")}>
                <a
                  className={`nav-link ${tab === "documents" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "documents")}
                >
                  Belgeler
                </a>
              </li>
              <li className="nav-item" onClick={() => setTab("addresses")}>
                <a
                  className={`nav-link ${tab === "addresses" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "addresses")}
                >
                  Adresleri
                </a>
              </li>

            

            </ul>
            <div className="mt-5">
              {tab === "basic" && (
                <CustomerEditForm
                  actionsLoading={actionsLoading}
                  customer={customerForEdit}
                  btnSave={btnSave}
                  btnReset={btnReset}
                  btnPrevious={btnPrevious}
                  btnNext={btnNext}
                  saveCustomer={saveCustomer}
                  handleReset={handleReset}
                  cities={cities}
                  towns={towns}
                  currentDealerId={currentUser.dealer?.id}
                  neighborhoods={neighborhoods}
                />

               )}
                 {tab === "interestedStocks" && id && (
                <StocksUIProvider currentDealerId={customerForEdit.dealerId} currentCustomerId={customerForEdit.id} openDetailStockPage={openDetailStockPage}> 
                  <Stocks />
                </StocksUIProvider>
              )}
              {tab === "documents" && id && (
                <DocumentsUIProvider currentStockId={customerForEdit.guid}>
                  <Documents />
                </DocumentsUIProvider>
              )}
               {tab === "addresses" && id && (
                <AddressesUIProvider guid={customerForEdit.guid}>
                  <Addresses />
                </AddressesUIProvider>
              )}
             
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
}
