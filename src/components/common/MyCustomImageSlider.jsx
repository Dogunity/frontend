import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

const MyCustomImageSlider = ({ images }) => {
  const feedImages = images.map((image) => {
    return {
      url: image,
    };
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 2,
        mb: 2,
      }}
    >
      <SimpleImageSlider
        width={400}
        height={400}
        images={feedImages}
        showNavs={true}
      />
    </Box>
  );
};

export default MyCustomImageSlider;
