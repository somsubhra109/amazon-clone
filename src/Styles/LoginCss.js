import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
  },
  loginLogo: {
    marginTop: "20px",
    marginBottom: "20px",
    objectFit: "contain",
    width: "100px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  loginContainer: {
    width: "300px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    padding: "20px",
    border: "1px solid lightgray",
  },
  title: {
    fontWeight: 500,
    marginBottom: "20px",
  },
  emailAndPassword: {
    marginBottom: "5px",
  },
  input: {
    height: "30px",
    marginBottom: "10px",
    backgroundColor: "white",
    width: "98%",
  },
  policy: {
    marginTop: "15px",
    fontSize: "12px",
  },
  loginButton: {
    background: "#f0c14b",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #846a29",
    width: "100%",
    height: "30px",
    borderRadius: "2px",
  },
  createButton: {
    border: "1px solid",
    marginTop: "10px",
    borderColor: "darkgrey",
    width: "100%",
    height: "30px",
    borderRadius: "2px",
  },
});

export default useStyles;
