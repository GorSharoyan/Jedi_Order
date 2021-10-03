import React from "react";
import { useEffect, useRef, useState } from "react";

//UI
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";

export default function CircularIntegration({ imageUrl, onClick }) {
  //my hooks
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //imported hooks
  const timer = useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  console.log(imageUrl);
  useEffect(() => {
    if (imageUrl !== undefined) {
      setSuccess(true);
      setLoading(false);
    }
  });

  const handleButtonClick = () => {
    setLoading(true);
  };

  return (
    <>
      <Fab
        aria-label="save"
        color="primary"
        sx={buttonSx}
        onClick={(onClick, handleButtonClick)}
      >
        {success ? <CheckIcon /> : <SaveIcon />}
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Fab>
    </>
  );
}
