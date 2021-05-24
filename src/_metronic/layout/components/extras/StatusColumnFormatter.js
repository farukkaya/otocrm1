import React from "react";
export function StatusColumnFormatter (cellContent, row,rowIndex,formatExtraData ) {
  const {trueText,falseText,selector} = formatExtraData || {trueText:"Aktif",falseText:"Pasif",selector:"isActive"};
  return (
    <span className={`label label-lg font-weight-bold label-light-${row[selector]?"info":"pending"} label-inline`}>
      {row[selector]
      ?trueText
      :falseText
      }
      </span>
  );
} 


