import {createSlice} from "@reduxjs/toolkit";

const initialStocksState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: [],
  stockForEdit: undefined,
  stockForDetail: {
    stock:undefined,
    stockDamages:undefined,
    stockExpertise: undefined,
    images: undefined,
    documents:undefined
  },
  stockInsuranceValue:undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState: initialStocksState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
     // getStockById
     stockInsuranceValueFetched: (state, action) => {
      state.actionsLoading = false;
      state.stockInsuranceValue = action.payload.stockInsuranceValue;
      state.error = null;
    },
    // getStockById
    stockFetched: (state, action) => {
      state.actionsLoading = false;
      state.stockForEdit = action.payload.stockForEdit;
      state.error = null;
    },
    // findStocks
    stocksFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // getStockDetail
    stockDetailFetched: (state, action) => {
      state.actionsLoading = false;
      state.stockForDetail = action.payload.stockForDetail;
      state.error = null;
    },
    // createStock
    stockCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.stock);
    },
    // updateStock
    stockUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.stock.id) {
          return action.payload.stock;
        }
        return entity;
      });
    },
    // deleteStock
    stockDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteStocks
    stocksDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // stocksUpdateState
    stocksStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    },



    
    stockExpertiseFetched: (state, action) => {
      state.actionsLoading = false;
      state.stockExpertise = action.payload.stockExpertise;
      state.error = null;
    },
  }
});
