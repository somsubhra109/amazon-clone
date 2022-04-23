import React from "react";
import useStyles from "../Styles/PaymentCss";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className={classes.payment}>
        <div className={classes.paymentContainer}>
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          <div className={classes.paymentSection}>
            <div className={classes.paymentTitle}>
              <h3>Delivery Address</h3>
            </div>
            <div className={classes.paymentAddress}>
              <p>{user?.email}</p>
              <p>Address line 1</p>
              <p>Address line 2</p>
            </div>
          </div>
          <div className={classes.paymentSection}>
            <div className={classes.paymentTitle}>
              <h3>Review items and delivery</h3>
            </div>
            <div className={classes.paymentItems}>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                />
              ))}
            </div>
          </div>
          <div className={classes.paymentSection}>
            <div className={classes.paymentTitle}>
              <h3>Payment Method</h3>
            </div>
            <div className={classes.paymentDetails}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
