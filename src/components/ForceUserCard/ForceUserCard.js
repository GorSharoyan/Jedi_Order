import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ForceUserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Master Yoda
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>
              Force-sensitives, also known as Force-users, Force wielders, or
              Force Adepts, were sentient and non-sentient lifeforms that
              possessed a strong connection to the mystical energy field known
              as the Force. Though the term applied to anyone who was sensitive
              to the spiritual energy, those who harnessed powers given by the
              dark side of the Force were known as dark side adepts. The progeny
              of Force-sensitives could inherit their progenitor's power, as was
              the case in the Skywalker family. Anakin Skywalker, the Chosen
              One, passed his strength to his children, the twins Luke Skywalker
              and Leia Organa, who, in turn, passed it to her son Ben Solo.
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
