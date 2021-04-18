import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { UsersFilter, prepareFilter } from "./users-filter/UsersFilter";
import { UsersTable } from "./users-table/UsersTable";
import { UsersGrouping } from "./users-grouping/UsersGrouping";
import { useUsersUIContext } from "./UsersUIContext";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";

export function UsersCard() {
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      isFiltering: usersUIContext.isFiltering,
      setIsFiltering: usersUIContext.setIsFiltering,
      queryParams: usersUIContext.queryParams,
      setQueryParams: usersUIContext.setQueryParams,
      newUserButtonClick: usersUIContext.newUserButtonClick,
      openDeleteUsersDialog: usersUIContext.openDeleteUsersDialog,
      openEditUserPage: usersUIContext.openEditUserPage,
      openDetailUserPage: usersUIContext.openDetailUserPage,
      openUpdateUsersStatusDialog:
        usersUIContext.openUpdateUsersStatusDialog,
      openFetchUsersDialog: usersUIContext.openFetchUsersDialog,
    };
  }, [usersUIContext]);
  const setIsFiltering = () => {
    usersUIContext.setIsFiltering(!usersUIProps.isFiltering)

    if (usersUIProps.isFiltering) {
      const newQueryParams = prepareFilter(usersUIProps.queryParams, {});
      usersUIContext.setQueryParams(newQueryParams)
    }
  }
  return (
    <Card>
      <CardHeader title="Kullanıcı Listesi">
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
            onClick={usersUIProps.newUserButtonClick}
          >
            Yeni Kullanıcı
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>

        <div className="form-filtration">
          <div className="row align-items-center">
            <div className="col-md-6 margin-bottom-10-mobile">
              {usersUIProps.ids.length > 0 && <UsersGrouping />}
            </div>
            <div className="col-md-6 text-left margin-bottom-10-mobile">
              {usersUIProps.isFiltering && <UsersFilter />}
            </div>
          </div>
        </div>
        <UsersTable />
      </CardBody>
    </Card>
  );
}
