import { useNavigate } from "react-router-dom";
import {
  BiUserCircle,
  BiLogOut,
  BiSolidShoppingBagAlt,
  BiMenuAltRight,
} from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { useState, useContext } from "react";
import { UserContext } from "../context/userProvider";

import NavigationButton from "./buttons/NavigationButton";
import DropdownItem from "./DropdownItem";

import logo from "../assets/logoPng.png";

const Navbar = () => {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken") || "";
  const { userData, logout } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logoutClickHandler = () => {
    localStorage.removeItem("userToken");
    setIsDropdownOpen(false);
    logout();
    console.log(userData);
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.brandTitle} onClick={() => navigate("/")}>
        <img src={logo} alt="" width="35px" />
        Puzzles
      </div>
      <div style={styles.pageNav}>
        <span onClick={() => navigate("/")}>HOME</span>

        <span onClick={() => navigate("/shop")}> SHOP</span>

        <span onClick={() => navigate("/contact")}>CONTACT US</span>

        <span onClick={() => navigate("/blog")}>BLOG</span>
      </div>
      <div style={styles.pageNav}>
        {userToken && (
          <>
            {userData && (
              <>
                {userData.role === "admin" && (
                  <>
                    <span onClick={() => navigate("/dashboard")}>
                      <LuLayoutDashboard size="25px" />
                    </span>
                    <span onClick={logoutClickHandler}>
                      <BiLogOut size="25px" />
                    </span>
                  </>
                )}
                {userData.role === "user" && (
                  <>
                    <span onClick={() => navigate("/contact")}>
                      <BiUserCircle size="25px" />
                    </span>
                    <span onClick={() => navigate("/cart")}>
                      <AiOutlineShoppingCart size="25px" />
                    </span>
                    <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <BiMenuAltRight size="25px" />
                    </span>
                  </>
                )}
              </>
            )}

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
    gap: 10,
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
