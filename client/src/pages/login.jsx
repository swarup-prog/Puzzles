import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAlert } from "react-alert";
import { login } from "../apis/login";

import TextInput from "../components/TextInput";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Login = () => {
  const navigate = useNavigate();
  const alert = useAlert();

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
      alert.success("Logged in successfully!");
    } else {
      alert.error(response.error);
    }
    console.log("response", response);
  };

  return (
    <div style={styles.container}>
      <section style={styles.bannerSection}>PUZZLES</section>
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
    height: "90.5vh",
  },

  bannerSection: {
    display: "flex",
    flex: 1,
    background: "#f5f7f9",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
