import React, {useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {LoadingDialog} from "../../../../../../_metronic/_partials/controls";

export function AddressesLoadingDialog() {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.addresses.listLoading }),
    shallowEqual
  );
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Adresler Yükleniyor ..." />;
}
