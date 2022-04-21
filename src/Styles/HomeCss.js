import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  home: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1500px",
  },
  homeRow: {
    display: "flex",
    zIndex: 1,
    marginLeft: "5px",
    marginRight: "5px",
  },
  homeImage: {
    width: "100%",
    zIndex: -1,
    marginBottom: "-150px",
    maskImage:
      " linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  },
});

export default useStyles;
