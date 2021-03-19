import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    border: "none",
    outline: "none",
    fontWeight: "600",
    resize: "none",
    "&::-webkit-input-placeholder": {
      fontWeight: "400",
      color: "black",
      opacity: "1",
    },
    "&:focus": {},
  },

  brown: {
    backgroundColor: "rgba(219, 150, 150, 0.4)",
    "&:focus": {  
      backgroundColor: "rgba(240, 233, 225, 0.45)",
      transition: "background-color 300ms ease-out",
    },
    transition: "background-color 300ms ease-in",
  },
}));

export default function CustomInput({
  children,
  label,
  background,
  multiline,
  rows,
  cols,
  ...rest
}) {
  const classes = useStyles();

  const textFieldClasses = classNames({
    [classes.root]: true,
    [classes[background]]: background,
  });

  if (multiline) {
    return (
      <textarea
        className={textFieldClasses}
        style={{ width: "100%" }}
        placeholder={label}
        rows={rows}
        cols={cols}
        {...rest}
      >
        {children}
      </textarea>
    );
  }

  return (
    <input
      className={textFieldClasses}
      style={{ width: "100%" }}
      placeholder={label}
      {...rest}
    >
      {children}
    </input>
  );
}
