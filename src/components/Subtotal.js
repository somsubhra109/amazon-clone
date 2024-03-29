import React from "react";
import useStyles from "../Styles/SubtotalCss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../DataLayer/reducer";
import { Link, useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={classes.subtotalGift}>
              <input type="checkbox" className={classes.checkbox} /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className={classes.proceedButton}
        onClick={(e) => navigate("/payment")}
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Subtotal;
