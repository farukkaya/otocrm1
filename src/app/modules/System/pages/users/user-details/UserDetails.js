import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../../../../_metronic/layout";
import AccountInformation from "../../../../UserProfile/AccountInformation";
import { ProfileOverview } from "../../../../UserProfile//ProfileOverview";
import ChangePassword from "../../../../UserProfile//ChangePassword";
import PersonaInformation from "../../../../UserProfile//PersonaInformation";
import EmailSettings from "../../../../UserProfile//EmailSettings";
import { ProfileCard } from "../../../../UserProfile/components/ProfileCard";
import { AdvanceTablesWidget7, ListsWidget10, ListsWidget14 } from '../../../../../../_metronic/_partials/widgets';

export function UserDetails() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");

  return (
    <div className="d-flex flex-row">
      <ProfileCard></ProfileCard>
      <div className="flex-row-fluid ml-lg-8">
      <div className="row">
      <div className="col-lg-6">
        <ListsWidget14 className="card-stretch gutter-b"></ListsWidget14>
      </div>
      <div className="col-lg-6">
        <ListsWidget10 className="card-stretch gutter-b"></ListsWidget10>
      </div>
      <div className="col-lg-12">
        <AdvanceTablesWidget7 className="card-stretch gutter-b"></AdvanceTablesWidget7>
      </div>
    </div>
      
      </div>
     <div className="flex-row-fluid ml-lg-8">
        <Switch>
          <Redirect
            from="/user-profile"
            exact={true}
            to="/user-profile/profile-overview"
          />
          <Route
            path="/user-profile/profile-overview"
            component={ProfileOverview}
          />
          <Route
            path="/user-profile/account-information"
            component={AccountInformation}
          />
          <Route
            path="/user-profile/change-password"
            component={ChangePassword}
          />
          <Route
            path="/user-profile/email-settings"
            component={EmailSettings}
          />
          <Route
            path="/user-profile/personal-information"
            component={PersonaInformation}
          />
        </Switch>
      </div>
    </div>
  );
}
