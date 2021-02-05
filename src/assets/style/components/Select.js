const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    border: "none",
    outline: "none",
    fontWeight: "600",
    resize: "none",
    width: "100%",
    "&::-webkit-input-placeholder": {
      fontWeight: "400",
      color: "black",
      opacity: "1",
    },
    "&:focus": {},
  },

  brown: {
    backgroundColor: "rgba(219, 150, 150, 0.4)",
    "&:focus": {
      backgroundColor: "rgba(240, 233, 225, 0.45)",
      transition: "background-color 300ms ease-out",
    },
    transition: "background-color 300ms ease-in",
  },
}));

export default useStyles;
