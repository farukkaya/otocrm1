import React from "react";
import { ImagesTable } from "./ImagesTable";
import { ImagesLoadingDialog } from "./ImagesLoadingDialog";
import { ImagesDeleteDialog } from "./ImagesDeleteDialog";
import { ImageDeleteDialog } from "./ImageDeleteDialog";
import { ImageAddDialog } from "./ImageAddDialog";


export const Images = () => <>
  <ImagesLoadingDialog />
  <ImageDeleteDialog />
  <ImageAddDialog />
  <ImagesDeleteDialog />
  <ImagesTable />
</>
