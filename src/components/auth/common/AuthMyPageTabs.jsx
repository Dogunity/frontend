import { Box, Tabs, Tab } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AuthMyPageTabs = ({ tabIndex, tabItems, onTabIndexChangeEvent }) => {
  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={onTabIndexChangeEvent}>
          {tabItems.map((item, index) => (
            <Tab key={item.label} label={item.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default AuthMyPageTabs;
