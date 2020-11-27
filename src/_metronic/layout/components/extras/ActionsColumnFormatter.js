import React from "react";
import { ActionsFab } from "../../_core/ActionsFab";

export const ActionsColumnFormatter = (cellContent,row, rowIndex, formatExtraData) => 
<ActionsFab formatExtraData={formatExtraData} row={row} />
