import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


// Handles list of pages on sidebar. Edit if you want to add more pages

export default function ListItems() {
  const [open, setOpen] = useState(false);

  const handleClickLearn = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const mainListItems = (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
  
      <ListItemButton onClick={handleClickLearn}>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Learn More" />
      </ListItemButton>
      
  
    </React.Fragment>
  );

  return(
    <div>
      <Dialog open={open}>
        <DialogTitle>Learn More!</DialogTitle>
        <DialogContent>
          <h1>Learn more here</h1>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
        </DialogActions>
      </Dialog>
      {mainListItems}
    </div>
    )
}
