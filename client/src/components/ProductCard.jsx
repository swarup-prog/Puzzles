const ProductCard = ({ image, title, price, originalPrice, onClick }) => {
  return (
    <div style={styles.productCard} onClick={onClick}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.details}>
        <span style={styles.title}>{title}</span>
        <div style={styles.priceSection}>
          <span style={styles.price}>$ {price}</span>
          {originalPrice && (
            <>
              <span style={styles.originalPrice}>
                <strike>$ {originalPrice}</strike>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const styles = {
  productCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    cursor: "pointer",
    boxShadow: "0 0 10px #0000001a",
    paddingBottom: "19px",
  },

  image: {
    width: "268px",
    height: "268px",
  },

  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: "0px 10px",
  },

  title: {
    fontFamily: "Baloo 2",
    fontSize: "18px",
    fontWeight: "normal",
  },
  priceSection: {
    display: "flex",
    gap: 10,
  },

  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#E52E06",
  },

  originalPrice: {
    fontSize: "15px",
    color: "#444444",
    fontWeight: "bold",
  },
};
