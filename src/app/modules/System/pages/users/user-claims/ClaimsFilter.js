import React, { useMemo,useState } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useClaimsUIContext } from "./ClaimsUIContext";
import { ClaimsGrouping } from "./ClaimsGrouping";
import {
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
const prepareFilter = (queryParams, values) => {
  
  const { searchText,claimType } = values;
  const newQueryParams = { ...queryParams };
  const filter = {
    name: "",
    claim: "",
    decsription: "",
    claimType:"2" // 1-Mesleki Yetkiler, 2-Bireysel Yetkiler
  };
  
  if (searchText) {
    filter.name= searchText;
    filter.claim= searchText;
    filter.decsription= searchText;
  }
  filter.claimType=claimType;
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function ClaimsFilter() {
  // Claims UI Context
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      setQueryParams: claimsUIContext.setQueryParams,
      openNewClaimDialog: claimsUIContext.openNewClaimDialog,
      queryParams: claimsUIContext.queryParams,
      claimType:claimsUIContext.claimType,
      setClaimType:claimsUIContext.setClaimType,
      ids: claimsUIContext.ids
    };
  }, [claimsUIContext]);
  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(claimsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, claimsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      claimsUIProps.setQueryParams(newQueryParams);
    }
  };
  
  return (
    <>
      <div className="form-filtration">
    
        <div className="row align-items-center">
        <Formik
              initialValues={{
                searchText: "",
                claimType:claimsUIProps.claimType
              }}
              onSubmit={(values) => {
                applyFilter(values);
              }}
            >
              {({
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                setFieldValue,
              }) => (
        <>
          <div className="col-md-2 margin-bottom-10-mobile">
     
     <form onSubmit={handleSubmit}>
       <div>
         <input
           type="text"
           className="form-control"
           name="searchText"
           placeholder="Ara"
           onBlur={handleBlur}
           value={values.searchText}
           onChange={(e) => {
             setFieldValue("searchText", e.target.value);
             handleSubmit();
           }}
         />
         <small className="form-text text-muted">
           Tüm alanlarda <b> ara..</b>
         </small>
       </div>
        </form>
  
</div>
<div className="col-md-3 margin-bottom-10-mobile">{claimsUIProps.ids.length > 0 && <ClaimsGrouping />}</div>
<div className="col-md-5 margin-bottom-10-mobile">
  {claimsUIProps.claimType!==""&&(
    <ToggleButtonGroup size="sm" type="radio" name="claimType" defaultValue={"2"}>
      <ToggleButton variant="outline-danger"  value={"2"}    type="radio" checked={claimsUIProps.claimType == "2"}  onChange={(e) => {
      setFieldValue("claimType",e.currentTarget.value)
    //  claimsUIProps.setClaimType(e.currentTarget.value)
      handleSubmit();
      }}>Bireysel Yetkiler</ToggleButton>
    <ToggleButton variant="outline-danger" value={"1"}   type="radio"  checked={ claimsUIProps.claimType == "1"} onChange={(e) => {
      setFieldValue("claimType",e.currentTarget.value)
     // claimsUIProps.setClaimType(e.currentTarget.value)
      handleSubmit();
      }}>Mesleki Yetkiler</ToggleButton>
    
  </ToggleButtonGroup>
  )}


</div>

        </>     )}
         </Formik>
          <div className="col-md-2 text-right margin-bottom-10-mobile">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => claimsUIProps.openNewClaimDialog()}
            >
            Yetkileri Düzenle
            </button>
          </div>
        </div>
   
      </div>
    </>
  );
}
