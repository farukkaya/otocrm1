import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/damages/damagesActions";
import { DamageEditDialogHeader } from "./DamageEditDialogHeader";
import { DamageEditForm } from "./DamageEditForm";
import { useDamagesUIContext } from "../DamagesUIContext";

export function DamageEditDialog() {
  const damagesUIContext = useDamagesUIContext();
  const damagesUIProps = useMemo(() => {
    return {
      id: damagesUIContext.selectedId,
      setIds: damagesUIContext.setIds,
      stockId: damagesUIContext.stockId,
      queryParams: damagesUIContext.queryParams,
      showEditDamageDialog: damagesUIContext.showEditDamageDialog,
      closeEditDamageDialog: damagesUIContext.closeEditDamageDialog,
      initDamage: damagesUIContext.initDamage,
    };
  }, [damagesUIContext]);

  // Damage Redux state
  const dispatch = useDispatch();
  const { actionsLoading, damageForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.damages.actionsLoading,
      damageForEdit: state.damages.damageForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting damage by seleted id
    dispatch(actions.fetchDamage(damagesUIProps.id));
  }, [damagesUIProps.id, dispatch]);

  const saveDamage = (damage) => {
    //damage.dueDate = getFormattedDate(damage.dueDate);
    if (!damagesUIProps.id) {
      // server request for creating damages
      dispatch(actions.createDamage(damage)).then(() => {
        // refresh list after deletion
        dispatch(
          actions.fetchDamage(
            damagesUIProps.queryParams,
            damagesUIProps.stockId
          )
        ).then(() => {
          // clear selections list
          damagesUIProps.setIds([]);
          // closing edit modal
          damagesUIProps.closeEditDamageDialog();
        });
      });
    } else {
      // server request for updating damages
      dispatch(actions.updateDamage(damage)).then(() => {
        // refresh list after deletion
        dispatch(
          // refresh list after deletion
          actions.fetchDamage(
            damagesUIProps.queryParams,
            damagesUIProps.stockId
          )
        ).then(() => {
          // clear selections list
          damagesUIProps.setIds([]);
          // closing edit modal
          damagesUIProps.closeEditDamageDialog();
        });
      });
    }
  };

  return (
    <Modal
      show={damagesUIProps.showEditDamageDialog}
      onHide={damagesUIProps.closeEditDamageDialog}
      aria-labelledby="example-modal-sizes-title-lg"
      size="lg"
    >
      <DamageEditDialogHeader id={damagesUIProps.id} />
      <DamageEditForm
        saveDamage={saveDamage}
        actionsLoading={actionsLoading}
        damage={damageForEdit || damagesUIProps.initDamage}
        onHide={damagesUIProps.closeEditDamageDialog}
      />
    </Modal>
  );
}
