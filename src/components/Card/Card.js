import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import useStyles from "assets/style/components/Card/Card";
import { Box } from "@material-ui/core";
import classNames from "classnames";
export default function ImgMediaCard({ text, to, Img, ...rest }) {
  const classes = useStyles();

  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <Box boxShadow={10} className={classNames(classes.root, classes.box)}>
        <div className={classes.root}>
          <CardActionArea>
            <CardMedia
              alt="Contemplative Reptile"
              title="Contemplative Reptile"
              className={classes.imgContainer}
            >
              <img className={classes.img} src={Img} alt="login" />
            </CardMedia>
            <CardContent>
              <Typography
                className={classes.text}
                variant="subtitle1"
                align="center"
                component="p"
              >
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
      </Box>
    </NavLink>
  );
}
