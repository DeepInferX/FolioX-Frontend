import React from "react";
import useStyles from "assets/style/components/Select";
import classNames from "classnames";
import { useState } from "react";
export default function Select({
  background,
  children,
  selectedCollege,
  setSelectedCollege,
}) {
  const classes = useStyles();
  console.log(selectedCollege);
  const selectClasses = classNames({
    [classes.root]: true,
    [classes[background]]: background,
  });
  return (
    <div>
      <select
        className={selectClasses}
        onChange={(e) => setSelectedCollege(e.target.value)}
        value={selectedCollege}
      >
        {children}
      </select>
    </div>
  );
}
