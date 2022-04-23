import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  product: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: "10px",
    padding: "20px",
    width: "100%",
    maxHeight: "400px",
    minWidth: "100px",
    backgroundColor: "white",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },

  productImage: {
    maxHeight: "200px",
    width: "100%",
    objectFit: "contain",
    marginBottom: "15px",
  },
  productInfo: {
    height: "100px",
    marginBottom: "15px",
  },
  productRating: {
    display: "flex",
  },
  productPrice: {
    marginTop: "5px",
  },
  addButton: {
    background: "#f0c14b",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #846a29",
    color: "#111",
  },
});

export default useStyles;
