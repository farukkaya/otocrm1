import React, {useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {LoadingDialog} from "../../../../../../_metronic/_partials/controls";

export function GalleriesLoadingDialog() {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.dealers.galleriesOfDealer.listLoading }),
    shallowEqual
  );
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Galeriler Yükleniyor ..." />;
}
