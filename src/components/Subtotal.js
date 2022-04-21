import React from "react";
import useStyles from "../Styles/SubtotalCss";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const classes = useStyles();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className={classes.subtotalGift}>
              <input type="checkbox" className={classes.checkbox} /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={classes.proceedButton}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
