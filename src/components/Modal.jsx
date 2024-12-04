import Button from "../helpers/Button";
function Modal({ handleClose }) {
  return (
    <div className="modalOverlay" onClick={handleClose}>
      <div className="modalSection" onClick={(e) => e.stopPropagation()}>
        <Button text={"x"} PressMe={handleClose} className="modalCross" />
        <h1>Lorem, ipsum dolor.</h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aut.
          Deleniti nisi blanditiis quia nostrum, quisquam eaque in commodi quam!
        </p>
      </div>
    </div>
  );
}

export default Modal;
