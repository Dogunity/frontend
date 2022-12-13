import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const AuthCommunityGrid = () => {
  const columns = [
    {
      field: "name",
      headers: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "introduction",
      headers: "Introduction",
      width: 150,
      editable: true,
    },
    {
      field: "createdAt",
      headers: "CreatedAt",
      width: 150,
      editable: true,
    },
    {
      field: "likeCnt",
      headers: "Like",
      width: 150,
      editable: true,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid pageSize={5} rowsPerPageOptions={[5]} columns={columns} />
    </Box>
  );
};

export default AuthCommunityGrid;
