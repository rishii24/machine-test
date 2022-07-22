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
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
    return setUserData(newArray);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          value={personValue}
          defaultValue={personValue}
          label="Gender"
          onChange={handleChange}
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
