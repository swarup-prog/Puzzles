const SecondaryButton = ({ onClick, name, inverted, styles }) => {
  let color = "#ffffff";
  let background = "#024E82";

  if (inverted) {
    [color, background] = [background, color];
  }

  return (
    <div
      style={{
        background: background,
        width: "161px",
        height: "58px",
        color: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        cursor: "pointer",
        fontWeight: "normal",
        ...styles,
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default SecondaryButton;
