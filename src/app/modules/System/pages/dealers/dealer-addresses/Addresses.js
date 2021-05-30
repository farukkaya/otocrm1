import React from "react";
import { AddressesFilter } from "./AddressesFilter";
import { AddressesTable } from "./AddressesTable";
import { AddressesLoadingDialog } from "./AddressesLoadingDialog";
import { AddressesDeleteDialog } from "./AddressesDeleteDialog";
import { AddressDeleteDialog } from "./AddressDeleteDialog";
import { AddressUpdateStatusDialog } from "./AddressUpdateStatusDialog";
import { AddressesUpdateStatusDialog } from "./AddressesUpdateStatusDialog";
import { AddressUpdatePrimaryDialog } from "./AddressUpdatePrimaryDialog";
import { AddressesFetchDialog } from "./AddressesFetchDialog";
import { AddressEditDialog } from "./address-edit-dialog/AddressEditDialog";

export function Addresses() {
  return (
    <>
      <AddressesLoadingDialog />
      <AddressEditDialog />
      <AddressDeleteDialog />
      <AddressUpdateStatusDialog />
      
      <AddressUpdatePrimaryDialog/>
      <AddressesUpdateStatusDialog />
      <AddressesDeleteDialog />
      <AddressesFetchDialog />
      <div className="form margin-b-30">
        <AddressesFilter />
      </div>
      <AddressesTable />
    </>
  );
}
