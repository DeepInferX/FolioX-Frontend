import React from "react";
import useStyles from "assets/style/components/Select";
import classNames from "classnames";
export default function Select({ background, children, value, changeHandler }) {
  const classes = useStyles();
  const selectClasses = classNames({
    [classes.root]: true,
    [classes[background]]: background,
  });
  return (
    <div>
      <select
        className={selectClasses}
        onChange={changeHandler}
        value={value}
      >
        {children}
      </select>
    </div>
  );
}
