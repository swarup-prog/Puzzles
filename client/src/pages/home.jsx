import { useNavigate } from "react-router-dom";
import { FaShippingFast, FaFingerprint } from "react-icons/fa";
import { MdSupport } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useContext } from "react";

import Card from "../components/Card";
import Benifit from "../components/Benifit";
import Promo from "../components/Promo";
import clothesData from "../data/clothesData";
import { ProductContext } from "../context/productProvider";
// import ProductSlider from "../components/ProductSlider";

import homeBanner from "../assets/homeBanner.png";
import style from "../styles/styles";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/shop/productDetails/${productId}`);
  };

  const products = useContext(ProductContext);
  console.log(products);

  const newArrivals = products?.map((product) => {
    console.log(product.tags);
    if (product.tags === "New Arrivals") {
      return (
        <Card
          title={product.name}
          image={product.image}
          price={product.price}
          key={product._id}
          onClick={() => handleProductClick(product._id)}
        />
      );
    }
    // return null;
  });

  const topSellers = clothesData.map((clothes) => {
    if (clothes.tags === "topSeller") {
      return (
        <Card
          title={clothes.name}
          image={clothes.image}
          price={clothes.price}
          key={clothes.id}
          onClick={() => handleProductClick(clothes.id)}
        />
      );
    }
    return null;
  });

  return (
    <div style={styles.home}>
      {/* Banner  */}
      <section style={styles.bannerSection}>
        <div style={styles.banner}>
          <div style={styles.bannerText}>
            STYLIST PICKS BEAT <span>THE HEAT</span>
          </div>
          <div style={styles.shopNow} onClick={() => navigate("/shop")}>
            SHOP NOW
          </div>
        </div>
      </section>

      {/* New Arrivals  */}
      <section style={styles.productSection}>
        <div style={style.sectionHeading}>Discover New Arrivals</div>
        <div style={style.sectionSubHeading}>Recently added shirts!</div>
        <div style={styles.productContainer}>{newArrivals}</div>
      </section>

      {/* Benifits Section  */}
      <section style={styles.benifitSection}>
        <Benifit
          icon={FaShippingFast}
          title="FREE SHIPPING"
          desc="Enjoy free shipping on all orders above $100"
        />
        <Benifit
          icon={MdSupport}
          title="SUPPORT 24/7"
          desc="Our support team is there to help you for queries"
        />
        <Benifit
          icon={FaArrowRotateLeft}
          title="30 DAYS RETURN"
          desc="Simply return it within 30 days for an exchange"
        />
        <Benifit
          icon={FaFingerprint}
          title="100% PAYMENT SECURE"
          desc="Our Payments are secured with 256 bit encryption"
        />
      </section>

      {/* Promo Section  */}
      <section style={styles.promoSection}>
        <Promo
          title="PEACE OF MIND"
          details="A one-stop platform for all your fashion needs, hassle-free. Buy with peace of mind."
          style={{ flex: 2 }}
        />
        <Promo
          title="BUY 2 GET 1 FREE"
          details="End of season sale. Buy any 2 items of your choice and get 1 free."
          style={{ flex: 1.6 }}
        />
      </section>

      {/* Top Sellers  */}
      <section style={styles.productSection}>
        <div style={style.sectionHeading}>Top Sellers</div>
        <div style={style.sectionSubHeading}>
          Browse our top-selling products
        </div>
        <div
          style={{
            ...styles.productContainer,
            width: "100%",
            marginBottom: "90px",
          }}
        >
          {topSellers}
        </div>
      </section>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;

const styles = {
  home: {
    display: "flex",
    flexDirection: "column",
  },

  bannerSection: {
    backgroundImage: `url(${homeBanner})`,
    height: "648px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "165px",
  },

  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 48,
  },

  bannerText: {
    color: "white",
    fontSize: "48px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  shopNow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    border: "5px solid white",
    height: "58px",
    width: "172px",
    padding: "18px, 36px, 18px, 36px",
    color: "white",
    fontSize: "21px",
    fontWeight: 700,
    cursor: "pointer",
  },

  productSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 100px",
    gap: 20,
    margin: "90px 65px 0 65px",
  },

  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 48,
    marginTop: "48px",
  },

  benifitSection: {
    display: "flex",
    padding: "0 100px",
    margin: "90px 65px 0 65px",
    justifyContent: "space-between",
  },

  promoSection: {
    display: "flex",
    padding: "0 100px",
    margin: "90px 65px 0 65px",
    gap: 20,
  },
};
