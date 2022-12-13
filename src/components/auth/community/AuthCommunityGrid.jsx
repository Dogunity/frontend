import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const AuthCommunityGrid = ({ columns, rows }) => {
  return (
    <Box sx={{ width: 900, height: 400, margin: "0 auto", mt: 8 }}>
      <DataGrid
        pageSize={6}
        rowsPerPageOptions={[6]}
        columns={columns}
        rows={rows}
      />
    </Box>
  );
};

export default AuthCommunityGrid;
