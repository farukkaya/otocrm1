/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/users/usersActions";

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { UserEditForm } from "./UserEditForm";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

const initUser = {
      id: undefined,
      email: "",
      identityNo: "",
      firstName: "",
      lastname: "",
      username: "",
      professionId:0,
      workPhone: "",

      isActive: false, 
      createdDate: null,
      createdBy:null,
      updatedDate: null,
      updatedBy: null,
      deletedDate: null,
      deletedBy:null
    
};

export function UserEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, userForEdit} = useSelector(
    (state) => ({
      actionsLoading: state.users.actionsLoading,
      userForEdit: state.users.userForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchUser(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "Yeni Kullanıcı";
    if (userForEdit && id) {
      _title = `Kullanıcı Düzenle - '${userForEdit.firstName} ${userForEdit.lastname}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userForEdit, id]);

  const saveUser = (values) => {
    if (!id) {
      dispatch(actions.createUser(values)).then(() => backToUsersList());
    } else {
      dispatch(actions.updateUser(values)).then(() => backToUsersList());
    }
  };

  const btnRef = useRef();  
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
          <button className="btn btn-light ml-2">
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
        <ul className="nav nav-tabs nav-tabs-line " role="tablist">
          <li className="nav-item" onClick={() => setTab("basic")}>
            <a
              className={`nav-link ${tab === "basic" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "basic").toString()}
            >
             Kullanıcı
            </a>
          </li>
          {id && (
            <>
              {" "}
              <li className="nav-item" onClick={() => setTab("claims")}>
                <a
                  className={`nav-link ${tab === "claims" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "claims").toString()}
                >
                  Yetkileri
                </a>
              </li>
            </>
          )}
        </ul>
        <div className="mt-5">
          {tab === "basic" && (
            <UserEditForm
              actionsLoading={actionsLoading}
              user={userForEdit || initUser}
              btnRef={btnRef}
              saveUser={saveUser}
            />
          )}
          {tab === "claims" && id && (
            <h1>.....</h1>
          )}
          
        </div>
      </CardBody>
    </Card>
  );
}
