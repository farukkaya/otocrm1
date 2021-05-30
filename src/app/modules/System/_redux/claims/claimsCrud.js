import axios from "axios";

export const CLAIMS_URL = "OperationClaims";

// READ
export function getAllClaims() {
  return axios.get(`${CLAIMS_URL}/GetAll`);
}
//API=>OK
export function getAllClaimsForTransfer(userId) {
  return axios.get(`${CLAIMS_URL}/GetAllForTransfer?userId=${userId}`);
}

//API=>OK
export function getClaimById(claimId) {
  return axios.get(`${CLAIMS_URL}/GetById?id=${claimId}`);
}
//API=>OK
export function createClaim(claim) {
  return axios.post(`${CLAIMS_URL}/Insert`, claim);
}
//API=>OK
export function updateClaim(claim) {
  return axios.put(`${CLAIMS_URL}/Update`,  claim);
}

// DELETE => delete the claim from the server
export function deleteClaim(claimId) {
  return axios.delete(`${CLAIMS_URL}/Delete?id=${claimId}`);
}


//API=>OK
export function findClaims(queryParams) {
  return axios.post(`${CLAIMS_URL}/Find`, queryParams);
}

// UPDATE Status
export function updateStatusForClaims(ids, status) {
  return axios.put(`${CLAIMS_URL}/UpdateStatus`, {
    ids,
    status
  });
}
// DELETE Claims by ids
export function deleteClaims(ids) {
  return axios.post(`${CLAIMS_URL}/SelectedDelete`, ids);
}




////////////////////////////////////////////////////////

// UPDATE Status
export function updateStatusForUserClaims(operationClaimIdList,userId,claimType, status) {
  return axios.put(`${CLAIMS_URL}/UserClaimsUpdateStatus`, {
    operationClaimIdList,
    userId,
    claimType,
    status
  });
}

export function getUserClaimById(claimId,userId,claimType) {
  return axios.get(`${CLAIMS_URL}/GetUserClaimById?claimId=${claimId}&userId=${userId}&claimType=${claimType}`);
}


export function deleteUserClaims(operationClaimIdList,userId,claimType) {
  return axios.post(`${CLAIMS_URL}/DeleteUserClaims`, {
    operationClaimIdList,
    userId,
    claimType
  });
}

export function createUserClaim(userClaimDto) {
  return axios.post(`${CLAIMS_URL}/UserClaimInsert`, userClaimDto);
}