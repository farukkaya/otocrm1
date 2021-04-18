import {createSlice} from "@reduxjs/toolkit";

const initialDealersState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: [],
  usersOfDealer:[],
  galleriesOfDealer:{
    listLoading: false,
    actionsLoading: false,
    totalCount: 0,
    entities: null,
    galleryForEdit: undefined,
    lastError: null
  },
  dealerForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const dealersSlice = createSlice({
  name: "dealers",
  initialState: initialDealersState,
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

    catchErrorForGalleryy: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.galleriesOfDealer.listLoading = false;
      } else {
        state.galleriesOfDealer.actionsLoading = false;
      }
    },
    startCallForGallery: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.galleriesOfDealer.listLoading = true;
      } else {
        state.galleriesOfDealer.actionsLoading = true;
      }
    },

    // getDealerById
    dealerFetched: (state, action) => {
      state.actionsLoading = false;
      state.dealerForEdit = action.payload.dealerForEdit;
      state.error = null;
    },
    // findDealers
    dealersFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
     // findDealers
     usersFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.usersOfDealer = entities;
      state.totalCount = totalCount;
    },

    // findGalleriesByParent
    galleriesFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.galleriesOfDealer.listLoading = false;
      state.galleriesOfDealer.error = null;
      state.galleriesOfDealer.entities = entities;
      state.galleriesOfDealer.totalCount = totalCount;
    },
    // createDealer
    dealerCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.dealer);
    },
    // updateDealer
    dealerUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.dealer.id) {
          return action.payload.dealer;
        }
        return entity;
      });
    },
    // deleteDealer
    dealerDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteDealers
    dealersDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // dealersUpdateState
    dealersStatusUpdated: (state, action) => {
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





     // getGalleryById
    galleryFetched: (state, action) => {
      debugger

      state.galleriesOfDealer.actionsLoading = false;
      state.galleriesOfDealer.dealerForEdit = action.payload.dealerForEdit;
      state.galleriesOfDealer.error = null;
    },

    // galleriesUpdateState
    galleriesStatusUpdated: (state, action) => {
      state.galleriesOfDealer.actionsLoading = false;
      state.galleriesOfDealer.error = null;
      const { ids, status } = action.payload;
      state.galleriesOfDealer.entities = state.galleriesOfDealer.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    },
  }
});
