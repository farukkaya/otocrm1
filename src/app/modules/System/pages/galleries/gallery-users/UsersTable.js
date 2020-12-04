// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../_redux/users/usersActions";
import * as uiHelpers from "./UsersUIHelper";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useUsersUIContext } from "./UsersUIContext";

export function UsersTable() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      queryParams: usersUIContext.queryParams,
      setQueryParams: usersUIContext.setQueryParams,
      galleryId: usersUIContext.galleryId,
      openEditUserDialog: usersUIContext.openEditUserDialog,
      openUpdateStatusUserDialog:usersUIContext.openUpdateStatusUserDialog,
      openDeleteUserDialog: usersUIContext.openDeleteUserDialog,
    };
  }, [usersUIContext]);

  // Getting curret state of galleries list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.users }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    usersUIProps.setIds([]);
    dispatch(actions.fetchUsersByGallery(usersUIProps.queryParams, usersUIProps.galleryId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.queryParams, dispatch, usersUIProps.galleryId]);
  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "email",
      text: "E-Posta",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "identityNo",
      text: "Kimlik No",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "firstName",
      text: "İsim",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "lastName",
      text: "Soyisim",
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
        openUpdateStatusDialog: usersUIProps.openUpdateStatusUserDialog,
        openEditPage: usersUIProps.openEditUserDialog,
        openDeleteDialog: usersUIProps.openDeleteUserDialog,
      },
      classes: "text-right pr-0",
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
    sizePerPage: usersUIProps.queryParams.pageSize,
    page: usersUIProps.queryParams.pageNumber,
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
                  usersUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: usersUIProps.ids,
                  setIds: usersUIProps.setIds,
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
