import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Card from "../components/Card";
import RangeSlider from "../components/RangeSlider";
import RadioGroupButtons from "../components/RadioGroupButtons";
// import Footer from "../components/Footer";

import clothesData from "../data/clothesData";

const Shop = () => {
  const categoryLabels = ["All", "Male", "Female"];

  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [category, setCategory] = useState("All");

  const handleProductClick = (productId) => {
    navigate(`/shop/productDetails/${productId}`);
  };

  const handlePriceChange = (newPriceRange) => {
    setMinPrice(newPriceRange[0]);
    setMaxPrice(newPriceRange[1]);
  };

  const handleRadioChange = (e) => {
    setCategory(e.target.value);
  };

  const cloths = clothesData
    .filter((clothes) => {
      if (category === "All") {
        return clothes.price >= minPrice && clothes.price <= maxPrice;
      } else {
        return (
          clothes.price >= minPrice &&
          clothes.price <= maxPrice &&
          clothes.category === category
        );
      }
    })
    .map((clothes) => {
      return (
        <Card
          title={clothes.name}
          image={clothes.image}
          price={clothes.price}
          key={clothes.id}
          onClick={() => handleProductClick(clothes.id)}
        />
      );
    });

  return (
    <div style={styles.mainContainer}>
      <section style={styles.tabsCotainer}>
        <div style={styles.tab}>
          <span style={styles.tabHeading}>Filter by Price</span>
          <div style={styles.priceRange}>
            <span>
              Min: <span style={styles.price}>$ {minPrice}</span>
            </span>
            <span>
              Max: <span style={styles.price}>$ {maxPrice}</span>
            </span>
          </div>
          <RangeSlider min={0} max={200} onChange={handlePriceChange} />
        </div>
        <div style={styles.tab}>
          <span style={styles.tabHeading}>Filter by Category</span>
          <RadioGroupButtons
            labels={categoryLabels}
            value={category}
            onChange={handleRadioChange}
          />
        </div>
      </section>
      <section style={styles.productsContainer}>{cloths}</section>
      {/* <Footer /> */}
    </div>
  );
};

export default Shop;

const styles = {
  mainContainer: {
    display: "flex",
    padding: "20px 165px 0 165px",
  },

  tabsCotainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginRight: "20px",
    gap: 40,
  },

  tab: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },

  tabHeading: {
    fontSize: "17px",
    fontWeight: 700,
  },

  priceRange: {
    display: "flex",
    gap: 50,
    fontSize: "16px",
  },

  price: {
    fontWeight: 700,
    color: "#024E82",
  },

  productsContainer: {
    display: "flex",
    flex: 4,
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 48,
  },
};
