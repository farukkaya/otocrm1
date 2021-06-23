// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/stocks/stocksActions"
import * as uiHelpers from "../StocksUIHelper";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useStocksUIContext } from "../StocksUIContext";
import { format } from 'react-string-format';
import BootstrapTable from "react-bootstrap-table-next";

export function StocksTable() {
  // Stocks UI Context
  const stocksUIContext = useStocksUIContext();
  const stocksUIProps = useMemo(() => {
    return {
      ids: stocksUIContext.ids,
      setIds: stocksUIContext.setIds,
      queryParams: stocksUIContext.queryParams,
      setQueryParams: stocksUIContext.setQueryParams,
      openEditStockPage: stocksUIContext.openEditStockPage,
      openDetailStockPage: stocksUIContext.openDetailStockPage,
      openDeleteStockDialog: stocksUIContext.openDeleteStockDialog,
      openUpdateStockStatusDialog:stocksUIContext.openUpdateStockStatusDialog,
      openUpdateStocksStatusDialog:stocksUIContext.openUpdateStocksStatusDialog,
    };
  }, [stocksUIContext]);

  // Getting curret state of stocks list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.stocks }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  // Stocks Redux state
  const dispatch = useDispatch();
  
  useEffect(() => {
    // clear selections list
    stocksUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchStocks(stocksUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocksUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      sort: true,
      text: "Id",
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
      dataField: "year",
      text:"Yıl",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "plateNo",
      text:"Plaka",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "buyingPrice",
      text:"Alım Fiyatı",
      sort: true,
      sortCaret: sortCaret,
      formatter:columnFormatters.PriceColumnFormatter, 
      formatExtraData: {
        key:"buyingPrice"
      },
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
      dataField: "color",
      text:"Renk",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "fuelType",
      text:"Yakıt Cinsi",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "gearType",
      text:"Vites Tipi",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "caseType",
      text:"Kasa Tipi",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "fromWho",
      text:"Kimden",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "source",
      text:"Alım Türü",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "isActive",
      text:"Durum",
      sort: true,
      sortCaret: sortCaret,
     formatter: columnFormatters.StatusColumnFormatter,
    },
    {
      dataField: "action",
      text:"İşlemler",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openUpdateStatusDialog: stocksUIProps.openUpdateStockStatusDialog,
        openEditPage: stocksUIProps.openEditStockPage,
        openDetailPage: stocksUIProps.openDetailStockPage,
        openDeleteDialog: stocksUIProps.openDeleteStockDialog,
       // key:"guid"
      },

      classes: "text-right pr-0",
      headerClasses:"text-right pr-3",

      style: {
        minWidth: "100px",
      },
    },
  ];
  // Table pagination properties
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {format("{2} Sonuçtan {0} ile {1} arası gösteriliyor",from,to,size)}
    </span>
  );
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: stocksUIProps.queryParams.pageSize,
    page: stocksUIProps.queryParams.pageNumber,
    hidePageListOnlyOnePage:false,
    paginationTotalRenderer: customTotal
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
                classes="table table-head-custom table-vertical-center"
                keyField="id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                selectRow={getSelectRow({
                  entities,
                  ids: stocksUIProps.ids,
                  setIds: stocksUIProps.setIds,
                })}
                bootstrap4
                bordered={false}
                remote
                onTableChange={getHandlerTableChange(
                  stocksUIProps.setQueryParams
                )}
                
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
