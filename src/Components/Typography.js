import React, { useEffect, useState } from "react";
import { Input } from "@mui/material";
import { ClickHook } from "./custom/ClickHook";

export const Typography = ({
  personValue,
  handleSubmit,
  index,
  userdata,
  setUserData,
  name,
}) => {
  const handleChange = (e) => {
    if (e.target.name === "name") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], name: e.target.value };
      return setUserData(newArray);
    }
    if (e.target.name === "birth") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], birth: e.target.value };
      return setUserData(newArray);
    }
    if (e.target.name === "birthloc") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], birthloc: e.target.value };
      return setUserData(newArray);
    }
    if (e.target.name === "death") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], death: e.target.value };
      return setUserData(newArray);
    }
    if (e.target.name === "deathloc") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], deathloc: e.target.value };
      return setUserData(newArray);
    }
    if (e.target.name === "marriage") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], marriage: e.target.value };
      return setUserData(newArray);
    }
    if (e.target.name === "spouse") {
      let newArray = [...userdata];
      newArray[index] = { ...newArray[index], spouse: e.target.value };
      return setUserData(newArray);
    }
  };

  return (
    <div
      style={{
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        width: "150px",
        height: "40px",
        display: "block",
        overflow: "hidden",
      }}
      className="overflow-test"
    >
      <form onSubmit={handleSubmit}>
        <Input
          disableUnderline={true}
          variant="standard"
          onChange={handleChange}
          value={personValue}
          type="text"
          name={name}
        />
      </form>
    </div>
  );
};
