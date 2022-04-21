import React from "react";
import useStyles from "../Styles/ProductCss";

function Product({ title, image, price, rating }) {
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <p>{title}</p>
        <p className={classes.productPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className={classes.productImage} />
      <button className={classes.addButton}>Add to basket</button>
    </div>
  );
}

export default Product;
