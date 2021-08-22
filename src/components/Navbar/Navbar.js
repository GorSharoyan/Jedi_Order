import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//services
import { getAssetUrl } from "../../services/firebaseServices/manipulatedStorage.service";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logo, setLogo] = useState("");
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  getAssetUrl("General", "Star_Wars_Logo.png").then((element) => {
    setLogo(element);
  });

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={logo} width="120px" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/lightSide">The Light Side you Join</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/darkSide">Join the Dark Side</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
