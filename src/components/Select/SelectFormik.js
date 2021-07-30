import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    outline: "none",
    fontWeight: "600",
    resize: "none",
    width: "100%",
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

export default function Select({ variant, ...props }) {
  const [field] = useField(props);
  const classes = useStyles();
  const selectClasses = classNames({
    [classes.root]: true,
    [classes[variant]]: variant,
  });
  return (
    <div>
      <select className={selectClasses} {...field} {...props} />
    </div>
  );
}
