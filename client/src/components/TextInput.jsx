// import eye from "../assets/icons/eye.svg";
// import eyeSlash from "../assets/icons/eyeSlash.svg";

const TextInput = ({ type, value, onChange, name, label, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <label style={{ fontSize: "16px", color: "#555555" }}>{label}</label>
      <input
        type={type}
        style={{
          height: "20px",
          border: "1px solid #EBEBEB",
          background: "#f5f7f9",
          width: "300px",
          padding: "18px",
          fontSize: "medium",
          ...style,
        }}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
