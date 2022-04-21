import React from "react";
import useStyles from "../Styles/ProductCss";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket", basket);
  const addToBasket = () => {
    //dispatch the item to the data layer
    dispatch({
      type: "ADD",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button className={classes.addButton} onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
