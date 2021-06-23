import {createSlice} from "@reduxjs/toolkit";

const initialMainState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  vehicleCategories:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: [],
    townForEdit: undefined,
    lastError: null
  },vehicleBrands:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: [],
    townForEdit: undefined,
    lastError: null
  },
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
 
  
  vehicleModels:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: [],
    townForEdit: undefined,
    lastError: null
  },
  vehicleModelTypes:{
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

    //#region ABOUT ADDRESS
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
  //#endregion
  
    //#region ABOUT STOCK
   vehicleCategoriesFetched: (state, action) => {
  
    const { totalCount, entities } = action.payload;
    state.vehicleCategories.listLoading = false;
    state.vehicleCategories.error = null;
    state.vehicleCategories.entities = entities;
    state.vehicleCategories.totalCount = totalCount;
  },

  vehicleBrandsFetched: (state, action) => {  
     
    const { totalCount, entities } = action.payload;
    state.vehicleBrands.listLoading = false;
    state.vehicleBrands.error = null;
    state.vehicleBrands.entities = entities;
    state.vehicleBrands.totalCount = totalCount;
  },

  vehicleModelsFetched: (state, action) => {
    const { totalCount, entities } = action.payload;
    state.vehicleModels.listLoading = false;
    state.vehicleModels.error = null;
    state.vehicleModels.entities = entities;
    state.vehicleModels.totalCount = totalCount;
  },

  vehicleModelTypesFetched: (state, action) => {
    const { totalCount, entities } = action.payload;
    state.vehicleModelTypes.listLoading = false;
    state.vehicleModelTypes.error = null;
    state.vehicleModelTypes.entities = entities;
    state.vehicleModelTypes.totalCount = totalCount;
  },
//#endregion
  }
});
