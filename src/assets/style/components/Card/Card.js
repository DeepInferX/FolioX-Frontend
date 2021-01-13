const { makeStyles } = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    width: "240px",
    maxHeight: "240px",
    borderRadius: "25px",
    color: "#000",
    fontWeight: "300",
  },
  text: {
    fontFamily: "Quicksand, sans-serif !important",
  },
  box: {
    margin: "10px 35px",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "150px",
  },
}));

export default useStyle;
