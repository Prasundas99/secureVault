import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: "3.8rem",
    fontStyle: "italic",
    fontWeight: "550",
    lineHeight: "6rem",
    letterSpacing: "-0.01em",
    color: "#0084b8",
    marginBottom: "2rem",
  },

  boardHeading: {
    marginLeft: theme.spacing(-18),
    fontSize: "2.4rem",
    color: "#007DAE",
    fontWeight: "500",
    marginBottom: theme.spacing(3),
  },

  collegeHeading: {
    marginLeft: theme.spacing(-55),
    fontSize: "2.4rem",
    color: "#007DAE",
    fontWeight: "500",
    marginBottom: theme.spacing(3),
  },

  gradeHeading: {
    marginLeft: theme.spacing(-36),
    fontSize: "2.4rem",
    color: "#007DAE",
    fontWeight: "500",
    marginBottom: theme.spacing(3),
  },

  otherCertificateHeading: {
    marginLeft: theme.spacing(-40),
    fontSize: "2.4rem",
    color: "#007DAE",
    fontWeight: "500",
    marginBottom: theme.spacing(3),
    marginTop: "4rem",
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    marginTop: "-3rem",
    height: "50rem",
  },
  avatar: {
    width: "4.8rem",
  },
  input: {
    "& label": {
      color: "#9D9CB5",
      fontWeight: "550",
      fontSize: "1.5rem",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "0.11rem solid #47ABD3",
        borderRadius: "0.6rem",
      },
    },
    "& ::placeholder": {
      paddingTop: "2rem",
      fontSize: "1.4rem",
    },
    paddingBottom: theme.spacing(4),
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  button: {
    background:
      "linear-gradient(90.77deg, #0181B4 0.67%, rgba(100, 200, 240, 0.82) 108.14%)",
    borderRadius: "4rem",
    width: "40%",
    height: "3.4rem",
    marginBottom: "4rem",
    borderRadius: "10rem",
    margin: "auto",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },

    fontWeight: "600",
    fontSize: "1.4rem",
    lineHeight: "2rem",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
  },

  icon: {
    width: "1.2rem",
  },

  register_login: {
    paddingTop: theme.spacing(2.8),
    marginLeft: "6rem",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
    },
  },
}));
