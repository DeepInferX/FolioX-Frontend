const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0E9E1",
    padding: "0px 7vh",
    height: "100vh",
  },
  top: {
    height: "5vh",
    marginBottom: "10px",
    backgroundColor: "white",
    borderRadius: "0px 0px 20px 20px",
  },
  main: {
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "white",
    flexGrow: "1",
  },
  title: {
    position: "absolute",
    top: "150px",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
