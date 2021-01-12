import React from "react";
import Navbar from "./Navbar/Navbar";
import fx from "assets/logo/fx.png";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
export default function Home() {
  return (
    <Grid container>
      <Grid style={{ border: "1px solid red" }} item xs={6}>
        <Navbar logo={fx} appbar />
      </Grid>
      <Grid item xs={6}>
        <Navbar logo={fx} />
      </Grid>
    </Grid>
  );
}
