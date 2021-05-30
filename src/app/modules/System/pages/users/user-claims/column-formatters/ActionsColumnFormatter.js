import React from "react";
import { ActionsFab } from "./ActionsFab";

export const ActionsColumnFormatter = (cellContent,row, rowIndex, formatExtraData) => 
<ActionsFab formatExtraData={formatExtraData} row={row} />
