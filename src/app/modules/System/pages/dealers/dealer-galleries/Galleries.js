import React, { useMemo } from "react";
import { GalleriesFilter } from "./GalleriesFilter";
import { GalleriesTable } from "./GalleriesTable";
import { GalleriesLoadingDialog } from "./GalleriesLoadingDialog";
import { GalleriesDeleteDialog } from "./GalleriesDeleteDialog";
import { GalleryDeleteDialog } from "./GalleryDeleteDialog";
import { GalleryUpdateStatusDialog } from "./GalleryUpdateStatusDialog";
import { GalleriesFetchDialog } from "./GalleriesFetchDialog";
import { GalleriesGrouping } from "./GalleriesGrouping";
import { GalleryEditDialog } from "./gallery-edit-dialog/GalleryEditDialog";
import { useGalleriesUIContext } from "./GalleriesUIContext";

export function Galleries() {
  // Galleries UI Context
  const galleriesUIContext = useGalleriesUIContext();
  const galleriesUIProps = useMemo(() => {
    return { ids: galleriesUIContext.ids };
  }, [galleriesUIContext]);

  return (
    <>
      <GalleriesLoadingDialog />
      <GalleryEditDialog />
      <GalleryDeleteDialog />
      <GalleryUpdateStatusDialog />
      <GalleriesDeleteDialog />
      <GalleriesFetchDialog />
      <div className="form margin-b-30">
        <GalleriesFilter />
        {galleriesUIProps.ids.length > 0 && <GalleriesGrouping />}
      </div>
      <GalleriesTable />
    </>
  );
}
