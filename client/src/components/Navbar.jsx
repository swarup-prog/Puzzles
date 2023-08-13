import { useNavigate } from "react-router-dom";
import {
  BiUserCircle,
  BiLogOut,
  BiSolidShoppingBagAlt,
  BiMenuAltRight,
} from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

import NavigationButton from "./buttons/NavigationButton";
import DropdownItem from "./DropdownItem";

const Navbar = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");
  const { setUser } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logoutClickHandler = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    navigate("/");
  };

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
        {userToken && (
          <>
            <span onClick={() => navigate("/contact")}>
              <BiUserCircle size="25px" />
            </span>
            <span onClick={() => navigate("/contact")}>
              <AiOutlineShoppingCart size="25px" />
            </span>
            <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <BiMenuAltRight size="25px" />
            </span>

            {isDropdownOpen && (
              <div style={styles.dropdownContainer}>
                <ul style={styles.dropdownList}>
                  <DropdownItem icon={BiSolidShoppingBagAlt} title="ORDERS" />
                  <DropdownItem
                    icon={BiLogOut}
                    title="LOGOUT"
                    onClick={logoutClickHandler}
                  />
                </ul>
              </div>
            )}
          </>
        )}
        {!userToken && (
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

  dropdownContainer: {
    position: "absolute",
    top: "90px",
    right: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "var(--border-radius)",
    width: "100px",
    margin: "0 145px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  dropdownList: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
};
