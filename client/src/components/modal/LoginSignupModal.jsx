import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: "0px",
};

const LoginSignupModal = ({ open, onClose, content }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>{content}</Box>
    </Modal>
  );
};

export default LoginSignupModal;
