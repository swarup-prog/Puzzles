import { useRef, useState } from "react";
import Card from "../components/Card";
import clothesData from "../data/clothesData";

const ProductSlider = () => {
  const listRef = useRef();

  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translate(${295 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translate(${distance - 295}px)`;
    }
  };

  // getting the product data
  const productData = clothesData.map((clothes) => {
    return (
      <Card
        title={clothes.name}
        image={clothes.image}
        price={clothes.price}
        key={clothes.id}
      />
    );
  });

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.slideButton,
          zIndex: 2,
          display: !isMoved && "none",
        }}
        onClick={() => handleClick("left")}
      >
        button 1
      </div>
      <div style={styles.productContainer} ref={listRef}>
        {productData}
      </div>
      <div
        style={{
          ...styles.slideButton,
          right: 0,
        }}
        onClick={() => handleClick("right")}
      >
        button 2
      </div>
    </section>
  );
};

export default ProductSlider;

const styles = {
  section: {
    display: "flex",
    overflow: "hidden",
  },

  productContainer: {
    display: "flex",
    gap: 30,
    transform: "translateX(0px)",
    transition: "all 1s ease",
    width: "max-content",
  },

  slideButton: {
    background: "rgba(0,0,0, 0.5)",
    width: "50px",
    height: "380px",
    position: "absolute",
    cursor: "pointer",
    zIndex: 2,
  },
};
