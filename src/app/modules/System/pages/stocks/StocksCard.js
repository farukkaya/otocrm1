import React, { useMemo } from "react";
import SVG from "react-inlinesvg";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
import { StocksFilter, prepareFilter } from "./stocks-filter/StocksFilter";
import { StocksTable } from "./stocks-table/StocksTable";
import { StocksGrouping } from "./stocks-grouping/StocksGrouping";
import { useStocksUIContext } from "./StocksUIContext";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";

export function StocksCard() {
    const stocksUIContext = useStocksUIContext();
    const stocksUIProps = useMemo(() => {
        return {
            ids: stocksUIContext.ids,
            isFiltering: stocksUIContext.isFiltering,
            setIsFiltering: stocksUIContext.setIsFiltering,
            queryParams: stocksUIContext.queryParams,
            setQueryParams: stocksUIContext.setQueryParams,
            newStockButtonClick: stocksUIContext.newStockButtonClick,
            openDeleteStockDialog: stocksUIContext.openDeleteStocksDialog,
            openUpdateStocksStatusDialog:
                stocksUIContext.openUpdateStocksStatusDialog,
            openFetchStocksDialog: stocksUIContext.openFetchStocksDialog,
        };
    }, [stocksUIContext]);
    const setIsFiltering = () => {
        stocksUIContext.setIsFiltering(!stocksUIProps.isFiltering)

        if (stocksUIProps.isFiltering) {
            const newQueryParams = prepareFilter(stocksUIProps.queryParams, {});
            stocksUIContext.setQueryParams(newQueryParams)
        }
    }
    // const { lastError } = useSelector(
    //     (state) => ({ lastError: state.stocks.lastError }),
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
                <CardHeader title="Stok Listesi">
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
                            onClick={stocksUIProps.newStockButtonClick}>
                            Yeni Stok
                    </button>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <div className="form-filtration">
                        <div className="row align-items-center">
                            <div className="col-md-6 margin-bottom-10-mobile">
                                {stocksUIProps.ids.length > 0 && <StocksGrouping />}
                            </div>
                            <div className="col-md-6 text-left margin-bottom-10-mobile">
                                {stocksUIProps.isFiltering && <StocksFilter />}
                            </div>
                        </div>
                    </div>
                    <StocksTable />
                </CardBody>
            </Card>
        </>
    );
}
