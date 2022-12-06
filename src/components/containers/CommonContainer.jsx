import { Box } from "@mui/material";
import MyHeader from "../commonLayout/MyHeader";

const CommonContainer = ({ children }) => {
  return (
    <Box>
      <MyHeader />
      {children}
    </Box>
  );
};

export default CommonContainer;
