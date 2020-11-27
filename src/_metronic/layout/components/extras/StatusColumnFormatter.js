import React from "react";
export const StatusColumnFormatter = (cellContent, row) => (
  <span className={`label label-lg font-weight-bold label-light-${row.isActive?"info":"pending"} label-inline`}>
    {row.isActive?"Aktif":"Pasif"}
    </span>
);


