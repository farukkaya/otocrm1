// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import * as actions from "../../../_redux/claims/claimsActions";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as uiHelpers from "./ClaimsUIHelper";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useClaimsUIContext } from "./ClaimsUIContext";

export function ClaimsTable() {
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      ids: claimsUIContext.ids,
      setIds: claimsUIContext.setIds,
      queryParams: claimsUIContext.queryParams,
      setQueryParams: claimsUIContext.setQueryParams,
      userId: claimsUIContext.userId,
      claimType: claimsUIContext.claimType,
      openEditClaimDialog: claimsUIContext.openEditClaimDialog,
      openUpdateStatusClaimDialog:claimsUIContext.openUpdateStatusClaimDialog,
      openDeleteClaimDialog: claimsUIContext.openDeleteClaimDialog
    };
  }, [claimsUIContext]);

  // Getting curret state of dealers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.claims }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    claimsUIProps.setIds([]);
    
    claimsUIProps.queryParams.filter.userId=claimsUIProps.userId;
    dispatch(actions.fetchClaims(claimsUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimsUIProps.queryParams, dispatch, claimsUIProps.userId]);
  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "name",
      text: "Yetki Adı",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "claim",
      text: "Key",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "description",
      text: "Açıklama",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "createdDate",
      text: "Oluşturma Tarihi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.DateColumnFormatter,
    },
    {
      dataField: "isActive",
      text: "Durum",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
    },
    {
      dataField: "action",
      text:"İşlemler",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openUpdateStatusDialog: claimsUIProps.openUpdateStatusClaimDialog,
        openEditPage: claimsUIProps.openEditClaimDialog,
        openDeleteDialog: claimsUIProps.claimType=="2"?claimsUIProps.openDeleteClaimDialog:undefined
      },
      classes: "text-right p-0",
      headerClasses:"text-right pr-3",

      style: {
        minWidth: "100px",
      },
    },
  ];

  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: claimsUIProps.queryParams.pageSize,
    page: claimsUIProps.queryParams.pageNumber,
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
                  claimsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: claimsUIProps.ids,
                  setIds: claimsUIProps.setIds,
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
