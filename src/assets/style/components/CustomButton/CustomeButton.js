import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "auto",
    minWidth: "auto",
    borderRadius: "6px",
    padding: "5px 25px",
    margin: "15px 25px",
    textTransform: "none",
    // fontFamily: "Quicksand, sans-serif !important",
  },
  backgroundBrownLight: {
    backgroundColor: "red",
  },
  backgroundBrownDark: {
    backgroundColor: "orange",
  },
  yellow: {
    backgroundColor: "#FFDF9B",
  },

  borderGray: {
    border: "2px solid #f4f4f4",
  },
}));

export default useStyle;
