// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as actions from "../../../_redux/galleries/galleriesActions";
import * as uiHelpers from "./GalleriesUIHelper";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import { useGalleriesUIContext } from "./GalleriesUIContext";

export function GalleriesTable() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      setIds: galleriesUIContext.setIds,
      queryParams: galleriesUIContext.queryParams,
      setQueryParams: galleriesUIContext.setQueryParams,
      dealerId: galleriesUIContext.dealerId,
      openEditGalleryDialog: galleriesUIContext.openEditGalleryDialog,
      openDeleteGalleryDialog: galleriesUIContext.openDeleteGalleryDialog,
    };
  }, [galleriesUIContext]);

  // Getting curret state of dealers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.galleries }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  useEffect(() => {
    galleriesUIProps.setIds([]);
    dispatch(
      actions.fetchGalleries(galleriesUIProps.queryParams, galleriesUIProps.dealerId)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.queryParams, dispatch, galleriesUIProps.dealerId]);
  const columns = [
    {
        dataField: "id",
        sort: true,
        text: "Id",
        sortCaret: sortCaret,
      },
      {
        dataField: "name",
        text:"Galeri Adı",
        sort: true,
        sortCaret: sortCaret,
      },   
      {
        dataField: "level",
        text:"Seviye",
        sort: true,
        sortCaret: sortCaret,
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
          openUpdateStatusDialog: galleriesUIProps.openUpdateGalleryStatusDialog,
          openEditPage: galleriesUIProps.openEditGalleryPage,
          openDeleteDialog: galleriesUIProps.openDeleteGalleryDialog,
        },
        classes: "text-right pr-0",
        headerClasses:"text-right pr-3",
  
        style: {
          minWidth: "100px",
        },
      }
  ];

  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: galleriesUIProps.queryParams.pageSize,
    page: galleriesUIProps.queryParams.pageNumber,
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
                  galleriesUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: galleriesUIProps.ids,
                  setIds: galleriesUIProps.setIds,
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
