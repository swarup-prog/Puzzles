import { useRef } from "react";

const Tab = ({ title, onClick, isActive }) => {
  const tabRef = useRef();

  const mouseEnterHandler = () => {
    if (!isActive) {
      tabRef.current.style.background = `#000000`;
      tabRef.current.style.color = `#FFFFFF`;
    }
  };

  const mouseLeaveHandler = () => {
    if (!isActive) {
      tabRef.current.style.background = `#FFFFFF`;
      tabRef.current.style.color = `#000000`;
    }
  };

  return (
    <div
      style={{
        ...styles.sidebarTab,
        background: isActive ? "#000000" : "#FFFFFF",
        color: isActive ? "#FFFFFF" : "#000000",
      }}
      ref={tabRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={() => onClick(title)}
    >
      {title}
    </div>
  );
};

export default Tab;

const styles = {
  sidebarTab: {
    display: "flex",
    justifyContent: "center",
    color: "#454545",
    fontWeight: 700,
    padding: "10px",
    fontSize: "16px",
    cursor: "Pointer",
  },
};
