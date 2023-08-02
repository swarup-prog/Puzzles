import PrimaryButton from "../components/buttons/PrimaryButton";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
          // background: "#dcc9bb",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <img
          src={loginPhoto}
          alt=""
          style={{
            width: "400px",
            height: "400px",
          }}
        /> */}
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
        <h1>SIGNUP</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <TextInput type="text" name="firtName" label="First Name" />
          <TextInput type="text" name="lastName" label="Last Name" />
          <TextInput type="email" name="email" label="Email" />
          <TextInput type="password" name="password " label="Password" />
          <TextInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
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
  span: {
    color: "#024E82",
    fontWeight: 700,
    cursor: "pointer",
  },
};
