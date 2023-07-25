import { useNavigate } from "react-router-dom";

const NavigationButton = ({ to, name, inverted, styles }) => {
  const navigate = useNavigate();

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
        cursor: "pointer",
        fontWeight: "normal",
        ...styles,
      }}
      onClick={() => navigate(to)}
    >
      {name}
    </div>
  );
};

export default NavigationButton;
