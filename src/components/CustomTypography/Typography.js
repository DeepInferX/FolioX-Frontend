import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Quicksand, sans-serif !important",
  },
  800: {
    fontWeight: "800",
  },
}));

export default function CustomTypography({ fontWeight, children, ...rest }) {
  const classes = useStyles();
  const typographyClasses = classNames({
    [classes.root]: true,
    [classes[fontWeight]]: fontWeight,
  });
  return (
    <Typography {...rest} className={typographyClasses}>
      {children}
    </Typography>
  );
}
