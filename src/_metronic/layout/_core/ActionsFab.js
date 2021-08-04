import React from "react";
import clsx from 'clsx';
import { Icon, IconButton, Menu, MenuItem,Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export const ActionsFab = (props) => {
  const { formatExtraData, row } = props;
  const { 
    openUpdateStatusDialog
    ,openEditPage
    ,openDetailPage
    ,openDeleteDialog
    ,openUpdatePrimaryDialog
    ,openUpdateExpertisDialog
    ,key="id" } = formatExtraData;
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

        {openDetailPage&&(
          <MenuItem onClick={() => {  
              openDetailPage(row[key])
              handleClose()
            }}>Detay Göster</MenuItem>
        )}
        {openEditPage&&(
          <MenuItem onClick={() => {
              openEditPage(row[key])
              handleClose()
            }}>Güncelle</MenuItem>
        )}
        
        {openDeleteDialog&&(
          <MenuItem onClick={() => {
            openDeleteDialog(row[key])
            handleClose()
          }}
          > Sil</MenuItem>
        )}
      
        {openUpdateStatusDialog && (
          <MenuItem onClick={() => {
            openUpdateStatusDialog(row[key])
            handleClose()
          }}>{ row.isActive ? "Pasifleştir" : "Aktifleştir" }</MenuItem>
        )}
  <Divider light />
{openUpdatePrimaryDialog && (

          <MenuItem onClick={() => {
            openUpdatePrimaryDialog(row[key])
            handleClose()
          }}>Birincil Seç</MenuItem>
        )}
  <Divider light />
  {openUpdateExpertisDialog&&(
          <MenuItem onClick={() => {  
            openUpdateExpertisDialog(row[key])
              handleClose()
            }}>Expertiz Bilgilerini Güncelle</MenuItem>
        )}
      </Menu>
    </>
  )
}
