/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Field } from "formik";
import * as Yup from "yup";
import { format } from 'react-string-format';
import { v4 as generateGuid } from 'uuid';

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  Input,
  Select,
  ModalProgressBar
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import * as actions from "../../../_redux/stocks/stocksActions";
import { StockEditForm } from "./StockEditForm";



const initStock = {
  id: undefined,
  guid: generateGuid(),
  vinNo: "",
  engineNo: "",
  brandId: undefined,//markalar                        
  modelId: undefined,//modeller                          
  colorId: undefined,//renkler                            --Constant
  fuelTypeId: undefined,//Yakıt Tipleri                   --Constant
  gearTypeId: undefined,//Vites tipleri                   --Constant
  caseTypeId: undefined,// kasa tipleri                   --Constant
  statusId: undefined,// Sıfır ,İkinci El                 --Constant
  fromWhoId: undefined,//kimden (Müşteri,Esnaf,İhale)     --Constant
  purchaseTypeId: undefined,//Alım Türü(Kredi Kapama,Takas,Nakit)  --Constant
  year: undefined,
  plateNo: "",
  kilometer: undefined,
  enginePower: undefined,//motor gücü
  engineCapacityId: undefined,//motor hacmi
  swap: false,
  buyingPrice: undefined,
  sellingPrice: undefined,
  cashSellingPrice: undefined,
  swapSellingPrice: undefined,
  insuranceCode: undefined,//Kasko Kodu
  insuranceValue: undefined,// Kasko değeri
  tramerValue: undefined,// Kasko değeri
  tramerTypeId: undefined,// Kasko değeri

  description: "",
  relationGuid: "",
  relationTable: "",
  expertiseValues:{
    rightBackFender:"orginal",
    backHood:"orginal",
    leftBackFender:"orginal",
    rightBackDoor:"orginal",
    rightFrontDoor:"orginal",
    ceiling:"orginal",
    leftBackDoor:"orginal", 
    leftFrontDoor:"orginal",
    rightFrontFender:"orginal",
    engineHood:"orginal",
    leftFrontFender:"orginal",
    frontBumper:"orginal",
    backBumper:"orginal"
  },
  documents:[],
  images:[]

};

export function StockEdit({
  history,
  match: {
    params: { id },
  },
}) {

  // Stocks UI Context
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading, stockForEdit,vehicleCategories ,vehicleBrands,vehicleModels,vehicleModelTypes,stockInsuranceValue} = useSelector(
    (state) => ({
      actionsLoading: state.stocks.actionsLoading,
      stockForEdit: state.stocks.stockForEdit,
      stockInsuranceValue: state.stocks.stockInsuranceValue,
      vehicleCategories: state.main.vehicleCategories.entities,
      vehicleBrands: state.main.vehicleBrands.entities,
      vehicleModels: state.main.vehicleModels.entities,
      vehicleModelTypes:state.main.vehicleModelTypes.entities,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchStock(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "Yeni Stok"
    if (stockForEdit && id) {
      _title = format("Stok Güncelle -'{0}'", `${stockForEdit.brand} - ${stockForEdit.model}`);
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stockForEdit, id]);

  const saveStock = (values) => {
    if (!id) {
      dispatch(actions.createStock(values))
      backToStocksList()
    } else {
      dispatch(actions.updateStock(values))//.then(() => );
      backToStocksList()
    }
  };

  const handleReset = (values) => {
    if (values.id) {
      values = stockForEdit
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

  const saveStockClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToStocksList = () => {
    history.push(`/system/stocks`);
  };

  // if (currentUser.stock === undefined && currentUser.stock.isManager) {
  //   alert("Stok Ekleme Yetkiniz Yok!!!");
  //   backToStocksList();
  // }
  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToStocksList}
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
            onClick={saveStockClick}
          >
            Kaydet
            </button>
            </>
          )} 

        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>

        {id === undefined ? (<>
          <StockEditForm
            actionsLoading={actionsLoading}
            stock={stockForEdit || initStock}
            btnRef={btnRef}
            btnReset={btnReset}
            saveStock={saveStock}
            handleReset={handleReset}
            categories={vehicleCategories}
            brands={vehicleBrands}
            models={vehicleModels}
            modelTypes={vehicleModelTypes}
            insuranceValue={stockInsuranceValue}
          />
        </>) : (<>
          <ul className="nav nav-tabs nav-tabs-line " role="tablist">
            <li className="nav-item" onClick={() => setTab("basic")}>
              <a className={`nav-link ${tab === "basic" && "active"}`}
                data-toggle="tab"
                role="tab"
                aria-selected={(tab === "basic")}
              >
                Stok
                  </a>
            </li>
            <li className="nav-item" onClick={() => setTab("documents")}>
              <a
                className={`nav-link ${tab === "documents" && "active"}`}
                data-toggle="tab"
                role="button"
                aria-selected={(tab === "documents")}
              >
                Dökümanları
                    </a>
            </li>
            <li className="nav-item" onClick={() => setTab("damages")}>
              <a
                className={`nav-link ${tab === "damages" && "active"}`}
                data-toggle="tab"
                role="button"
                aria-selected={(tab === "damages")}
              >
                Hasar Sorgu Kayıtları
                    </a>
            </li>
          </ul>
          <div className="mt-5">
            {tab === "basic" && (
              <StockEditForm
                actionsLoading={actionsLoading}
                stock={stockForEdit || initStock}
                btnRef={btnRef}
                btnReset={btnReset}
                saveStock={saveStock}
                handleReset={handleReset}
                categories={vehicleCategories}
                brands={vehicleBrands}
                models={vehicleModels}
                modelTypes={vehicleModelTypes}
                insuranceValue={stockInsuranceValue}

              />
            )}
            {tab === "documents" && id && (
              <h1>Dökümanlar</h1>
            )}
            {tab === "damages" && id && (
              <h1>Hasar Sorgu Kayıtları</h1>

            )}
          </div>
        </>)}


      </CardBody>
    </Card>
  );
}
