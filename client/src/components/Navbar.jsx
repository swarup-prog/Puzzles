import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import NavigationButton from "./buttons/NavigationButton";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userToken");

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
      <div style={styles.pageNav}>
        {user && (
          <>
            <span onClick={() => navigate("/contact")}>
              <AiOutlineShoppingCart size="25px" />
            </span>
            <span onClick={() => navigate("/shop")}>
              <BiUserCircle size="25px" />
            </span>
          </>
        )}
        {!user && (
          <NavigationButton
            to="/login"
            name="LOGIN"
            styles={{ fontWeight: 700 }}
          />
        )}
      </div>
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
