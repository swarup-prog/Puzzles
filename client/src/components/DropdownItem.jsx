import { useRef } from "react";

const DropdownItem = ({ icon: Icon, title, onClick }) => {
  const itemRef = useRef();

  const mouseEnterHandler = () => {
    itemRef.current.style.background = `#DDDDDD`;
  };

  const mouseLeaveHandler = () => {
    itemRef.current.style.background = `#FFFFFF`;
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "10px 10px",
      }}
      onClick={onClick}
      ref={itemRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Icon size="15px" />
      <span>{title}</span>
    </li>
  );
};

export default DropdownItem;
