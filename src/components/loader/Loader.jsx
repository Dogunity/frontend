import { Box } from "@mui/material";
import { Dna } from "react-loader-spinner";

function Loader() {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dna
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Box>
  );
}

export default Loader;
