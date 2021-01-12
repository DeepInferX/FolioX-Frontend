import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    // padding: "5px 40px",
    width: "100px",
    minHeight: "auto",
    minWidth: "auto",
    position: "relative",
    lineHeight: "1.4",
  },
  backgroundBrownLight: {
    backgroundColor: "red",
  },
  backgroundBrownDark: {
    backgroundColor: "orange",
  },
}));

export default useStyle;
