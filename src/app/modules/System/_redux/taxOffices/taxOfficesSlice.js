import {createSlice} from "@reduxjs/toolkit";

const initialTaxOfficesState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: [],
  entityForEdit: undefined,
  lastError: ""
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const taxOfficesSlice = createSlice({
  name: "taxOffices",
  initialState: initialTaxOfficesState,
  reducers: {
    catchError: (state, action) => {
      state.lastError = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.lastError = "";
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getTaxOfficeById
    taxOfficeFetched: (state, action) => {
      state.actionsLoading = false;
      state.entityForEdit = action.payload.entityForEdit;
      state.lastError = "";
    },
    // findTaxOffices
    taxOfficesFetched: (state, action) => {
      
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.lastError = "";
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createTaxOffice
    taxOfficeCreated: (state, action) => {
      state.actionsLoading = false;
      state.lastError = "";
      state.entities.push(action.payload.taxOffice);
    },
    // updateTaxOffice
    taxOfficeUpdated: (state, action) => {
      state.lastError = "";
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.taxOffice.id) {
          return action.payload.taxOffice;
        }
        return entity;
      });
    },
    // deleteTaxOffice
    taxOfficeDeleted: (state, action) => {
      state.lastError = "";
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteTaxOffices
    taxOfficesDeleted: (state, action) => {
      state.lastError = "";
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        (el) => !action.payload.ids.includes(el.id)
      );
    },
    // taxOfficesUpdateState
    taxOfficesStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.lastError = "";
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex((id) => id === entity.id) > -1) {
          entity.isActive = status;
        }
        return entity;
      });
    }
  }
});
