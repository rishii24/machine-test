import React, { useState, useRef } from "react";
import { Input } from "@mui/material";

export const Typography = ({
  personValue,
  handleSubmit,
  index,
  userdata,
  setUserData,
  name,
  imgsrc,
}) => {
  const focusRef = useRef({});

  const [refFocus, setRefFocus] = useState(false);

  const handleRefClick = () => {
    console.log(focusRef, "ref");
    if (focusRef.current) {
      setRefFocus(!refFocus);
    }
  };

  console.log(refFocus);
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
        margin: 0,
        height: "20px",
        width: "140px",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
        borderLeft: personValue === "Elon Musk" ? "4px solid #00008B" : 0,
        paddingLeft: personValue === "Elon Musk" ? "1rem" : 0,
        // border: refFocus ? "2px solid #87CEEB": ""
      }}
      className="overflow-test"
      ref={focusRef}
      onClick={handleRefClick}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: refFocus ? "3px solid #87CEEB" : "",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {name === "name" && (
          <img
            style={{ height: "25px", marginRight: "6px" }}
            src={imgsrc}
            alt="img"
          />
        )}
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
    </div>
  );
};
