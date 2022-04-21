import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "60px",
    alignItems: "center",
    backgroundColor: "#131921",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  amazonLogo: {
    width: "100px",
    objectFit: "contain",
    margin: "0 20px",
    marginTop: "18px",
  },
  searchBar: {
    display: "flex",
    flex: 1,
    borderRadius: "24px",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
    height: "12px",
    border: "none",
    padding: "15.7px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  searchIcon: {
    padding: "5px",
    height: "22px !important",
    backgroundColor: "#cd9042",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  navOption: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    marginRight: "10px",
    color: "white",
  },
  lineOne: {
    fontSize: "10px",
  },
  lineTwo: {
    fontSize: "13px",
    fontWeight: 800,
  },
  basket: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  basketCount: {
    marginLeft: "10px",
    marginRight: "10px",
  },
});

export default useStyles;
