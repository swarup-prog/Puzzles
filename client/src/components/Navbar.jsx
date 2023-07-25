import { useNavigate } from "react-router-dom";
import NavigationButton from "./buttons/NavigationButton";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.brandTitle} onClick={() => navigate("/")}>
        Puzzles
      </div>
      <div style={styles.pageNav}>
        <span onClick={() => navigate("/")}>HOME</span>
        <span onClick={() => navigate("/shop")}> SHOP</span>
        <span onClick={() => navigate("/about")}> ABOUT</span>
        <span onClick={() => navigate("/contact")}>CONTACT US</span>
      </div>
      <NavigationButton to="/login" name="LOGIN" styles={{ fontWeight: 700 }} />
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "88px",
    padding: "0 165px",
  },

  brandTitle: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "30px",
    fontFamily: "Arimo",
    fontWeight: 700,
    cursor: "pointer",
  },

  pageNav: {
    fontSize: "12px",
    fontFamily: "Arimo",
    display: "flex",
    gap: 30,
    color: "#000000",
    cursor: "pointer",
  },
};
