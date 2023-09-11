import SecondaryButton from "../../../components/buttons/SecondaryButton";
import LoginSignupModal from "../../../components/modal/LoginSignupModal";
import { useState } from "react";
import Login from "../../../components/modal/content/Login";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SecondaryButton name="Login" onClick={handleOpen} />
      <LoginSignupModal onClose={handleClose} open={open} content={<Login />} />
    </div>
  );
};

export default Orders;
