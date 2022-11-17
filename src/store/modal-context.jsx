import { createContext, useState } from "react";

export const ModalContext = createContext({
  showedModal: "",
  showModal: () => {},
  hideModal: () => {},
});

const ModalProvider = (props) => {
  const [showedModal, setShowedModal] = useState("");
  const showModal = (name) => setShowedModal(name);
  const hideModal = () => setShowedModal("");

  return (
    <ModalContext.Provider value={{ showedModal, showModal, hideModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
