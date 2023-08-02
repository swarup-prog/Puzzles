import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import NavigationButton from "../components/buttons/NavigationButton";
import Dropdown from "../components/Dropdown";

import clothesData from "../data/clothesData";

const ProductDetails = () => {
  const { productId } = useParams();

  const cloth = clothesData.find((item) => item.id === productId);

  return (
    <div style={styles.productDetailContainer}>
      <section style={styles.productDetail}>
        <img src={cloth.image} alt="cloth" width="550px" height="685px" />
        <div style={styles.details}>
          <div style={styles.prodName}>{cloth.name}</div>
          <div style={styles.price}>$ {c}</div>
          <div style={styles.clothDesc}>{cloth.descriloth.priception}</div>
          <Dropdown
            name="clothSize"
            options={cloth.size}
            defaultValue="Select Size"
          />
          <NavigationButton to="" name="ADD TO CART" />
        </div>
      </section>
      <section style={styles.productDescReview}></section>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default ProductDetails;

const styles = {
  productDetailContainer: {
    display: "flex",
    flexDirection: "column",
  },

  productDetail: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "40px 165px 110px 165px",
    gap: 100,
  },

  details: {
    display: "flex",
    flexDirection: "column",
    gap: 36,
  },

  prodName: {
    fontSize: "36px",
    lineHeight: "48px",
    fontFamily: "Arimo",
    fontWeight: 700,
  },

  price: {
    fontSize: "24px",
    lineHeight: "28.8px",
    color: "#024E82",
  },

  clothDesc: {
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#555555",
    width: "550px",
  },

  productDescReview: {},
};
