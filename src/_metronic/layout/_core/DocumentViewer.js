
import React from 'react';
import FileViewer from 'react-file-viewer';
 
export function DocumentViewer({documentPath}) {

 
  return   <FileViewer
  fileType="jpeg"
  filePath={process.env.REACT_APP_API_URL+"Attachments/Images/ForStocks/20210708015754-1704c330-1bd7-4850-be54-cae847b2940a.jpeg"}/>;
}