import React from "react";
import { useState } from "react";

//UI
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

//services
import { uploadJediImage } from "../../services/firebaseServices/jedi.service";
import uploadSithImage from "../../services/firebaseServices/sith.service";
import { getJediUserImageUrl } from "../../services/firebaseServices/jedi.service";

let useStyles = makeStyles({
  root: {
    border: "5px solid green",
  },
});

export default function ImageUpload() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageInput = async ({ target: { files } }) => {
    let img = files[0];
    await setImage(img);
  };

  const handleImageUpload = async () => {
    await uploadJediImage(image);
    await setImageUrl(
      getJediUserImageUrl(image).then((element) => {
        return element;
      })
    );
    console.log(imageUrl);
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="default"
        startIcon={<CloudUploadIcon />}
        onClick={handleImageUpload}
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
