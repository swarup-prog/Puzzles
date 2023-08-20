import { useNavigate } from "react-router-dom";

import Card from "../components/Card";

import clothesData from "../data/clothesData";

const Shop = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/shop/productDetails/${productId}`);
  };

  const cloths = clothesData.map((clothes) => {
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
      <section style={styles.tabsCotainer}>Tabs</section>
      <section style={styles.productsContainer}>{cloths}</section>
    </div>
  );
};

export default Shop;

const styles = {
  mainContainer: {
    display: "flex",
    padding: "20px 165px 0 165px",
    background: "#f5f7f7",
  },

  tabsCotainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "#FFFFFF",
  },

  productsContainer: {
    display: "flex",
    flex: 4,
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 48,
    background: "#FFFFFF",
  },
};
