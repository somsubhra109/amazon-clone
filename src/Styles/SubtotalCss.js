import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  subtotal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "300px",
    height: "100px",
    padding: "20px",
    backgroundColor: "#f3f3f3",
    border: "1px solid #dddddd",
    borderRadius: "3px",
  },
  subtotalGift: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "5px",
  },
  proceedButton: {
    background: "#f0c14b",
    borderRadius: "2px",
    width: "100%",
    height: "30px",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #846a29",
    color: "#111",
  },
});

export default useStyles;
