import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { GalleriesPage } from "./galleries/GalleriesPage";
import { UsersPage } from "./users/UsersPage";
import { DealersPage } from "./dealers/DealersPage";
import { StocksPage } from "./stocks/StocksPage";
import { GalleryEdit } from "./galleries/gallery-edit/GalleryEdit";
import { UserEdit } from "./users/user-edit/UserEdit";
import { DealerEdit } from "./dealers/dealer-edit/DealerEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { StockEdit } from "./stocks/stock-edit/StockEdit";
import {UserDetails} from "./users/user-details/UserDetails";
import {DealerDetails} from "./dealers/dealer-details/DealerDetails";

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
        <ContentRoute exact path="/system/users/:id/detail" component={UserDetails}/>
        <ContentRoute path="/system/users" component={UsersPage} />

        <ContentRoute exact path="/system/dealers/new" component={DealerEdit} />
        <ContentRoute exact path="/system/dealers/:id/edit" component={DealerEdit}/>
        <ContentRoute exact path="/system/dealers/:id/detail" component={DealerDetails}/>
        <ContentRoute path="/system/dealers" component={DealersPage} />



        <ContentRoute exact path="/system/galleries/new" component={GalleryEdit}/>
        <ContentRoute exact path="/system/galleries/:id/edit" component={GalleryEdit} />
        <ContentRoute path="/system/galleries" component={GalleriesPage} />



        <ContentRoute exact path="/system/stocks/new" component={StockEdit}/>
        <ContentRoute exact path="/system/stocks/:id/edit" component={StockEdit} />
        <ContentRoute path="/system/stocks" component={StocksPage} />
      </Switch>
    </Suspense>
  );
}
