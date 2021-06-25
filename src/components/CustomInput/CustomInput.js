import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
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
  purple: {
    backgroundColor: " rgba(170, 132, 219, 0.4)",
    "&:focus": {
      backgroundColor: "rgba(240, 233, 225, 0.45)",
      transition: "background-color 300ms ease-out",
    },
    transition: "background-color 300ms ease-in",
  },
  blueDark: {
    backgroundColor: "rgba(57, 74, 171, 0.8)",
    color: "#fff !important",
    marginBottom: 0,
    "&::placeholder": {
      color: "#fff",
      opacity: 0.6,
    },
  },
}));

export default function CustomInput({
  label,
  rows,
  cols,
  multiline,
  background,
  children,
  field,
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
      {...field}
    >
      {children}
    </input>
  );
}
