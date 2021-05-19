import React from "react";
import {
 CapacityTitles
} from "../../DealersUIHelpers";

export function CapacityColumnFormatter(cellContent, row) {
  return (
    <>
      <span className={`font-bold font-info`}>
        {row.capacityId==0 ? "-" :CapacityTitles.find(q=> q.id==row.capacityId).name}
      </span>
    </>
  );
}