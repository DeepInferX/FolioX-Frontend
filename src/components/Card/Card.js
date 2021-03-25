import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    width: "240px",
    maxHeight: "240px",
    borderRadius: "25px",
    color: "#000",
    fontWeight: "300",
    [theme.breakpoints.down('sm')]:{
      width: '200px',
      marginBottom: 30
    }
  },
  text: {
    fontFamily: "Quicksand, sans-serif !important",
  },
  box: {
    margin: "10px 35px",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "150px",
    [theme.breakpoints.down('sm')]:{
      height: '100px',
      widht: '100px'
    }
  },
}));

export default function ImgMediaCard({ text, to, Img, ...rest }) {
  const classes = useStyles();

  return (
    <NavLink to={to} style={{ textDecoration: "none",  }}>
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
