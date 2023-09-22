import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { getUserData } from "../apis/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const userToken = localStorage.getItem("userToken");

  const fetchUserData = async () => {
    const user = await getUserData(jwt_decode(userToken)._id);
    setUserData(user);
    console.log(await user);
  };

  const logout = () => {
    setUserData(null);
  };

  useEffect(() => {
    if (userToken) {
      fetchUserData();
    }
  }, [userToken]);

  return (
    <UserContext.Provider value={{ userData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
