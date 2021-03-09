import React, { useMemo } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
    Notice,
} from "../../../../../_metronic/_partials/controls";
import { DealersFilter, prepareFilter } from "./dealers-filter/DealersFilter";
import { DealersTable } from "./dealers-table/DealersTable";
import { DealersGrouping } from "./dealers-grouping/DealersGrouping";
import { useDealersUIContext } from "./DealersUIContext";
import { shallowEqual, useSelector } from "react-redux";

export function DealersCard() {
    const dealersUIContext = useDealersUIContext();
    const dealersUIProps = useMemo(() => {
        return {
            ids: dealersUIContext.ids,
            isFiltering: dealersUIContext.isFiltering,
            setIsFiltering: dealersUIContext.setIsFiltering,
            queryParams: dealersUIContext.queryParams,
            setQueryParams: dealersUIContext.setQueryParams,
            newDealerButtonClick: dealersUIContext.newDealerButtonClick,
            openDeleteDealerDialog: dealersUIContext.openDeleteDealersDialog,
            openUpdateDealersStatusDialog:
                dealersUIContext.openUpdateDealersStatusDialog,
            openFetchDealersDialog: dealersUIContext.openFetchDealersDialog,
        };
    }, [dealersUIContext]);
    const setIsFiltering = () => {
        dealersUIContext.setIsFiltering(!dealersUIProps.isFiltering)

        if (dealersUIProps.isFiltering) {
            const newQueryParams = prepareFilter(dealersUIProps.queryParams, {});
            dealersUIContext.setQueryParams(newQueryParams)
        }
    }
    // const { lastError } = useSelector(
    //     (state) => ({ lastError: state.dealers.lastError }),
    //     shallowEqual
    // );
    return (
        <>
            {/* {lastError &&
                <Notice icon="flaticon-warning font-primary">
                    <span>
                        {lastError.split(':')[1]}
                    </span>
                </Notice>
            } */}
            <Card>
                <CardHeader title="Bayi Listesi">
                    <CardHeaderToolbar>
                        <button
                            type="button"
                            className="btn btn-sm btn-primary mr-1"
                            onClick={setIsFiltering}>
                            <span className="svg-icon menu-icon">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/Text/Filter.svg")} />
                            </span>
                            <span className="menu-text">Filtre</span>
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-primary mr-1"
                            onClick={dealersUIProps.newDealerButtonClick}>
                            Yeni Bayi
                    </button>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <div className="form-filtration">
                        <div className="row align-items-center">
                            <div className="col-md-6 margin-bottom-10-mobile">
                                {dealersUIProps.ids.length > 0 && <DealersGrouping />}
                            </div>
                            <div className="col-md-6 text-left margin-bottom-10-mobile">
                                {dealersUIProps.isFiltering && <DealersFilter />}
                            </div>
                        </div>
                    </div>
                    <DealersTable />
                </CardBody>
            </Card>
        </>
    );
}
