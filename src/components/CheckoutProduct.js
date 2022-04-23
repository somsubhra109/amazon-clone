import React from "react";
import useStyles from "../Styles/CheckoutProductCss";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img src={image} className={classes.checkoutProductImage} />
      <div className={classes.checkoutProductInfo}>
        <p className={classes.title}>{title}</p>
        <p className={classes.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button className={classes.removeButton} onClick={removeFromBasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
