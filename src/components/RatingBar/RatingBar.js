import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";

//UI
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";

//services
import { getAssetUrl } from "../../services/firebaseServices/manipulatedStorage.service";

let useStyles = makeStyles({
  image: {
    height: "500px",
  },
  rateBox: {
    padding: "30px",
    textAlign: "center",
  },
});

export default function BasicRating({ legacy }) {
  const classes = useStyles();
  const [assetImageLink, setAssetImageLink] = useState("");
  const [value, setValue] = React.useState(2);
  console.log(legacy);
  console.log(assetImageLink);

  legacy === "jedi"
    ? getAssetUrl("LightSide", "Yoda.png").then((element) => {
        setAssetImageLink(element);
      })
    : getAssetUrl("DarkSide", "Maul.png").then((element) => {
        setAssetImageLink(element);
      });

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <Card>
          <img className={classes.image} src={assetImageLink} />
        </Card>
      </div>
      <div className={classes.rateBox}>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">
            {legacy === "jedi" ? (
              <h2>The Light Side You Joined</h2>
            ) : (
              <h2>You Joined The Dark Side </h2>
            )}
          </Typography>
          <Rating
            className={classes.rateBox}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
    </Grid>
  );
}
