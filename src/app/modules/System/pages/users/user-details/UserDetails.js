import React, { useEffect, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/users/usersActions";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../../../../_metronic/layout";
import AccountInformation from "../../../../UserProfile/AccountInformation";
import { ProfileOverview } from "../../../../UserProfile//ProfileOverview";
import ChangePassword from "../../../../UserProfile//ChangePassword";
import PersonaInformation from "../../../../UserProfile//PersonaInformation";
import EmailSettings from "../../../../UserProfile//EmailSettings";
import { AdvanceTablesWidget7, ListsWidget10, ListsWidget14 } from '../../../../../../_metronic/_partials/widgets';
import { UserCard } from "./user-detail-cards/UserCard";
import { UserTaskCard } from "./user-detail-cards/UserTaskCard";
import { UserNotificationCard } from "./user-detail-cards/UserNotificationCard";
import { ClaimsCard } from "./user-children-cards/ClaimsCard";
import { AddressesCard } from "../../dealers/dealer-details/dealer-children-tables/AddressesCard";

export function UserDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Kullanıcı Kartı");
  const dispatch = useDispatch();
  const { actionsLoading, user } = useSelector(
    (state) => ({
      actionsLoading: state.users.actionsLoading,
      user: state.users.userForDetail,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(actions.fetchUserDetail(id));
  }, [id, dispatch]);
  return (

   <>
    {user &&user.guid&&(
       <div className="d-flex flex-row">
       <UserCard user={user} /> 
       <div className="flex-row-fluid ml-lg-6">
         <div className="row">
           <div className="col-lg-6">
             <UserTaskCard className="card-stretch gutter-b"></UserTaskCard>
           </div>
           <div className="col-lg-6">
             <UserNotificationCard className="card-stretch gutter-b"></UserNotificationCard>
           </div>
           <div className="col-lg-12 mb-8">
             <ClaimsCard parentId={id} className="card-stretch gutter-b"></ClaimsCard>
           </div>
           <div className="col-lg-12">
             <AddressesCard parentGuid={user.guid} className="card-stretch gutter-b"></AddressesCard>
           </div>
         </div>
 
       
      </div>
    </div>
 
    )}
     </>
  );
}
