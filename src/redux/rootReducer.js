import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {productsSlice} from "../app/modules/ECommerce/_redux/products/productsSlice";
import {remarksSlice} from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
import {specificationsSlice} from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";


import {mainSlice} from "../app/modules/System/_redux/_main/mainSlice";
import {taxOfficesSlice} from "../app/modules/System/_redux/taxOffices/taxOfficesSlice";
import { usersSlice } from "../app/modules/System/_redux/users/usersSlice";
import { professionsSlice } from "../app/modules/System/_redux/professions/professionsSlice";
import { dealersSlice } from "../app/modules/System/_redux/dealers/dealersSlice";
import { addressesSlice } from "../app/modules/System/_redux/addresses/addressesSlice";
import { stocksSlice } from "../app/modules/System/_redux/stocks/stocksSlice";
import { stockExpertisesSlice } from "../app/modules/System/_redux/stockExpertises/stockExpertisesSlice";
import { damagesSlice } from "../app/modules/System/_redux/damages/damagesSlice";
import { documentsSlice } from "../app/modules/System/_redux/documents/documentsSlice";
import { claimsSlice } from "../app/modules/System/_redux/claims/claimsSlice";


import {customersSlice} from "../app/modules/Sales/_redux/customers/customersSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  products: productsSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,

  /////////////////////////////////
  main: mainSlice.reducer,
  documents:documentsSlice.reducer,
  claims: claimsSlice.reducer,
  professions: professionsSlice.reducer,
  addresses: addressesSlice.reducer,

  dealers: dealersSlice.reducer,
  stocks: stocksSlice.reducer,
  damages: damagesSlice.reducer,
  stockExpertises: stockExpertisesSlice.reducer,
  taxOffices: taxOfficesSlice.reducer,
  users: usersSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
