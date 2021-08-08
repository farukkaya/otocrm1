import React, {useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {LoadingDialog} from "../../../../../../_metronic/_partials/controls";

export function ImagesLoadingDialog() {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.documents.listLoading }),
    shallowEqual
  );
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Resimler Yükleniyor ..." />;
}
