// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/users/usersActions"
import * as uiHelpers from "../UsersUIHelpers";
import {
  UserTypeTitles,
  UserTypeCssClasses
}from "../UsersUIHelpers";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useUsersUIContext } from "../UsersUIContext";
import { format } from 'react-string-format';
import BootstrapTable from "react-bootstrap-table-next";

export function UsersTable() {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      queryParams: usersUIContext.queryParams,
      setQueryParams: usersUIContext.setQueryParams,
      openEditUserPage: usersUIContext.openEditUserPage,
      openDetailUserPage: usersUIContext.openDetailUserPage,
      openDeleteUserDialog: usersUIContext.openDeleteUserDialog,
      openUpdateUserStatusDialog:usersUIContext.openUpdateUserStatusDialog,
      openUpdateUsersStatusDialog:usersUIContext.openUpdateUsersStatusDialog,
    };
  }, [usersUIContext]);

  // Getting curret state of users list from store (Redux)
  const { currentState,currentDealer } = useSelector(
    (state) => ({ 
      currentState: state.users,
      currentDealer: state.auth.user.dealer,
     }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  // Users Redux state
  const dispatch = useDispatch();
  
  useEffect(() => {
    // clear selections list
    usersUIProps.setIds([]);
    // server call by queryParams
    usersUIProps.queryParams.filter.dealerId=currentDealer.id.toString();
    dispatch(actions.fetchUsers(usersUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      sortCaret: sortCaret,
    },
    
    // {
    //   dataField: "identityNo",
    //   text: "Kimlik No",
    //   sort: true,
    //   sortCaret: sortCaret,
    // },
    // {
    //   dataField: "isAdmin",
    //   text: "Yöneticilik",
    //   sort: true,
    //   sortCaret: sortCaret,
    //   formatter: columnFormatters.StatusColumnFormatter,
    //   formatExtraData: {
    //     trueText:"Yönetici",
    //     falseText:"Kullanıcı",
    //     selector:"isAdmin",
    //   }
    // },
    {
      dataField: "username",
      text: "Kullanıcı Adı",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "firstname",
      text: "İsim",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "lastname",
      text: "Soyisim",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "profession",
      text: "Meslek",
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
      dataField: "phone",
      text: "Telefon",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "location",
      text: "Lokasyon",
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
        openUpdateStatusDialog: usersUIProps.openUpdateUserStatusDialog,
        openEditPage: usersUIProps.openEditUserPage,
        openDetailPage: usersUIProps.openDetailUserPage,
        openDeleteDialog: usersUIProps.openDeleteUserDialog,
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
    sizePerPage: usersUIProps.queryParams.pageSize,
    page: usersUIProps.queryParams.pageNumber,
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
                  ids: usersUIProps.ids,
                  setIds: usersUIProps.setIds,
                })}
                bootstrap4
                bordered={false}
                remote
                onTableChange={getHandlerTableChange(
                  usersUIProps.setQueryParams
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
