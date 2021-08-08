import React from "react";
import { DamagesFilter } from "./DamagesFilter";
import { DamagesTable } from "./DamagesTable";
import { DamagesLoadingDialog } from "./DamagesLoadingDialog";
import { DamagesDeleteDialog } from "./DamagesDeleteDialog";
import { DamageDeleteDialog } from "./DamageDeleteDialog";
import { DamageUpdateStatusDialog } from "./DamageUpdateStatusDialog";
import { DamagesFetchDialog } from "./DamagesFetchDialog";
import { DamageEditDialog } from "./damage-edit-dialog/DamageEditDialog";

export function Damages() {

  return (
    <>
      <DamagesLoadingDialog />
      <DamageEditDialog />
      <DamageDeleteDialog />
      <DamageUpdateStatusDialog />
      <DamagesDeleteDialog />
      <DamagesFetchDialog />
      <div className="form margin-b-30">
        <DamagesFilter />
       
      </div>
      <DamagesTable />
    </>
  );
}
