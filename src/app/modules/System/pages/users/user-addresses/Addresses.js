import React from "react";
import { AddressesFilter } from "./AddressesFilter";
import { AddressesTable } from "./AddressesTable";
import { AddressesLoadingDialog } from "./AddressesLoadingDialog";
import { AddressesDeleteDialog } from "./AddressesDeleteDialog";
import { AddressDeleteDialog } from "./AddressDeleteDialog";
import { AddressUpdateStatusDialog } from "./AddressUpdateStatusDialog";
import { AddressesFetchDialog } from "./AddressesFetchDialog";
import { AddressEditDialog } from "./address-edit-dialog/AddressEditDialog";

export function Addresses() {
  return (
    <>
      <AddressesLoadingDialog />
      <AddressEditDialog />
      <AddressDeleteDialog />
      <AddressUpdateStatusDialog />
      <AddressesDeleteDialog />
      <AddressesFetchDialog />
      <div className="form margin-b-30">
        <AddressesFilter />
      </div>
      <AddressesTable />
    </>
  );
}
