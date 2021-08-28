// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../_redux/damages/damagesActions";
import * as uiHelpers from "./DamagesUIHelper";
import * as stocksuiHelpers from "../../stocks/StocksUIHelper";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useDamagesUIContext } from "./DamagesUIContext";

export function DamagesTable() {
  // Damages UI Context
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      ids: damagesUIContext.ids,
      setIds: damagesUIContext.setIds,
      queryParams: damagesUIContext.queryParams,
      setQueryParams: damagesUIContext.setQueryParams,
      stockId: damagesUIContext.stockId,
      openEditDamageDialog: damagesUIContext.openEditDamageDialog,
      openUpdateStatusDamageDialog:damagesUIContext.openUpdateStatusDamageDialog,
      openDeleteDamageDialog: damagesUIContext.openDeleteDamageDialog,
    };
  }, [damagesUIContext]);

  // Getting curret state of stocks list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.damages }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    damagesUIProps.setIds([]);
    dispatch(actions.fetchDamagesByStock(damagesUIProps.queryParams, damagesUIProps.stockId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [damagesUIProps.queryParams, dispatch, damagesUIProps.stockId]);
  const columns = [
    {
      dataField: "id",
      sort: true,
      text: "Id",
      sortCaret: sortCaret,
    },
  
    {
      dataField: "damageOrder",
      text:"Sıra",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "damageDate",
      text:"Hasar Tarihi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.DateColumnFormatter,
    },
    {
      dataField: "damageTypeId",
      text:"Hasar Tipi",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.ArrayColumnFormatter,
      formatExtraData: {
        array: stocksuiHelpers.DamageTypes,
        selector:"damageTypeId",
      },
    },  
    {
      dataField: "amount",
      text:"Hasar Tutarı",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.PriceColumnFormatter,
      formatExtraData: {
        key:"amount"
      }
    }, 
    {
      dataField: "action",
      text: "İşlemler",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openUpdateStatusDialog: damagesUIProps.openUpdateStatusDamageDialog,
        openEditPage: damagesUIProps.openEditDamageDialog,
        openDeleteDialog: damagesUIProps.openDeleteDamageDialog,
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
    sizePerPage: damagesUIProps.queryParams.pageSize,
    page: damagesUIProps.queryParams.pageNumber,
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
                  damagesUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: damagesUIProps.ids,
                  setIds: damagesUIProps.setIds,
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
