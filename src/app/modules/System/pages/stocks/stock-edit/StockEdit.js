/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { format } from 'react-string-format';
import { v4 as generateGuid } from 'uuid';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import * as actions from "../../../_redux/stocks/stocksActions";
import { StockEditForm } from "./StockEditForm";

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
  const [isFirstPage, setIsFirtPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading,currentUser, stockForEdit,vehicleCategories ,vehicleBrands,vehicleModels,vehicleModelTypes,stockInsuranceValue} = useSelector(
    (state) => ({
      actionsLoading: state.stocks.actionsLoading,
      currentUser: state.auth.user,
      stockForEdit: state.stocks.stockForEdit,
      stockInsuranceValue: state.stocks.stockInsuranceValue,
      vehicleCategories: state.main.vehicleCategories.entities,
      vehicleBrands: state.main.vehicleBrands.entities,
      vehicleModels: state.main.vehicleModels.entities,
      vehicleModelTypes:state.main.vehicleModelTypes.entities,
    }),
    shallowEqual
  );


  const initStock = {
    id: undefined,
    dealerId:currentUser.dealerId,
    guid: generateGuid(),
    transactionId: generateGuid(),
    vinNo: "",
    engineNo: "",
    categoryId: "",//markalar                        
    brandId: "",//markalar                        
    modelId: "",//modeller                          
    modelTypeId: "",//modeller                          
    colorId: "",//renkler                            --Constant
    fuelTypeId: "",//Yakıt Tipleri                   --Constant
    gearTypeId: "",//Vites tipleri                   --Constant
    caseTypeId: "",// kasa tipleri                   --Constant
    fromWhoId: "",//kimden (Müşteri,Esnaf,İhale)     --Constant
    purchaseTypeId: "",//Alım Türü(Kredi Kapama,Takas,Nakit)  --Constant
    modelYear: "",
    plateNo: "",
    kilometer: "",
    enginePowerId: "",//motor gücü
    engineCapacityId: "",//motor hacmi
    buyingPrice: "",
    sellingPrice: "",
    minPrice: "",
    maxPrice: "",
    insuranceCode: "",//Kasko Kodu
    insuranceValue: "",// Kasko değeri
    tramerValue: "",// Kasko değeri
    tramerTypeId: "",// Kasko değeri
  
    stockExpertise:{
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
    stockDamages:[],
    documents:[],
    images:[]
  
  };
  useEffect(() => {
    dispatch(actions.fetchStock(id));
    let _title = id ? "" : "Yeni Stok"
    if (stockForEdit && id) {
      _title = format("Stok Güncelle -'{0}'", `${stockForEdit.brand} - ${stockForEdit.model}`);
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stockForEdit, id,dispatch]);

  const saveStock = (values) => {
    if (!id) {
      const stockWizardData = {
        stock: {
            dealerId: initStock.dealerId,
            plateNo: values.plateNo,
            categoryId: +values.categoryId,
            brandId: +values.brandId,
            modelId: +values.modelId,
            modelTypeId: +values.modelTypeId,
            modelYear: values.modelYear,
            kilometer: values.kilometer,
            caseTypeId: +values.caseTypeId,
            gearTypeId: +values.gearTypeId,
            fuelTypeId: +values.fuelTypeId,
            colorId: +values.colorId,
            enginePowerId: +values.enginePowerId,
            engineCapacityId: +values.engineCapacityId,
            vinNo: values.vinNo,
            engineNo: values.engineNo,
            fromWhoId: +values.fromWhoId,
            purchaseTypeId: +values.purchaseTypeId,
            tramerTypeId: +values.tramerTypeId,
            tramerValue: parseFloat(values.tramerValue),
            insuranceCode: +values.insuranceCode,
            insuranceValue: parseFloat(values.insuranceValue),
            buyingPrice: parseFloat(values.buyingPrice),
            sellingPrice: parseFloat(values.sellingPrice),
            minPrice: parseFloat(values.minPrice),
            maxPrice: parseFloat(values.maxPrice),
            transactionId:initStock.transactionId,
        },
        stockExpertise: values.stockExpertise,
        stockDamages:values.stockDamages
    }

    dispatch(actions.createStock(stockWizardData)).then((responseStock) => {
        dispatch(actions.fetchStocks({
            filter: {},
            sortOrder: "desc",
            sortField: "id",
            pageNumber: 1,
            pageSize: 10
        })).then(()=>{
          backToStocksList();
        })
    })
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
  const btnSave = useRef();
  const btnReset = useRef();
  const btnPrevious = useRef();
  const btnNext = useRef();

  const handleResetClick = () => {
    if (btnReset && btnReset.current)
    {
      btnReset.current.click();
      
      //AMAÇ: Eğer bu blok olmazsa reset fonksiyonu WizardPage'i başa alıyor ama componentleri temizlemiyor ikinci reset click'e ihtiyac duyuyoruz
      setTimeout(() => {
        btnReset.current.click();
      }, 200);
    }
  };

  const saveStockClick = () => {
    if (btnSave && btnSave.current) {
      btnSave.current.click();
    }
  };
  const previousClick = () => {
    if (btnPrevious && btnPrevious.current){
      const nextPageOrder=parseInt(btnNext.current.dataset.page)+1;
      setIsFirtPage(nextPageOrder===0)
      setIsLastPage(btnNext.current.dataset.pagecount-1==nextPageOrder)
        btnPrevious.current.click();
    }
    
  };
  const nextClick = () => {
    
    if (btnNext && btnNext.current){
      const nextPageOrder=parseInt(btnNext.current.dataset.page)+1;
      setIsFirtPage(nextPageOrder===0)
      setIsLastPage(btnNext.current.dataset.pagecount-1==nextPageOrder)
      btnNext.current.click();
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
            Listeye Dön
          </button>
          {`  `}
          <button
            className="btn btn-light ml-2"
            onClick={handleResetClick}
          >
            <i className="fa fa-redo"></i>
            Reset
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

          {`  `}
          {!isLastPage && (

            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-outline-primary ml-2"
              onClick={nextClick}
            >
              İleri <i className="fa fa-arrow-right"></i> 
            </button>
          )}

          {`  `}
          {isLastPage && (

            <button
              type="submit"
              data-wizard-type="action-submit"
              className="btn btn-primary ml-2"
              onClick={saveStockClick}
            >
              Kaydet
            </button>
          )}

        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>

        {id === undefined ? (<>
          <StockEditForm
            actionsLoading={actionsLoading}
            stock={initStock}
            btnSave={btnSave}
            btnReset={btnReset}
            btnPrevious={btnPrevious}
            btnNext={btnNext}
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
                stock={stockForEdit}
                btnSave={btnSave}
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
