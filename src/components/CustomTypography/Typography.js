import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "assets/style/components/CustomTypography/CustomTypography";
import classNames from "classnames";
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
