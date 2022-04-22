import React from "react";
import useStyles from "../Styles/HeaderCss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={classes.container}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className={classes.amazonLogo}
        />
      </Link>

      <div className={classes.searchBar}>
        <input type="search" className={classes.searchInput} />
        <SearchIcon className={classes.searchIcon} />
      </div>
      <div className={classes.navBar}>
        <div className={classes.navOption}>
          <span className={classes.lineOne}>Hello Guest</span>
          <span className={classes.lineTwo}>Sign In</span>
        </div>
        <div className={classes.navOption}>
          <span className={classes.lineOne}>Returns</span>
          <span className={classes.lineTwo}>& Orders</span>
        </div>
        <div className={classes.navOption}>
          <span className={classes.lineOne}>Your</span>
          <span className={classes.lineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.basket}>
            <ShoppingBasketIcon className={classes.basketIcon} />
            <span className={classes.basketCount}>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
