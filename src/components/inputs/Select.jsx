import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";

const SelectInput = ({ label, value, options, handleClick }) => {
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id={label + "-label"}>{label}</InputLabel>
        <Select
          labelId={label + "-label"}
          id={label}
          label={label}
          value={value.label}
        >
          {options.map((option) => (
            <MenuItem value={option.label} onClick={(e) => handleClick(option)}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
