import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  payment: {
    backgroundColor: "white",
  },
  paymentContainer: {
    "& h1": {
      textAlign: "center",
      padding: "10px",
      fontWeight: 400,
      backgroundColor: "rgba(234, 237, 237,)",
      borderBottom: "1px solid lightgray",
    },
    "& h1 a": {
      textDecoration: "none",
    },
  },
  paymentSection: {
    display: "flex",
    padding: "20px",
    margin: "0 20px",
    borderBottom: "1px solid lightgray",
  },
  paymentTitle: {
    flex: 0.2,
  },
  paymentAddress: {
    flex: 0.8,
  },
  paymentItems: {
    flex: 0.8,
  },
});

export default useStyles;
