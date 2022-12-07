import { Box, Modal, Typography, Button } from "@mui/material";

const MyCustomModal = ({
  isModalOpen,
  title,
  children,
  onIsModalOpenStateChangeEvent,
}) => {
  return (
    <Modal
      hideBackdrop
      open={isModalOpen}
      onClose={onIsModalOpenStateChangeEvent}
    >
      <Box sx={{ ...modalStyle, width: "auto" }}>
        <Typography variant="h3" component="div" color="text.primary">
          {title}
        </Typography>
        <Box>{children}</Box>
        <Button onClick={onIsModalOpenStateChangeEvent}>Close</Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default MyCustomModal;
