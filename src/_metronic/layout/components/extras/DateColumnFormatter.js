import React from "react";
import moment from 'moment';
import 'moment/locale/tr';
export function DateColumnFormatter(cellContent, row) {
    moment().locale('tr')
    return(<span> {moment(row.createdDate).format('L')} </span>)
}
