import React from "react";
import { DocumentsFilter } from "./DocumentsFilter";
import { DocumentsTable } from "./DocumentsTable";
import { DocumentsLoadingDialog } from "./DocumentsLoadingDialog";
import { DocumentsDeleteDialog } from "./DocumentsDeleteDialog";
import { DocumentDeleteDialog } from "./DocumentDeleteDialog";
import { DocumentUpdateStatusDialog } from "./DocumentUpdateStatusDialog";
import { DocumentsFetchDialog } from "./DocumentsFetchDialog";
import { DocumentEditDialog } from "./document-edit-dialog/DocumentEditDialog";

export function Documents() {

  return (
    <>
      <DocumentsLoadingDialog />
      <DocumentEditDialog />
      <DocumentDeleteDialog />
      <DocumentUpdateStatusDialog />
      <DocumentsDeleteDialog />
      <DocumentsFetchDialog />
      <div className="form margin-b-30">
        <DocumentsFilter />
       
      </div>
      <DocumentsTable />
    </>
  );
}
