import { useRef } from "react";

const Card = ({ image, title, price, onClick }) => {
  // const cardRef = useRef();

  // const mouseEnterHandler = () => {
  //   cardRef.current.style.boxShadow = `0 10px 14px rgba(0, 0, 0, 0.9)`;
  // };

  // const mouseLeaveHandler = () => {
  //   cardRef.current.style.boxShadow = `none`;
  // };

  return (
    <div
      style={styles.productCard}
      onClick={onClick}
      // ref={cardRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.details}>
        <span style={styles.title}>{title}</span>
        <span style={styles.price}>$ {price}</span>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  productCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    cursor: "pointer",
  },

  image: {
    width: "295px",
    height: "342px",
  },

  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },

  title: {
    fontFamily: "Baloo 2",
    fontSize: "16px",
    fontWeight: "700",
  },

  price: {
    color: "#024E82",
  },
};
