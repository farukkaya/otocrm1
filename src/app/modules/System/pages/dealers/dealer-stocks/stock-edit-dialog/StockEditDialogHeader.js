/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";

export function StockEditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Stocks Redux state
  const { stockForEdit, actionsLoading } = useSelector(
    (state) => ({
      stockForEdit: state.stocks.stockForEdit,
      actionsLoading: state.stocks.actionsLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    let _title = id ? "" : "Yeni Stok";
    if (stockForEdit && id) {
      //TODO:Marka ve model ismini başlık olarak göster
      _title = "Stok Düzenle -"+stockForEdit.brandId+"-";
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [stockForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
