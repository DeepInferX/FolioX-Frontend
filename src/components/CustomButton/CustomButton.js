import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
// import Navbar from "components/Navbar/Navbar";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "auto",
    minWidth: "auto",
    borderRadius: "6px",
    padding: "5px 25px",
    margin: "15px 25px 15px 0px",
    textTransform: "none",
  },
  navLink: {
    textDecoration: "none",
  },
  backgroundBrownLight: {
    backgroundColor: "red",
  },
  backgroundBrownDark: {
    backgroundColor: "orange",
  },
  backgroundBlueLight: {
    backgroundColor: "rgba(57, 74, 171, 0.8)",
  },

  yellow: {
    backgroundColor: "#FFDF9B",
  },
  white: {
    backgroundColor: theme.palette.common.white,
  },
  brown: {
    backgroundColor: "#DB9696",
  },
  purple: {
    backgroundColor: "#9049EB",
    color: "#fff"
  },

  borderGray: {
    border: "2px solid #f4f4f4",
  },
  borderBlue: {
    border: "1px solid #394AAB",
    padding: "10px 25px",
    marginRight: "0px",
  },
}));

const useColor = makeStyles((theme) => ({
  white: {
    color: theme.palette.common.white,
  },
}));

export default function CustomButton({
  text,
  logo,
  to,
  background,
  border,
  color,
  ...rest
}) {
  const classes = useStyle();
  const colors = useColor();
  const buttonClasses = classNames({
    [classes[border]]: border,
    [classes[background]]: true,
    [classes.root]: true,
    [colors[color]]: color,
  });
  if (to) {
    return (
      <NavLink to={to} className={classes.navLink}>
        <Button
          {...rest}
          className={buttonClasses}
          style={{ fontFamily: "Quicksand, sans-serif !important" }}
        >
          {logo}
          {text}
        </Button>
      </NavLink>
    );
  }
  return (
    <Button
      {...rest}
      className={buttonClasses}
      style={{ fontFamily: "Quicksand, sans-serif !important" }}
    >
      {logo}
      {text}
    </Button>
  );
}
