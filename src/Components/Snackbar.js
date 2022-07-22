import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export const CustomSnackbar = ({ open, setopen, message }) => {
  return <Snackbar open={open} setOpen={setopen} message={message} />;
};
