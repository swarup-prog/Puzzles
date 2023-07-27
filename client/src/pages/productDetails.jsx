import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import NavigationButton from "../components/buttons/NavigationButton";

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
          <div style={styles.price}>$ {cloth.price}</div>
          <div style={styles.clothDesc}>{cloth.description}</div>
          <NavigationButton to="" name="ADD TO CART" />
        </div>
      </section>
      <section style={styles.productDescReview}>dafadf</section>
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
    justifyContent: "space-between",
    margin: "40px 165px 110px 165px",
  },

  details: {},

  prodName: {},

  price: {},

  clothDesc: {},

  productDescReview: {},
};
