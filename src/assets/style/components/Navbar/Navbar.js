const { makeStyles } = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing(5)}px`,
  },
  navLink: {
    textDecoration: "none",
  },
  navLinkButton: {
    marginLeft: theme.spacing(5),
    backgroundColor: "#F0E9E1",
    borderRadius: theme.spacing(5),
    padding: `0px ${theme.spacing(2)}px`,
    paddingTop: "5px",
    paddingBottom: "5px",
  },
}));

export default useStyle;
