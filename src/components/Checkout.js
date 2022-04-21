import React from "react";
import useStyles from "../Styles/CheckoutCss";
import Subtotal from "./Subtotal";

function Checkout() {
  const classes = useStyles();
  return (
    <div className={classes.checkout}>
      <div classsName={classes.checkoutLeft}>
        <img
          className={classes.checkoutAdd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className={classes.checkoutTitle}>Your Shopping Basket</h2>
        </div>
      </div>
      <div classsName={classes.checkoutRight}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
