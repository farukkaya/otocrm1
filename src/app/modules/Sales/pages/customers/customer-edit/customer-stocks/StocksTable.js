// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../../_redux/stocks/stocksActions";
import * as uiHelpers from "./StocksUIHelper";
import * as columnFormatters from "../../../../pages/customers/customers-table/column-formatters";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../../_metronic/_helpers";
import { useStocksUIContext } from "./StocksUIContext";
import { Pagination } from "../../../../../../../_metronic/_partials/controls";

export function StocksTable() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      setIds: stocksUIContext.setIds,
      queryParams: stocksUIContext.queryParams,
      setQueryParams: stocksUIContext.setQueryParams,
      dealerId: stocksUIContext.dealerId,
      customerId: stocksUIContext.customerId,

      openDetailStockPage: stocksUIContext.openDetailStockPage,
      openDeleteStockDialog: stocksUIContext.openDeleteStockDialog,
      openEditGalleryDialog: stocksUIContext.openEditGalleryDialog,
      openUpdateStatusGalleryDialog:stocksUIContext.openUpdateStatusGalleryDialog,
      openDeleteGalleryDialog: stocksUIContext.openDeleteGalleryDialog,
    };
  }, [stocksUIContext]);
  // Getting curret state of dealers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.stocks }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    stocksUIProps.setIds([]);
     if(!stocksUIProps.customerId)
      dispatch(actions.fetchStocksByDealer(stocksUIProps.queryParams, stocksUIProps.dealerId));
    else
      dispatch(actions.fetchInterestedStocks(stocksUIProps.queryParams, stocksUIProps.customerId));
    
  }, [stocksUIProps.queryParams, dispatch, stocksUIProps.galleryId]);
  const columns = [
    {
      dataField: "id",
      sort: true,
      text: "Id",
      sortCaret: sortCaret,
    },
    {
      dataField: "plateNo",
      text:"Plaka",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "category",
      text:"Kategori",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "brand",
      text:"Marka",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "model",
      text:"Model",
      sort: true,
      sortCaret: sortCaret,
    },   
    {
      dataField: "modelType",
      text:"Tip",
      sort: true,
      sortCaret: sortCaret,
    },   
    {
      dataField: "modelYear",
      text:"Yıl",
      sort: true,
      sortCaret: sortCaret,
    },
  
    {
      dataField: "sellingPrice",
      text:"Satış Fiyatı",
      sort: true,
      sortCaret: sortCaret,
      formatter:columnFormatters.PriceColumnFormatter,
      formatExtraData: {
        key:"sellingPrice"
      },

    },
     {
      dataField: "colorId",
      text:"Renk",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.ArrayColumnFormatter,
      formatExtraData: {
        array: uiHelpers.CarColors,
        selector:"colorId",
      },
    }, 
    {
      dataField: "fuelTypeId",
      text:"Yakıt Cinsi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.ArrayColumnFormatter,
      formatExtraData: {
        array: uiHelpers.FuelTypes,
        selector:"fuelTypeId",
      },
    }, 
    {
      dataField: "gearTypeId",
      text:"Vites Tipi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.ArrayColumnFormatter,
      formatExtraData: {
        array: uiHelpers.GearTypes,
        selector:"gearTypeId",
      },
    }, 
    {
      dataField: "caseTypeId",
      text:"Kasa Tipi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.ArrayColumnFormatter,
      formatExtraData: {
        array: uiHelpers.CaseTypes,
        selector:"caseTypeId",
      },
    }, 
 
    {
      dataField: "action",
      text: "İşlemler",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openDetailPage: stocksUIProps.openDetailStockPage,
        openDeleteDialog: stocksUIProps.openDeleteStockDialog,
      },
      classes: "text-right p-0",
      headerClasses: "text-right pr-3",

      style: {
        minWidth: "100px",
      },
    }

  ];

  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: stocksUIProps.queryParams.pageSize,
    page: stocksUIProps.queryParams.pageNumber,
  };
  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={listLoading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bordered={false}
                bootstrap4
                remote
                keyField="id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  stocksUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: stocksUIProps.ids,
                  setIds: stocksUIProps.setIds,
                })}
                {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
