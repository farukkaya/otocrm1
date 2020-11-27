import React from "react";
import clsx from 'clsx';
import { Icon, IconButton, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export const ActionsFab = (props) => {
  const { formatExtraData, row } = props;
  const { openUpdateStatusDialog, openEditPage, openDeleteDialog } = formatExtraData;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null)

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0),
    },
    input: {
      display: 'none',
    },
    icon: {
      margin: theme.spacing(0),
    }
  }));
  const classes = useStyles();
  return (
    <>
      <IconButton
        aria-label="More"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon className={clsx(classes.icon, 'fa fa-ellipsis-h')} />
      </IconButton>
    
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
       
        <MenuItem onClick={() => {
          openEditPage(row.id)
          handleClose()
        }}>Güncelle</MenuItem>
        <MenuItem onClick={() => {
          openDeleteDialog(row.id)
          handleClose()
        }}
        > Sil</MenuItem>
          {openUpdateStatusDialog&&(
         <MenuItem onClick={() => {
          openUpdateStatusDialog(row.id)
          handleClose()
        }}>{
        row.isActive ?  "Pasif":"Aktif"
        }</MenuItem>
        )}
      </Menu>
    </>
  )
}
