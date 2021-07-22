import React from "react";

export function ArrayColumnFormatter(cellContent, row,rowIndex,formatExtraData ) {
    const  {array,selector}=formatExtraData;
  return (
    <>
      <span className={`font-bold font-info`}>
        {row[selector]==0 ? "-" :array.find(q=> q.id==row[selector]).name}
      </span>
    </>
  );
}
