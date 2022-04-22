import React from "react";
import useStyles from "../Styles/CheckoutCss";
import CheckoutProdcut from "./CheckoutProdcut";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.length === 0 && (
            <p className={classes.emptyText}>Basket is empty.</p>
          )}
          {basket.map((item) => (
            <CheckoutProdcut
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div classsName={classes.checkoutRight}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
