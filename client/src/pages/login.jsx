import { useNavigate } from "react-router-dom";
import { useState } from "react";

import TextInput from "../components/TextInput";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Logged in successfully!");
    navigate("/");
  };
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "90.5vh",
      }}
    >
      <section
        style={{
          display: "flex",
          flex: 1,
          background: "#f5f7f9",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        PUZZLES
      </section>
      <section
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          background: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
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
            name="password "
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
