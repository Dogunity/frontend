import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MyHeader = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <MenuIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap={true}>
          DOGUNITY
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyHeader;
