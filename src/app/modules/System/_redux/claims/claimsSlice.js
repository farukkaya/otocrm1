import {createSlice} from "@reduxjs/toolkit";

const initialClaimsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: [],
  allClaims:[],
  ownClaims:[],
  claimForEdit: undefined,
  userClaimForEdit:undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const claimsSlice = createSlice({
  name: "claims",
  initialState: initialClaimsState,
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
    // getClaimById
    claimFetched: (state, action) => {
      state.actionsLoading = false;
      state.claimForEdit = action.payload.claimForEdit;
      state.error = null;
      
    },
    // findClaims
    claimsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    allClaimsFetched: (state, action) => {
      
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.allClaims = entities;
    },
    ownClaimsFetched: (state, action) => {
      
      const { entities} = action.payload;
      state.listLoading = false;
      state.ownClaims = entities;
      state.error = null;
    },
    // createClaim
    claimCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      action.payload.claim&&state.entities.push(action.payload.claim);
    },
    // updateClaim
    claimUpdated: (state, action) => {
      
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.claim.id) {
          return action.payload.claim;
        }
        return entity;
      });
    },
    // deleteClaim
    claimDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteClaims
    claimsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // claimsUpdateState
    claimsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.isActive = status;
        }
        return entity;
      });
    },


    //////////////////
    userClaimsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.ownClaims = state.ownClaims.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.isActive = status;
        }
        return entity;
      });
    },


    userClaimFetched: (state, action) => {
      state.actionsLoading = false;
      state.userClaimForEdit = action.payload.userClaimForEdit;
      state.error = null;
      
    },
  }
});
