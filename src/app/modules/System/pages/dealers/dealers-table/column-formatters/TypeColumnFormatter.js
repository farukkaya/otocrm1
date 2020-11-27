import React from "react";
import {
  DealerTypeCssClasses,
  DealerTypeTitles
} from "../../DealersUIHelpers";
//label label-lg font-weight-bold label-light-primary label-inline
export const TypeColumnFormatter = (cellContent, row) => (
    <span className={`label label-lg font-weight-bold label-light-${DealerTypeCssClasses[row.dealerType]} label-inline`}>
        {DealerTypeTitles.find(q=>q.id===row.dealerType).name}
    </span>
);
