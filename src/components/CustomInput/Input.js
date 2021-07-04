import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
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
  basic: {
    backgroundColor: "#F6F7FB",
    border: "1px solid rgba(27, 69, 134, 0.23)",
  },
}));

export default function CustomInput({
  variant,
  placeholder,
  rows,
  cols,
  multiline,
  disabled,
  ...rest
}) {
  const classes = useStyles();
  const textFieldClasses = classNames({
    [classes.root]: true,
    [classes[variant]]: variant,
  });
  const [field, meta] = useField(rest);

  let Element = "Input";
  if (multiline) Element = "Textarea";

  return (
    <Element
      placeholder={placeholder}
      className={textFieldClasses}
      style={{ width: "100%" }}
      rows={rows}
      cols={cols}
      disabled={disabled}
      {...field}
    />
  );
}
