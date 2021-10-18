import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const IconInput = ({
  id,
  value,
  label,
  handleChange,
  iconPosition,
  iconButtonLabel,
  icon,
}) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={"text"}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position={iconPosition}>
            <IconButton aria-label={iconButtonLabel} edge={iconPosition}>
              {icon}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default IconInput;
