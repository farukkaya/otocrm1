import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/claims/claimsActions";
import { ClaimEditDialogHeader } from "./ClaimEditDialogHeader";
import { ClaimEditForm } from "./ClaimEditForm";
import { useClaimsUIContext } from "../ClaimsUIContext";


export function ClaimEditDialog() {
  // Claim UI Context
  const claimsUIContext = useClaimsUIContext();

  const claimsUIProps = useMemo(() => {
    return {
      id: claimsUIContext.selectedId,
      setIds: claimsUIContext.setIds,
      userId: claimsUIContext.userId,
      queryParams: claimsUIContext.queryParams,
      ownClaims: claimsUIContext.ownClaims,
      claimType: claimsUIContext.claimType,
      setClaimType: claimsUIContext.setClaimType,
      showEditClaimDialog: claimsUIContext.showEditClaimDialog,
      closeEditClaimDialog: claimsUIContext.closeEditClaimDialog,
      initClaim: claimsUIContext.initClaim,
    };
  }, [claimsUIContext]);

  // Claim Redux state
  const dispatch = useDispatch();
  const { actionsLoading, claimForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.claims.actionsLoading,
      claimForEdit: state.claims.claimForEdit,
    }),
    shallowEqual
  );


  const saveClaim = () => {
    if(claimsUIProps.ownClaims.length==0){
      alert("Yetkilerde değişiklik yok")
    }else{
      const userClaimDto={
        userId:claimsUIProps.userId,
        operationClaimIdList:claimsUIProps.ownClaims.filter(q=>q.professionId==null).map(m=>m.id)
      }
      dispatch(actions.createUserClaim(userClaimDto)).then(() => { 
        claimsUIProps.setClaimType("2")
        claimsUIProps.queryParams.filter.claimType = claimsUIProps.claimType;
        claimsUIProps.queryParams.filter.userId = claimsUIProps.userId;
       
        //TODO: fetchUserClaims yazılacak, Base Yetkiler sayfası yapıldığında sorun olabilir
        dispatch(actions.fetchClaims(claimsUIProps.queryParams)).then(() => {
          claimsUIProps.setIds([]);
          claimsUIProps.closeEditClaimDialog();
        });
      });
    }
   
  };

  return (
    <Modal
      show={claimsUIProps.showEditClaimDialog}
      onHide={claimsUIProps.closeEditClaimDialog}
      size="xl"
      aria-labelledby="example-custom-modal-styling-title"
      dialogClassName="w-75"
    >
      <ClaimEditDialogHeader id={claimsUIProps.id} />

      <ClaimEditForm
        userId={claimsUIProps.userId}
        saveClaim={saveClaim}
        actionsLoading={actionsLoading}
        claim={claimForEdit || claimsUIProps.initClaim}
        onHide={claimsUIProps.closeEditClaimDialog}
      />
    </Modal>
  );
}
