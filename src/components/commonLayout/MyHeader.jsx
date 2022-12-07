import useMyHeader from "../../hooks/header/useMyHeader";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const MyHeader = () => {
  const { menuItems, handleLogoItemButtonClick, handleMenuItemButtonClick } =
    useMyHeader();

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block", cursor: "pointer" },
          }}
          onClick={handleLogoItemButtonClick}
        >
          DOGUNITY
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.title}
              sx={{ color: "#fff" }}
              onClick={handleMenuItemButtonClick(item.title, item.path)}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyHeader;
