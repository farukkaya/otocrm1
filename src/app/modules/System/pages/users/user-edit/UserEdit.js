/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { format } from 'react-string-format';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import * as actions from "../../../_redux/users/usersActions";

import { UserEditForm } from "./UserEditForm";
import { Addresses } from "../user-addresses/Addresses";
import { AddressesUIProvider } from "../user-addresses/AddressesUIContext";


const initUser = {

  id: undefined,
  email: "",
  identityNo: "",
  firstname: "",
  lastname: "",
  username: "",
  professionId: undefined,
  phone: "",
  isActive: true,

};


export function UserEdit({
  history,
  match: {
    params: { id },
  },
}) {

  // Users UI Context
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);

  const { actionsLoading, userForEdit,  professions,currentDealer } = useSelector(
    (state) => ({
      currentDealer: state.auth.user.dealer,
      actionsLoading: state.users.actionsLoading,
      userForEdit: state.users.userForEdit,
      professions: state.professions.entities,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchUser(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "Yeni Kullanıcı"
    if (userForEdit && id) {
      _title = format("Kullanıcı Güncelle -'{0}'", `${userForEdit.firstname} ${userForEdit.lastname}`);
    }
    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userForEdit, id]);

  const saveUser = (values) => {
    if (!id) {
      values.professionId=+values.professionId;
      
      values.dealerId=+currentDealer.id;
      dispatch(actions.createUser(values))
      backToUsersList()
    } else {
   
      dispatch(actions.updateUser(values))//.then(() => );
      backToUsersList()
    }
  };

  const handleReset = (values) => {
    if (values.id) {
      values = userForEdit
    } else {

    }
  };
  const btnRef = useRef();
  const btnReset = useRef();

  const handleResetClick = () => {
    if (btnReset && btnReset.current) {
      btnReset.current.click();
    }
  };

  const saveUserClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToUsersList = () => {
    history.push(`/system/users`);
  };


 
  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToUsersList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
          Geri
          </button>
          {`  `}
          <button
            className="btn btn-light ml-2"
            onClick={handleResetClick}
          >
            <i className="fa fa-redo"></i>
             Reset
           </button>
           {`  `}
              <button
                type="submit"
                data-wizard-type="action-submit"
                className="btn btn-primary ml-2"
                onClick={saveUserClick}
              >
                Kaydet
            </button>

        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {id === undefined ? (<>
          <UserEditForm
            actionsLoading={actionsLoading}
            user={initUser}
            btnRef={btnRef}
            history={history}
            btnReset={btnReset}
            saveUser={saveUser}
            handleReset={handleReset}
            professions={professions}
          /></>) : (<>
            <ul className="nav nav-tabs nav-tabs-line " role="tablist">
              <li className="nav-item" onClick={() => setTab("basic")}>
                <a className={`nav-link ${tab === "basic" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "basic")}
                >
               Kullanıcı
                  </a>
              </li>
              <li className={`nav-item ${userForEdit?.userTypeId == 1 && "offcanvas"}`} onClick={() => setTab("claims")}>
                  <a
                    className={`nav-link ${tab === "claims" && "active"}`}
                    data-toggle="tab"
                    role="button"
                    aria-selected={(tab === "claims")}
                  >
                    Yetkileri
                    </a>
                </li>
            
              <li className="nav-item" onClick={() => setTab("addresses")}>
                <a
                  className={`nav-link ${tab === "addresses" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "addresses")}
                >
                  Adresleri
                    </a>
              </li>
            </ul>
            <div className="mt-5">
              {tab === "basic" && (
                <UserEditForm
                  actionsLoading={actionsLoading}
                  user={userForEdit}
                  btnRef={btnRef}
                  history={history}
                  btnReset={btnReset}
                  saveUser={saveUser}
                  handleReset={handleReset}
                  professions={professions}
                />
              )}
              {tab === "claims" && id && (
                <h3>Yetkileri</h3>
              )}
                {tab === "addresses" && id && (
                <AddressesUIProvider guid={userForEdit.guid}>
                  <Addresses />
                </AddressesUIProvider>
              )}
            </div>
          </>)}

      </CardBody>
    </Card>
  );
}
