import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";

const ShoppingCart = () => {
  return (
    <div style={styles.container}>
      <div style={styles.pageDetail}>
        HOME/ <span>SHOPPING CART</span>
      </div>
      <section style={styles.purchaseDetails}></section>
      <section style={styles.total}>
        <div>Cart Totals</div>
        <PrimaryButton name="PROCEED TO CHECKOUT" />
      </section>
    </div>
  );
};

export default ShoppingCart;

const styles = {
  pageDetail: {},

  container: {
    display: "flex",
    flexDirection: "column",
    margin: "40px 165px 110px 165px",
  },

  purchaseDetails: {},

  total: {},
};
