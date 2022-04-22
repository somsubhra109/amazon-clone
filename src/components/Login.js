import React, { useState } from "react";
import useStyles from "../Styles/LoginCss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config";

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
          console.log(auth);
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
          console.log(auth);
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.loginLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className={classes.loginContainer}>
        <h1 className={classes.title}>Sign-in</h1>
        <form>
          <h5 className={classes.emailAndPassword}>Email</h5>
          <input
            type="email"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className={classes.emailAndPassword}>Password</h5>
          <input
            type="password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className={classes.loginButton}
          >
            Sign In
          </button>
        </form>
        <p className={classes.policy}>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className={classes.createButton}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
