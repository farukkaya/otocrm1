import React from "react";
import Currency from 'react-currency-formatter';

export const PriceColumnFormatter = (cellContent, row) => <>{formatMyMoney(row.price)}</>;
function formatMyMoney(price) {
  
    var currency_symbol = "₺"
  
    var formattedOutput = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
      });
  
    return formattedOutput.format(price).replace(currency_symbol, '')
  }