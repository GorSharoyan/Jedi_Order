import React from "react";

//UI
import { Grid, TextField } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolIcon from "@material-ui/icons/School";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
  formField: {
    display: "flex",
    flexDirection: "row",
    textAlign: "baseline",
    padding: "3px",
    justifyContent: "",
    // width: "10px",
  },
  textField: {
    padding: "10px",
  },
  formik: {
    border: "3px solid green",
  },
});

// export default function CreateForceUser() {
//   const classes = useStyles();

//   return (
//     <Grid
//       container
//       direction="column"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <div className={classes.formField}>
//         <AssignmentIndIcon fontSize="large" />
//         <TextField
//           className={classes.textField}
//           label="name"
//           id="outlined-basic"
//           type="text"
//           variant="outlined"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.name}
//           name="name"
//         />
//         {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//       </div>
//       <div className={classes.formField}>
//         <SchoolIcon fontSize="large" />
//         <TextField
//           className={classes.textField}
//           label="rank"
//           id="outlined-basic"
//           type="text"
//           variant="outlined"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.rank}
//           name="rank"
//         />
//         {props.errors.rank && <div id="feedback">{props.errors.rank}</div>}
//       </div>
//       <div className={classes.formField}>
//         <ChildCareIcon fontSize="large" />
//         <TextField
//           className={classes.textField}
//           label="age"
//           id="outlined-basic"
//           type="text"
//           variant="outlined"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.age}
//           name="age"
//         />
//         {props.errors.age && <div id="feedback">{props.errors.age}</div>}
//       </div>
//       <div className={classes.formField}>
//         <FingerprintIcon fontSize="large" />
//         <TextField
//           className={classes.textField}
//           label="race"
//           id="outlined-basic"
//           type="text"
//           variant="outlined"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.race}
//           name="race"
//         />
//         {props.errors.race && <div id="feedback">{props.errors.race}</div>}
//       </div>
//       <div className={classes.formField}>
//         <SportsHandballIcon fontSize="large" />
//         <TextField
//           className={classes.textField}
//           label="combat style"
//           id="outlined-basic"
//           type="text"
//           variant="outlined"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.combat_style}
//           name="combat_style"
//         />
//         {props.errors.combat_style && (
//           <div id="feedback">{props.errors.combat_style}</div>
//         )}
//       </div>
//       <div className={classes.formField}>
//         <VisibilityIcon fontSize="large" />
//         <TextField
//           className={classes.textField}
//           label="The Great Power in you,I sense"
//           id="outlined-basic"
//           type="text"
//           variant="outlined"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.bio}
//           name="bio"
//           rows={14}
//         />
//         {props.errors.bio && <div id="feedback">{props.errors.bio}</div>}
//       </div>
//     </Grid>
//   );
// }
