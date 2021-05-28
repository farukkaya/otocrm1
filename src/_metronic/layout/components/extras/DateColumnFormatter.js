import React from "react";
import moment from 'moment';
import 'moment/locale/tr';
export function DateColumnFormatter(cellContent, row) {
    return(<span> {moment(row.createdDate).locale('tr').format('L')} </span>)
}
