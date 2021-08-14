import React from "react";
import { Link } from "react-router-dom";
/* UI */
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AssignmentIndIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/lightSide">Join the Dark Side</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/darkSide">The Light Side you Join</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
