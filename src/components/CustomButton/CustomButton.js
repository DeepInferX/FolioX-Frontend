import { Button } from "@material-ui/core";
import React from "react";
import useStyle from "assets/style/components/CustomButton/CustomeButton";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
// import Navbar from "components/Navbar/Navbar";
export default function CustomButton({
  text,
  logo,
  to,
  background,
  border,
  ...rest
}) {
  const classes = useStyle();
  const buttonClasses = classNames({
    [classes[border]]: border,
    [classes[background]]: true,
    [classes.root]: true,
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
