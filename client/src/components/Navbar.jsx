import { useNavigate } from "react-router-dom";
import {
  BiUserCircle,
  BiLogOut,
  BiSolidShoppingBagAlt,
  BiMenuAltRight,
} from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

import NavigationButton from "./buttons/NavigationButton";
import DropdownItem from "./DropdownItem";
import { getUserData } from "../apis/user";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken");
  const { setUser } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const logoutClickHandler = () => {
    localStorage.removeItem("userToken");
    setIsDropdownOpen(false);
    setUser(null);
    // window.location.reload();
    navigate("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (userToken) {
        const userData = await getUserData(jwt_decode(userToken)._id);
        setUserData(userData);
      }
    };
    fetchUserData();
  }, [userToken]);

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
            {userData && (
              <>
                {userData.role === "admin" && (
                  <>
                    <span onClick={() => navigate("/admin")}>
                      <RiAdminLine size="25px" />
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
                    <span onClick={() => navigate("/contact")}>
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
