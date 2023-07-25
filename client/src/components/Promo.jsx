import NavigationButton from "./buttons/NavigationButton";

const Promo = ({ title, details, style }) => {
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.info}>
        <span style={styles.title}>{title}</span>
        <span style={styles.details}>{details}</span>
      </div>
      <NavigationButton to="/shop" name="BUY NOW" inverted={true} />
    </div>
  );
};

export default Promo;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#000000",
    color: "#FFFFFF",
    gap: 32,
    height: "429px",
  },

  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 24,
  },

  title: {
    color: "inherit",
    fontSize: "32px",
  },

  details: {
    width: "406px",
    height: "48px",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "23.4px",
  },
};
