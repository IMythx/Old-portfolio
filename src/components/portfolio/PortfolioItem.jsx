import { Fragment, useContext } from "react";
import { ModalContext } from "../../store/modal-context";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import classes from "./projItem.module.css";
import Modal from "../UI/Modal/Modal";
import GitHubIcon from "@mui/icons-material/GitHub";
const PortfolioItem = ({
  img,
  url,
  project,
  sourceCode,
  language,
  title,
  name,
}) => {
  const modalCtx = useContext(ModalContext);

  return (
    <Fragment>
      {modalCtx.showedModal === name && (
        <Modal>
          <div className={classes.projItem}>
            <h1>{title} PORJECT</h1>
            <div>
              <p>
                <DescriptionIcon /> Project: <span>{project}</span>
              </p>
              <p>
                <CodeIcon /> Languages: <span>{language}</span>
              </p>
              <p>
                <OpenInNewIcon /> Preview:
                <a href={url} target="a_blank">
                  LINK
                </a>
              </p>
              <p>
                <GitHubIcon /> Source Code:
                <a href={sourceCode} target="a_blank">
                  LINK
                </a>
              </p>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </Modal>
      )}
      <li className={classes.parent}>
        <div onClick={() => modalCtx.showModal(name)}>
          <img src={img} alt=""></img>
        </div>
      </li>
    </Fragment>
  );
};

export default PortfolioItem;
