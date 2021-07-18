import React, {  Fragment} from "react";
import { shallowEqual, useSelector } from "react-redux";

import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import Webcam from "@uppy/webcam";
//import Url from "@uppy/url";
import Turkish from "@uppy/locales/lib/tr_TR"
import { Dashboard } from "@uppy/react";
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


export function DashboardUpload({ images, setImages, transactionId }) {
  const { token } = useSelector(
    (state) => ({
      token: state.auth.authToken.token
    }),
    shallowEqual
  );
  const formData = new FormData();
  const _uppy = new Uppy({
    id: "uppy1",
    locale: Turkish,
    autoProceed: true,
    restrictions: {
      allowedFileTypes: ['image/*', '.jpg', '.jpeg', '.png', '.gif']
    },
    allowMultipleUploads: true
  })
    .use(XHRUpload, {
      endpoint: `${process.env.REACT_APP_API_DEVELOPMENT_URL}Documents/UploadFile?subDirectory=ForStocks`,
      method: 'POST',
      formData:true, 
      headers: {
        'authorization': `Bearer ${token}`
      },
      fieldName:transactionId
    })
    // .use(Url)
    // .use(Url, {
    //     target: Dashboard,
    //     companionUrl: 'https://companion.uppy.io/',
    //     locale: {}
    //   })
    .use(Webcam)
    .use(Webcam, {
      countdown: true,
      modes: ["picture"],
      id: "webcam"
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
      // var img = new Image()
      // img.width = 300
      // img.alt = file.id
      // img.src = response.body.dbPath
      // document.body.appendChild(img)
    })
    .on("file-removed", (file, c, d) => {
      console.log("---", file, c, d);
    })
    .on("file-added", (file) => {
      formData.append("transactionId", transactionId);
      images.push(file.data);
      setImages(images)
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
      <Dashboard
        width={"100%"}
        uppy={_uppy}
        plugins={["Webcam", "Url"]}
        proudlyDisplayPoweredByUppy={false}
        showProgressDetails={true}
        hideUploadButton={false}
      />

    </Fragment>
  );
}
