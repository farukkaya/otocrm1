// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/dealers/dealersActions"
import * as uiHelpers from "../DealersUIHelpers";
import {
  DealerTypeTitles,
  DealerTypeCssClasses
}from "../DealersUIHelpers";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useDealersUIContext } from "../DealersUIContext";
import { format } from 'react-string-format';
import BootstrapTable from "react-bootstrap-table-next";

export function DealersTable() {
  // Dealers UI Context
  const dealersUIContext = useDealersUIContext();
  const dealersUIProps = useMemo(() => {
    return {
      ids: dealersUIContext.ids,
      setIds: dealersUIContext.setIds,
      queryParams: dealersUIContext.queryParams,
      setQueryParams: dealersUIContext.setQueryParams,
      openEditDealerPage: dealersUIContext.openEditDealerPage,
      openDetailDealerPage: dealersUIContext.openDetailDealerPage,
      openDeleteDealerDialog: dealersUIContext.openDeleteDealerDialog,
      openUpdateDealerStatusDialog:dealersUIContext.openUpdateDealerStatusDialog,
      openUpdateDealersStatusDialog:dealersUIContext.openUpdateDealersStatusDialog,
    };
  }, [dealersUIContext]);

  // Getting curret state of dealers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.dealers }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  // Dealers Redux state
  const dispatch = useDispatch();
  
  useEffect(() => {
    // clear selections list
    dealersUIProps.setIds([]);
    // server call by queryParams
    
    dispatch(actions.fetchDealers(dealersUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealersUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      sort: true,
      text: "Id",
      sortCaret: sortCaret,
    },
    {
      dataField: "name",
      text:"Adı",
      sort: true,
      sortCaret: sortCaret,
    }, 
    {
      dataField: "dealerTypeId",
      text:"Bayi Tipi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.TypeColumnFormatter,
      formatExtraData: {
        array: DealerTypeTitles,
        classList: DealerTypeCssClasses,
        selector:"dealerTypeId",
      },
    },
    {
      dataField: "capacityId",
      text:"Kapasite",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.CapacityColumnFormatter,
    },
  
    
    {
      dataField: "taxOffice",
      text:"Vergi Dairesi",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "taxIdentityNo",
      text:"Vergi No",
      sort: true,
      sortCaret: sortCaret,
    },
    // {
    //   dataField: "admin",
    //   text:"Yönetici",
    //   sort: true,
    //   sortCaret: sortCaret,
    // }, 
    
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
        openUpdateStatusDialog: dealersUIProps.openUpdateDealerStatusDialog,
        openEditPage: dealersUIProps.openEditDealerPage,
        openDetailPage: dealersUIProps.openDetailDealerPage,
        openDeleteDialog: dealersUIProps.openDeleteDealerDialog,
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
    sizePerPage: dealersUIProps.queryParams.pageSize,
    page: dealersUIProps.queryParams.pageNumber,
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
                  ids: dealersUIProps.ids,
                  setIds: dealersUIProps.setIds,
                })}
                bootstrap4
                bordered={false}
                remote
                onTableChange={getHandlerTableChange(
                  dealersUIProps.setQueryParams
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
