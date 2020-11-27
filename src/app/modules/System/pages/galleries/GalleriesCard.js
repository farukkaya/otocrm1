import React, { useMemo } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
import { GalleriesFilter, prepareFilter } from "./galleries-filter/GalleriesFilter";
import { GalleriesTable } from "./galleries-table/GalleriesTable";
import { GalleriesGrouping } from "./galleries-grouping/GalleriesGrouping";
import { useGalleriesUIContext } from "./GalleriesUIContext";

export function GalleriesCard() {
    const galleriesUIContext = useGalleriesUIContext();
    const galleriesUIProps = useMemo(() => {
        return {
            ids: galleriesUIContext.ids,
            isFiltering: galleriesUIContext.isFiltering,
            setIsFiltering: galleriesUIContext.setIsFiltering,
            queryParams: galleriesUIContext.queryParams,
            setQueryParams: galleriesUIContext.setQueryParams,
            newGalleryButtonClick: galleriesUIContext.newGalleryButtonClick,
            openDeleteGalleryDialog: galleriesUIContext.openDeleteGalleriesDialog,
            openUpdateGalleriesStatusDialog:
                galleriesUIContext.openUpdateGalleriesStatusDialog,
            openFetchGalleriesDialog: galleriesUIContext.openFetchGalleriesDialog,
        };
    }, [galleriesUIContext]);
    const setIsFiltering = () => {
        galleriesUIContext.setIsFiltering(!galleriesUIProps.isFiltering)

        if (galleriesUIProps.isFiltering) {
            const newQueryParams = prepareFilter(galleriesUIProps.queryParams, {});
            galleriesUIContext.setQueryParams(newQueryParams)
        }
    }
    // const { lastError } = useSelector(
    //     (state) => ({ lastError: state.galleries.lastError }),
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
                <CardHeader title="Galeri Listesi">
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
                            onClick={galleriesUIProps.newGalleryButtonClick}>
                            Yeni Galeri
                    </button>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <div className="form-filtration">
                        <div className="row align-items-center">
                            <div className="col-md-6 margin-bottom-10-mobile">
                                {galleriesUIProps.ids.length > 0 && <GalleriesGrouping />}
                            </div>
                            <div className="col-md-6 text-left margin-bottom-10-mobile">
                                {galleriesUIProps.isFiltering && <GalleriesFilter />}
                            </div>
                        </div>
                    </div>
                    <GalleriesTable />
                </CardBody>
            </Card>
        </>
    );
}
