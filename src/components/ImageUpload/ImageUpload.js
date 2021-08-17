import React from "react";
import { useState } from "react";

//UI
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

//services
import uploadJediImage from "../../services/FirebaseServices/jedi.service";
import uploadSithImage from "../../services/FirebaseServices/sith.service";

let useStyles = makeStyles({
  root: {
    border: "5px solid green",
  },
});

export default function ImageUpload() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageInput = ({ target: { files } }) => {
    let img = files[0];
    setImage(img);
  };
  const handleImageUpload = () => {};

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="default"
        // className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={handleImageInput}
      />
    </div>
  );
}
