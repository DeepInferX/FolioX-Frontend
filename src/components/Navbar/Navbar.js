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
      padding: [theme.spacing(1)],
      paddingTop: [theme.spacing(3)],
    },
  },
  navLink: {
    textDecoration: "none",
    color: '#000',
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]:{
      marginRight: theme.spacing(2),
      fontSize: '0.8rem'
    },
    '&:last-child':{
      [theme.breakpoints.down('sm')]:{
        marginRight: 0,
      }
    }
    
  },
  navLinkButton: {
    backgroundColor: "#F0E9E1",
    borderRadius: theme.spacing(5),
    padding: `0px ${theme.spacing(4)}px`,
    paddingTop: "5px",
    paddingBottom: "5px",
    textTransform: "uppercase",
  },
  logo:{
    width: 40,
    [theme.breakpoints.down('sm')]:{
      width: 30,
    }
  }
}));

export default function Navbar({ logo, appbar }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div>
        <img src={logo} className={classes.logo} alt="dix logo" />
      </div>
      {appbar && (
        <div>
          <NavLink className={classes.navLink} to="/">
            Docs
          </NavLink>
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