import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { CustomerEdit } from "./customers/customer-edit/CustomerEdit";

export default function SystemPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/sales"
            to="/sales/customers"
          />
        }



        <ContentRoute exact path="/sales/customers/new" component={CustomerEdit}/>
        <ContentRoute exact path="/sales/customers/:id/edit" component={CustomerEdit} />
        <ContentRoute path="/sales/customers" component={CustomersPage} />

       
      </Switch>
    </Suspense>
  );
}
