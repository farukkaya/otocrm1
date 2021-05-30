import React from "react";
import { ClaimsFilter } from "./ClaimsFilter";
import { ClaimsTable } from "./ClaimsTable";
import { ClaimsLoadingDialog } from "./ClaimsLoadingDialog";
import { ClaimsDeleteDialog } from "./ClaimsDeleteDialog";
import { ClaimDeleteDialog } from "./ClaimDeleteDialog";
import { ClaimUpdateStatusDialog } from "./ClaimUpdateStatusDialog";
import { ClaimsUpdateStatusDialog } from "./ClaimsUpdateStatusDialog";
import { ClaimsFetchDialog } from "./ClaimsFetchDialog.js";
import { ClaimEditDialog } from "./claim-edit-dialog/ClaimEditDialog";

export function Claims() {
  return (
    <>
      <ClaimsLoadingDialog />
      <ClaimEditDialog />
      <ClaimDeleteDialog />
      <ClaimUpdateStatusDialog />
      <ClaimsUpdateStatusDialog />
      <ClaimsDeleteDialog />
      <ClaimsFetchDialog />
      <div className="form margin-b-30">
        <ClaimsFilter />
      </div>
      <ClaimsTable />
    </>
  );
}
