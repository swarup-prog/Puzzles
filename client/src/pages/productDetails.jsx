import { useParams } from "react-router-dom";

import Footer from "../components/Footer";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div style={styles.productDetailContainer}>
      <section style={styles.productDetail}>Procuct Id: {productId}</section>
      <section style={styles.productDescReview}></section>
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default ProductDetails;

const styles = {
  productDetailContainer: {},

  productDetail: {
    fontWeight: 700,
    fontSize: "40px",
    height: "70vh",
  },

  productDescReview: {},
};
