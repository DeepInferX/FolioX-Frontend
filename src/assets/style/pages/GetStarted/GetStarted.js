const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0E9E1",
    padding: "0px 7vh",
    height: "100vh",
  },
  text: {
    fontFamily: "Quicksand, sans-serif !important",
    fontWeight: "500",
  },
}));

export default useStyles;
