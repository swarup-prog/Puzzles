import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useAlert } from "react-alert";
import { login } from "../../../apis/login";
import jwt_decode from "jwt-decode";

import TextInput from "../../inputFields/TextInput";
import PrimaryButton from "../../buttons/PrimaryButton";
import { UserContext } from "../../../context/userContext";

import loginBanner from "../../../assets/banners/loginBanner.jpg";

const Login = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await login(formData);

    if (response.success) {
      const userToken = response.data.token;
      localStorage.setItem("userToken", userToken);
      setUser(jwt_decode(userToken)._id);
      alert.success("Logged in successfully!");
      navigate("/");
    } else {
      alert.error(response.error);
    }
    console.log("response", response);
  };

  return (
    <div style={styles.container}>
      <section style={styles.bannerSection}>
        <img src={loginBanner} alt="" style={styles.banner} />
      </section>
      <section style={styles.formSection}>
        <h1> LOGIN</h1>
        <form style={styles.form} onSubmit={submitHandler}>
          <TextInput
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={changeHandler}
          />
          <TextInput
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={changeHandler}
          />
          <PrimaryButton type="submit" name="Login" />
        </form>

        <div style={{ display: "flex", gap: 8 }}>
          Don't have an acoount?
          <span style={styles.span} onClick={() => navigate("/signup")}>
            Signup
          </span>
        </div>
      </section>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "91vh",
  },

  bannerSection: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background:
      "linear-gradient(to bottom left, rgba(103, 170, 220, 0.8), rgba(255, 218, 173, 0.8), rgba(139, 89, 30, 0.8))",
  },

  banner: {
    height: "580px",
    width: "387px",
  },

  formSection: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },

  span: {
    color: "#024E82",
    fontWeight: 700,
    cursor: "pointer",
  },
};
