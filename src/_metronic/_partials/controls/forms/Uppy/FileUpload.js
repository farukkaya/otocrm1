import React, {  Fragment} from "react";

import Uppy from "@uppy/core";
import Turkish from "@uppy/locales/lib/tr_TR"
import { FileInput } from "@uppy/react";
import '@uppy/core/dist/style.css'
import '@uppy/file-input/dist/style.css'

export function FileUpload({ allowMultipleUploads,name }) {
  const _uppy = new Uppy({
    id: "uppy1",
    locale: Turkish,
    autoProceed: false,
    restrictions: {
      allowedFileTypes: ['image/*', '.jpg', '.jpeg', '.png', '.pdf','.docx']
    },
    allowMultipleUploads: allowMultipleUploads
  })
   
    .on('upload', (data) => {
      
      // data object consists of `id` with upload ID and `fileIDs` array
      // with file IDs in current upload
      const { id, fileIDs } = data;
      console.log(`Starting upload ${id} for files ${fileIDs}`)
    })
    .on('upload-progress', (file, progress) => {
      
      // file: { id, name, type, ... }
      // progress: { uploader, bytesUploaded, bytesTotal }
      console.log(file.id, progress.bytesUploaded, progress.bytesTotal)
    })
    .on('upload-success', (file, response) => {
      console.log(file.name, response.body.dbPath)
    })
    .on("file-removed", (file, c, d) => {
      console.log("---", file, c, d);
    })
    .on("file-added", (file) => {
      console.log("file added");
    })
    .on("upload-success", () => {
      console.log("ddd");
    })
    .on("complete", function () {
      //this.uppy.reset();
    });



  React.useEffect(() => {
    return () => _uppy.close()
  }, [])
  return (
    <Fragment>
      
        <FileInput
        uppy={_uppy}
        pretty={true}
        inputName={name}
        />
    </Fragment>
  );
}
