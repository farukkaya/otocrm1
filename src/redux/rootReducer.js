import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/ECommerce/_redux/customers/customersSlice";
import {productsSlice} from "../app/modules/ECommerce/_redux/products/productsSlice";
import {remarksSlice} from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
import {specificationsSlice} from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";
import {galleriesSlice} from "../app/modules/System/_redux/galleries/galleriesSlice";
import {taxOfficesSlice} from "../app/modules/System/_redux/taxOffices/taxOfficesSlice";
import { usersSlice } from "../app/modules/System/_redux/users/usersSlice";
import { professionsSlice } from "../app/modules/System/_redux/professions/professionsSlice";
import { dealersSlice } from "../app/modules/System/_redux/dealers/dealersSlice";
import { citiesSlice } from "../app/modules/System/_redux/_cities/citiesSlice";
import { townsSlice } from "../app/modules/System/_redux/_towns/townsSlice";
import { neighborhoodsSlice } from "../app/modules/System/_redux/_neighborhoods/neighborhoodsSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  products: productsSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,

  /////////////////////////////////
  professions: professionsSlice.reducer,
  cities: citiesSlice.reducer,
  towns: townsSlice.reducer,
  neighborhoods: neighborhoodsSlice.reducer,

  dealers: dealersSlice.reducer,
  galleries: galleriesSlice.reducer,
  taxOffices: taxOfficesSlice.reducer,
  users: usersSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
