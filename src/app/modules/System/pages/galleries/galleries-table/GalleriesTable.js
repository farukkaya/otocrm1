// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/galleries/galleriesActions"
import * as carsActions from "../../../_redux/cars/carsActions"
import * as uiHelpers from "../GalleriesUIHelpers";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useGalleriesUIContext } from "../GalleriesUIContext";
import { format } from 'react-string-format';
import BootstrapTable from "react-bootstrap-table-next";

export function GalleriesTable() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return {
      ids: galleriesUIContext.ids,
      setIds: galleriesUIContext.setIds,
      queryParams: galleriesUIContext.queryParams,
      setQueryParams: galleriesUIContext.setQueryParams,
      openEditGalleryPage: galleriesUIContext.openEditGalleryPage,
      openDeleteGalleryDialog: galleriesUIContext.openDeleteGalleryDialog,
      openUpdateGalleryStatusDialog:galleriesUIContext.openUpdateGalleryStatusDialog,
      openUpdateGalleriesStatusDialog:galleriesUIContext.openUpdateGalleriesStatusDialog,
    };
  }, [galleriesUIContext]);

  // Getting curret state of galleries list from store (Redux)
  const { currentState,currentDealer } = useSelector(
    (state) => ({ 
      currentDealer: state.auth.user.dealer,
      currentState: state.galleries
    }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  // Galleries Redux state
  const dispatch = useDispatch();
  
  useEffect(() => {
    // clear selections list
    galleriesUIProps.setIds([]);
    dispatch(carsActions.fetchCars(galleriesUIProps.queryParams));

    // server call by queryParams
    if(currentDealer.isManager)
       dispatch(actions.fetchGalleries(galleriesUIProps.queryParams));
    else
      dispatch(actions.fetchGalleriesByDealer(galleriesUIProps.queryParams, currentDealer.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleriesUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      sort: true,
      text: "Id",
      sortCaret: sortCaret,
    },
    {
      dataField: "dealer",
      text:"Bayi",
      sort: true,
      hidden:!currentDealer.isManager,
      sortCaret: sortCaret,
    },
    {
      dataField: "name",
      text:"Galeri Adı",
      sort: true,
      sortCaret: sortCaret,
    },   
    {
      dataField: "capacity",
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
    sizePerPage: galleriesUIProps.queryParams.pageSize,
    page: galleriesUIProps.queryParams.pageNumber,
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
                  ids: galleriesUIProps.ids,
                  setIds: galleriesUIProps.setIds,
                })}
                bootstrap4
                bordered={false}
                remote
                onTableChange={getHandlerTableChange(
                  galleriesUIProps.setQueryParams
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
