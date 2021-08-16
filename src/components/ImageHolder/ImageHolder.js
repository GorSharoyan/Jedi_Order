import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

//services
import { getAssetUrl } from "../../services/FirebaseServices/manipulatedStorage.service";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 345,
  },
  media: {
    height: 140,
    border: "3px solid green",
    width: "200px",
  },
});

export default function ImageHolder() {
  const classes = useStyles();
  const [lightSideLink, setLightSideLink] = useState("");
  const [darkSideLink, setDarkSideLink] = useState("");

  getAssetUrl("LightSide", "Jedis.jpg").then((element) => {
    setLightSideLink(element);
  });
  getAssetUrl("DarkSide", "Siths.jpg").then((element) => {
    setDarkSideLink(element);
  });

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card className={classes.root}>
        <CardActionArea>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              className={classes.media}
              image={lightSideLink}
              title="Contemplative Reptile"
            />
            <CardMedia
              className={classes.media}
              image={darkSideLink}
              title="Contemplative Reptile"
            />
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
