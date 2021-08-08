// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../_redux/documents/documentsActions";
import * as uiHelpers from "./DocumentsUIHelper";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useDocumentsUIContext } from "./DocumentsUIContext";

export function DocumentsTable() {
  // Documents UI Context
  const documentsUIContext = useDocumentsUIContext();
  const documentsUIProps = useMemo(() => {
    return {
      ids: documentsUIContext.ids,
      setIds: documentsUIContext.setIds,
      queryParams: documentsUIContext.queryParams,
      setQueryParams: documentsUIContext.setQueryParams,
      stockId: documentsUIContext.stockId,
      openEditDocumentDialog: documentsUIContext.openEditDocumentDialog,
      openUpdateStatusDocumentDialog:documentsUIContext.openUpdateStatusDocumentDialog,
      openDeleteDocumentDialog: documentsUIContext.openDeleteDocumentDialog,
    };
  }, [documentsUIContext]);

  // Getting curret state of stocks list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.documents }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    documentsUIProps.setIds([]);
    dispatch(actions.fetchDocumentsByStock(documentsUIProps.queryParams, documentsUIProps.stockId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentsUIProps.queryParams, dispatch, documentsUIProps.stockId]);
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
      dataField: "validityDate",
      text:"Geçerlilik Tarihi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.DateColumnFormatter,
    },
    {
      dataField: "description",
      text:"Açıklama",
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
    dataField: "path",
    text:"Dosya",
    sort: false,
    formatter:(cellContent, row,rowIndex )=>  <a target='_blank' href={process.env.REACT_APP_API_DEVELOPMENT_URL+row.path}>Belgeyi Göster</a>
  },
    {
      dataField: "action",
      text: "İşlemler",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openUpdateStatusDialog: documentsUIProps.openUpdateStatusDocumentDialog,
        openEditPage: documentsUIProps.openEditDocumentDialog,
        openDeleteDialog: documentsUIProps.openDeleteDocumentDialog,
      },
      classes: "text-right pr-0",
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
    sizePerPage: documentsUIProps.queryParams.pageSize,
    page: documentsUIProps.queryParams.pageNumber,
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
                  documentsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: documentsUIProps.ids,
                  setIds: documentsUIProps.setIds,
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
