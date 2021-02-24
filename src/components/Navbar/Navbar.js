import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

//style
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing(5)}px`,
    [theme.breakpoints.down("sm")]: {
      padding: [theme.spacing(2)],
      paddingTop: [theme.spacing(5)],
    },
  },
  navLink: {
    textDecoration: "none",
  },
  navLinkButton: {
    marginLeft: theme.spacing(5),
    backgroundColor: "#F0E9E1",
    borderRadius: theme.spacing(5),
    padding: `0px ${theme.spacing(4)}px`,
    paddingTop: "5px",
    paddingBottom: "5px",
    textTransform: "uppercase",
  },
}));

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
