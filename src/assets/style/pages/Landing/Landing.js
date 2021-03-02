const { makeStyles } = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
    paddingLeft: "7vh",
    paddingRight: "7vh",
    backgroundColor: "#F0E9E1",
    height: "100vh",
    flexGrow: 1,
  },
  landing: {
    backgroundColor: "white",
    height: "90vh",
    borderRadius: "15px 15px 0 0",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  landingLeft: {
    display: "flex",
    justifyContent: "Center",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "500",
  },
}));

export default useStyle;
