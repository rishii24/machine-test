import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export const CustomSnackbar = ({ open, setOpen, message }) => {
  return <Snackbar open={open} setOpen={setOpen} message={message} />;
};
