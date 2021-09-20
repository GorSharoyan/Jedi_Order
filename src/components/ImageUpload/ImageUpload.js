import React from "react";
import { useState } from "react";
import styles from "./ImageUpload.css";

//UI
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Card } from "@material-ui/core";
// import { Grid } from "@material-ui/core";

//services
import { uploadJediImage } from "../../services/firebaseServices/jedi.service";
import { getJediUserImageUrl } from "../../services/firebaseServices/jedi.service";
import { updateJediProfileInfo } from "../../services/firebaseServices/jedi.service";
import { uploadSithImage } from "../../services/firebaseServices/sith.service";
import { getSithUserImageUrl } from "../../services/firebaseServices/sith.service";
import { updateSithProfileInfo } from "../../services/firebaseServices/sith.service";

let useStyles = makeStyles({
  root: {
    height: "250px",
    width: "250px",
  },
  cardContent: {
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100px",
    height: "100px",
  },
});

export default function ImageUpload({ legacy, forceUserId }) {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const handleImageInput = async ({ target: { files } }) => {
    let img = files[0];
    await setImage(img);
  };

  const handleImageUpload = async () => {
    try {
      switch (legacy) {
        case "jedi":
          await uploadJediImage(image);
          await setImageUrl(await getJediUserImageUrl(image));
          await updateJediProfileInfo(forceUserId, "profileImage", imageUrl);
          break;
        case "sith":
          await uploadJediImage(image);
          await setImageUrl(await getSithUserImageUrl(image));
          await updateSithProfileInfo(forceUserId, "profileImage", imageUrl);
          break;
      }
    } catch {
      setError(true);
      console.log(error);
    }
  };

  return (
    <Card className={classes.root}>
      <div className={classes.cardContent}>
        <label for="upload">
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            onClick={handleImageUpload}
          >
            Upload
          </Button>
        </label>
        <input
          accept="image/*"
          id="upload"
          type="file"
          onChange={handleImageInput}
        />
      </div>
    </Card>
  );
}
