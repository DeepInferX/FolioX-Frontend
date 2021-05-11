import React from "react";
import { makeStyles, Typography, Breadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 0px",
  },
  link: {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "15px",
    color: "rgba(0, 0, 0, 0.7)",
  },
  title: {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "117.6%",
    color: "rgba(0, 0, 0, 0.7)",
  },
  separator: {
    margin: "0px",
  },
}));

export default function BreadCrumb({
  link1 = "link1",
  link2 = "link2",
  title,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Breadcrumbs
        classes={{
          separator: classes.separator,
        }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="#" className={classes.link}>
          {link1}
        </Link>
        <Typography className={classes.link}>{link2}</Typography>
      </Breadcrumbs>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
