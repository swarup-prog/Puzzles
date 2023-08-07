import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Footer from "../components/Footer";
import NavigationButton from "../components/buttons/NavigationButton";
import Dropdown from "../components/Dropdown";

import clothesData from "../data/clothesData";

const Rating = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const haandleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {[...Array(5)].map((index) => (
        <FaStar
          key={index}
          size={17}
          color={isHovered ? "#D6763C" : "#D6763C61"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={haandleMouseLeave}
        />
      ))}
    </div>
  );
};

const ProductDetails = () => {
  const { productId } = useParams();

  const cloth = clothesData.find((item) => item.id === productId);

  return (
    <div style={styles.productDetailContainer}>
      <section style={styles.productDetail}>
        <img src={cloth.image} alt="cloth" width="550px" height="685px" />
        <div style={styles.details}>
          <div style={styles.prodName}>{cloth.name}</div>
          <Rating />
          <div style={styles.price}>$ {cloth.price}</div>
          <div style={styles.clothDesc}>{cloth.description}</div>
          <Dropdown
            name="clothSize"
            options={cloth.size}
            defaultValue="Select Size"
          />
          <NavigationButton to="" name="ADD TO CART" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
            }}
          >
            <span style={{ color: "#1D1D1D" }}>
              Category:{" "}
              <span style={{ color: "#555555" }}>{cloth.category}</span>
            </span>
            <span style={{ color: "#1D1D1D" }}>
              Tags: <span style={{ color: "#555555" }}>{cloth.tags}</span>
            </span>
          </div>
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
