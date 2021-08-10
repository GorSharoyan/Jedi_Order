import React from 'react'

/* UI */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GroupIcon from '@material-ui/icons/GroupIcon';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
   
//     }));

//   export default function Navbar() {
//       const classes=useStyles();

//       return(
//           <h1>Barlus</h1>

//       )


//   } 


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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <GroupIcon /> Select the side
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Join the Dark Side</MenuItem>
        <MenuItem onClick={handleClose}>The Light Side you Join</MenuItem>
      </Menu>
    </div>
  );
}