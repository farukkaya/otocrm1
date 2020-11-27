import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { GalleriesPage } from "./galleries/GalleriesPage";
import { UsersPage } from "./users/UsersPage";
import { DealersPage } from "./dealers/DealersPage";
import { GalleryEdit } from "./galleries/gallery-edit/GalleryEdit";
import { UserEdit } from "./users/user-edit/UserEdit";
import { DealerEdit } from "./dealers/dealer-edit/DealerEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function SystemPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/system"
            to="/system/users"
          />
        }

        <ContentRoute exact path="/system/users/new" component={UserEdit} />
        <ContentRoute exact path="/system/users/:id/edit" component={UserEdit}/>
        <ContentRoute path="/system/users" component={UsersPage} />

        <ContentRoute exact path="/system/dealers/new" component={DealerEdit} />
        <ContentRoute exact path="/system/dealers/:id/edit" component={DealerEdit}/>
        <ContentRoute path="/system/dealers" component={DealersPage} />



        <ContentRoute exact path="/system/galleries/new" component={GalleryEdit}/>
        <ContentRoute exact path="/system/galleries/:id/edit" component={GalleryEdit} />
        <ContentRoute path="/system/galleries" component={GalleriesPage} />
      </Switch>
    </Suspense>
  );
}
