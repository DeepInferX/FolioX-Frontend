import { Button } from "@material-ui/core";
import React from "react";
import useStyle from "assets/style/components/CustomButton/CustomeButton";
import classNames from "classnames";
export default function CustomButton({ text, logo, yellow, border, ...rest }) {
  const classes = useStyle();
  const buttonClasses = classNames({
    [classes[border]]: border,
    [classes.yellow]: yellow,
    [classes.root]: true,
  });
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
