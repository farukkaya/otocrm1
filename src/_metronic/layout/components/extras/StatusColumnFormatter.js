import React from "react";
export const StatusColumnFormatter = (cellContent, row) => (
  <span className={`label label-lg font-weight-bold label-light-${row.isActive=="1"?"info":"pending"} label-inline`}>
    {row.isActive=="1"?"Aktif":"Pasif"}
    </span>
);


