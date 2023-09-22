import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../apis/signup";

import PrimaryButton from "../components/buttons/PrimaryButton";
import TextInput from "../components/inputFields/TextInput";

import loginBanner from "../assets/banners/loginBanner.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkPasswordMatch = () => {
    if (formData.password !== formData.confirmPassword) {
      alert.error("Password did not match!");
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (checkPasswordMatch()) {
      const response = await signup(formData);

      if (response.success) {
        alert.success("User registered successfully!");
      } else {
      }
      console.log("response", response);
    }
  };

  return (
    <div style={styles.container}>
      <section style={styles.bannerSection}>
        <img src={loginBanner} alt="" style={styles.banner} />
      </section>
      <section style={styles.formSection}>
        <h1>SIGNUP</h1>
        <form style={styles.form} onSubmit={submitHandler}>
          <TextInput
            type="text"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={changeHandler}
          />
          <TextInput
            type="text"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={changeHandler}
          />
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
          <TextInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={changeHandler}
          />
          <PrimaryButton type="submit" name="Signup" />
        </form>
        <div style={{ display: "flex", gap: 8 }}>
          Already have an acoount?
          <span style={styles.span} onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </section>
    </div>
  );
};

export default Signup;

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
