import React from "react";
import Currency from 'react-currency-formatter';

export const PriceColumnFormatter = (cellContent, row, rowIndex, { key }) => {

   return (
    <Currency
    quantity={row[key]}
    currency="TRY"
/>
   )
}
