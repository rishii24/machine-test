import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export const BasicSelect = ({
  userdata,
  setUserData,
  personValue,
  index,
  open,
  setOpen,
}) => {
  // const [gender, setGender] = useState("");

  const handleChange = (e) => {
    let newArray = [...userdata];
    newArray[index] = { ...newArray[index], gender: e.target.value };
    return setUserData(newArray);
  };

  return (
    <Box>
      <FormControl
        fullWidth
        sx={{ minWidth: 120 }}
        size="small"
        variant="standard"
      >
        <Select
          labelId="gender"
          value={personValue}
          defaultValue={personValue}
          label="Gender"
          onChange={handleChange}
          disableUnderline
        >
          <MenuItem value={"M"}>{personValue === "M" ? "M" : "Male"}</MenuItem>
          <MenuItem value={"F"}>
            {personValue === "F" ? "F" : "Female"}
          </MenuItem>
          <MenuItem value={"O"}>{personValue === "O" ? "O" : "Other"}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
