const SecondaryTextInput = ({ type, value, onChange, name, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <input
        type={type}
        style={{
          height: "20px",
          border: "1px solid #EBEBEB",
          background: "#f5f7f9",
          width: "50px",
          padding: "5px",
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

export default SecondaryTextInput;
