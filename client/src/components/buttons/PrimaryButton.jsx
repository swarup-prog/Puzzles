const PrimaryButton = ({ type, name, inverted, disabled }) => {
  let color = "#ffffff";
  let background = "#024E82";

  if (inverted) {
    [color, background] = [background, color];
  }

  return (
    <div>
      <button
        type={type}
        style={{
          height: "58px",
          width: "172px",
          background: background,
          color: color,
          border: "none",
          padding: "18px, 36px, 18px, 36px",
          fontSize: "medium",
          fontWeight: 400,
          cursor: "pointer",
          display: "inline-block",
        }}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
