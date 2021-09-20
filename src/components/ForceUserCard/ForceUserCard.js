import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Grid } from "@material-ui/core";

//services
import { getJediById } from "../../services/firebaseServices/jedi.service";
import { getSithById } from "../../services/firebaseServices/sith.service";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1500px",
    border: "3px solid green",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ForceUserCard() {
  const pathname = useLocation().pathname;
  const forceUserId = pathname.substring(pathname.lastIndexOf("/") + 1);
  const forceUserSide = forceUserId.substring(
    forceUserId.lastIndexOf("@") + 1,
    forceUserId.length - 1
  );
  const classes = useStyles();
  const [forceUser, setForceUser] = useState({});

  useEffect(() => {
    switch (forceUserSide) {
      case "jedi":
        getJediById(forceUserId).then((result) => {
          setForceUser(result);
        });
        break;
      case "sith":
        getSithById(forceUserId).then((result) => {
          setForceUser(result);
        });
        break;
    }
  }, []);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
          }
          title={forceUser.name}
          subheader={forceUser.rank}
        />
        <CardMedia
          className={classes.media}
          image={forceUser.profileImage}
          title="Paella dish"
        />
        <CardContent>
          <IconButton aria-label="add to favorites">
            <ThumbUpIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary" component="p">
            {forceUser.bio}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
