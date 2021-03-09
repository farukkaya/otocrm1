import React, { useState, useEffect } from "react";
import UploadService from "../../../../app/services/FileUploadService";

export const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data.entities);
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <div>
      {currentFile && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-10">
          <label className="d-flex btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-success"
            disabled={!selectedFiles}
            onClick={upload}
          >
            Yükle
      </button>
        </div>
      </div>



      <div className="alert alert-light" role="alert">
        {message}
      </div>

      <div className="card">
        <div className="card-header">Yüklenen Dosyalar</div>
        <ul className="list-group list-group-flush">
          {fileInfos &&
            fileInfos.map((file, index) => {
              
              return(
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  );
};