import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckboxLabels = ({ labels }) => {
  return (
    <FormGroup>
      {labels.map((label, index) => (
        <FormControlLabel control={<Checkbox />} label={label} key={index} />
      ))}
    </FormGroup>
  );
};

export default CheckboxLabels;
