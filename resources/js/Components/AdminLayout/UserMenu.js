import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Inertia } from '@inertiajs/inertia'

const UserMenu = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    Inertia.post('/logout');
  };

  return (
    <React.Fragment>
      <button
        className="px-4 h-10 rounded-md flex items-center justify-center focus:outline-none hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
        onClick={handleClick}
      >
        Admin
      </button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserMenu;