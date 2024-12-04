import { useState } from "react";
import Button from "../helpers/Button";
import Modal from "../components/Modal";
function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        text={"open modal"}
        PressMe={handleOpen}
        className="modalButton"
      />

      {isOpen && <Modal handleClose={handleClose} />}
    </div>
  );
}

export default ModalPage;
