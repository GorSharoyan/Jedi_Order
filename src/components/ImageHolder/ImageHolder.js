import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ImageHolder.css";

//UI
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
import { getAssetUrl } from "../../services/firebaseServices/manipulatedStorage.service";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 345,
  },
  media: {
    border: "25px soild green",
    padding: "25px",
    height: 400,
    width: 650,
  },
  // button: {
  //   hover: "translateY(-100px)",
  // },
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
      <Card>
        <CardActionArea>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button className="button">
              <Link to="/darkSide">
                <CardMedia
                  className={classes.media}
                  image={darkSideLink}
                  title="Siths"
                ></CardMedia>
              </Link>
            </Button>
            <Button className="button">
              <Link to="/lightSide">
                <CardMedia
                  className={classes.media}
                  image={lightSideLink}
                  title="Jedis"
                ></CardMedia>
              </Link>
            </Button>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
