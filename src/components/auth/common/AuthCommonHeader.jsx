import React from "react";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AuthCommonHeader = ({ title }) => {
  return (
    <React.Fragment>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </React.Fragment>
  );
};

export default AuthCommonHeader;
