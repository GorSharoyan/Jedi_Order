import React from "react";
//UI
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function ImageUpload() {
  return (
    <Button
      variant="contained"
      color="default"
      // className={classes.button}
      startIcon={<CloudUploadIcon />}
    >
      Upload
    </Button>
  );
}
