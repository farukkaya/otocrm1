import {createSlice} from "@reduxjs/toolkit";

const initialMainState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  cities:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: [],
    cityForEdit: undefined,
    lastError: null
  },
  towns:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: [],
    townForEdit: undefined,
    lastError: null
  },
  neighborhoods:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: [],
    townForEdit: undefined,
    lastError: null
  },
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const mainSlice = createSlice({
  name: "main",
  initialState: initialMainState,
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
   
    // findMain
    citiesFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.cities.listLoading = false;
      state.cities.error = null;
      state.cities.entities = entities;
      state.cities.totalCount = totalCount;
    },

    townsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.towns.listLoading = false;
      state.towns.error = null;
      state.towns.entities = entities;
      state.towns.totalCount = totalCount;
    },

    neighborhoodsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.neighborhoods.listLoading = false;
      state.neighborhoods.error = null;
      state.neighborhoods.entities = entities;
      state.neighborhoods.totalCount = totalCount;
    },
  }
});
