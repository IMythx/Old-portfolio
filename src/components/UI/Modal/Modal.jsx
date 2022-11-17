import classes from "./modal.module.css";
import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "../../../store/modal-context";
const Backdrop = ({ isHome }) => {
  const modalCtx = useContext(ModalContext);
  return (
    <div
      className={`${classes.backdrop} ${isHome ? classes.isHome : ""}`}
      onClick={() => modalCtx.hideModal()}
    >
      <button onClick={() => modalCtx.hideModal()}>
        <CloseIcon />
      </button>
    </div>
  );
};
const ModalOverlay = ({ isHome, children }) => {
  return (
    <div className={`${classes.modal} ${isHome ? classes.isHome : ""}`}>
      {children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = ({ isHome = false, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop isHome={isHome} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay isHome={isHome}>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
