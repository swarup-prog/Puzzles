import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioGroupButtons = ({ name, labels, value, onChange }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {labels.map((label, index) => (
          <FormControlLabel
            key={index}
            value={label}
            control={<Radio style={{ color: "#024E82" }} />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupButtons;
