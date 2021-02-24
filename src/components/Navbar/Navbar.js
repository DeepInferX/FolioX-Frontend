import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import useStyle from "assets/style/components/Navbar/Navbar";
export default function Navbar({ logo, appbar }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div>
        <img src={logo} width="40" alt="dix logo" />
      </div>
      {appbar && (
        <div>
          <NavLink className={classes.navLink} to="/">
            Contact
          </NavLink>
          <a
            className={classNames(classes.navLink, classes.navLinkButton)}
            href="http://deepinferx.in/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Dix
          </a>
        </div>
      )}
    </div>
  );
}
