import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckboxLabels = ({ items, label, onClick }) => {
  return (
    <div>
      <label style={{ fontSize: "16px", color: "#555555" }}>{label}</label>
      <FormGroup
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {items.map((item, index) => (
          <FormControlLabel
            control={<Checkbox />}
            name="size"
            label={item}
            key={index}
            value={item}
            onClick={onClick}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckboxLabels;
