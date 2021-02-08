import React from "react";
import useStyles from "assets/style/components/CustomInput/CustomInput";
import classNames from "classnames";
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
