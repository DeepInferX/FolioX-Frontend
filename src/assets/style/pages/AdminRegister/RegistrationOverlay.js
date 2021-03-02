const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    border: "1px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(45, 46, 50, 0.15)",
  },
  main: {
    width: "80%",
    border: "5px solid #DB9696",
    backgroundColor: "#fff",
    borderRadius: 3 * theme.shape.borderRadius,
    paddingBottom: "100px",
  },
  text: {
    padding: "100px",
  },
}));

export default useStyles;
