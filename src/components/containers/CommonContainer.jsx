import { Box } from "@mui/material";
import MyHeader from "../commonLayout/MyHeader";
import MyFooter from "../commonLayout/MyFooter";

const CommonContainer = ({ children }) => {
  return (
    <Box>
      <MyHeader />
      {children}
      <MyFooter />
    </Box>
  );
};

export default CommonContainer;
