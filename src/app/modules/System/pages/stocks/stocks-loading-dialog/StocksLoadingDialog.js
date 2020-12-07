import React, {useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {LoadingDialog} from "../../../../../../_metronic/_partials/controls";

export const StocksLoadingDialog=()=> {
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.stocks.listLoading }),
    shallowEqual
  );
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Yükleniyor..." />;
}
