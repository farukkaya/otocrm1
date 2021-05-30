// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import * as actions from "../../../_redux/addresses/addressesActions";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as uiHelpers from "./AddressesUIHelper";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useAddressesUIContext } from "./AddressesUIContext";

export function AddressesTable() {
  // Addresses UI Context
  const addressesUIContext = useAddressesUIContext();
  const addressesUIProps = useMemo(() => {
    return {
      ids: addressesUIContext.ids,
      setIds: addressesUIContext.setIds,
      queryParams: addressesUIContext.queryParams,
      setQueryParams: addressesUIContext.setQueryParams,
      relationGuid: addressesUIContext.relationGuid,
      openEditAddressDialog: addressesUIContext.openEditAddressDialog,
      openUpdateStatusAddressDialog:addressesUIContext.openUpdateStatusAddressDialog,
      openDeleteAddressDialog: addressesUIContext.openDeleteAddressDialog,
      openUpdatePrimaryAddressDialog:addressesUIContext.openUpdatePrimaryAddressDialog,
    };
  }, [addressesUIContext]);

  // Getting curret state of dealers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.addresses }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    addressesUIProps.setIds([]);
    addressesUIProps.queryParams.filter.relationGuid=addressesUIProps.relationGuid
    dispatch(actions.fetchAddresses(addressesUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressesUIProps.queryParams, dispatch, addressesUIProps.relationGuid]);
  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "name",
      text: "Adres Başlığı",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "isPrimaryAddress",
      text: "Statu",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
      formatExtraData: {
        trueText:"Birincil",
        falseText:"Diğer",
        selector:"isPrimaryAddress",
      },
    },
    {
      dataField: "city",
      text: "İl",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "town",
      text: "İlçe",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "neighborhood",
      text: "Mahalle",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "addressLine",
      text: "Adres",
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
        openEditPage: addressesUIProps.openEditAddressDialog,
        openDeleteDialog: addressesUIProps.openDeleteAddressDialog,
        openUpdateStatusDialog: addressesUIProps.openUpdateStatusAddressDialog,
        openUpdatePrimaryDialog: addressesUIProps.openUpdatePrimaryAddressDialog,
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
    sizePerPage: addressesUIProps.queryParams.pageSize,
    page: addressesUIProps.queryParams.pageNumber,
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
                  addressesUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: addressesUIProps.ids,
                  setIds: addressesUIProps.setIds,
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
