import React from "react";

const Dropdown = ({ name, options, defaultValue }) => {
  return (
    <div>
      <select name={name} defaultValue={defaultValue} style={styles.select}>
        {options.map((option) => {
          return (
            <option value={option.toLowerCase()} style={styles.option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;

const styles = {
  select: {
    width: "210px",
    height: "48px",
    padding: "0 16px",
    fontSize: "16px",
  },
  option: {
    width: "210px",
    height: "48px",
    padding: "0 16px",
    fontSize: "16px",
    backgrount: "black",
  },
};
