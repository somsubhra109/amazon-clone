import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  checkoutProduct: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
  },
  checkoutProductInfo: {
    paddingLeft: "20px",
  },
  removeButton: {
    background: "#f0c14b",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #846a29",
    color: "#111",
  },
  checkoutProductImage: {
    objectFit: "contain",
    width: "180px",
    height: "180px",
  },
  rating: {
    display: "flex",
  },
  title: {
    fontSize: "17px",
    fontWeight: 800,
  },
});

export default useStyles;
