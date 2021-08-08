import React, {useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {LoadingDialog} from "../../../../../../_metronic/_partials/controls";

export function DamagesLoadingDialog() {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.damages.listLoading }),
    shallowEqual
  );
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Hasar Kayıtları Yükleniyor ..." />;
}
