import classes from "./home.module.css";
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Overlay from "../../components/overlay/overlay";
import { Fragment, useContext } from "react";
import useQuery from "../../hooks/mediaQueries";
import Modal from "../../components/UI/Modal/Modal";
import About from "../About/About";
import { ModalContext } from "../../store/modal-context";
const Home = () => {
  const modalCtx = useContext(ModalContext);
  const { isTablet } = useQuery();
  return (
    <Fragment>
      <Overlay />
      {modalCtx.showedModal === "About" && (
        <Modal isHome={true}>
          <About isModal={true} />
        </Modal>
      )}
      <section className={classes.home}>
        <div>
          <div>
            {!isTablet && <img src={img} alt="" />}
            {isTablet && <img src={img2} alt="" />}
          </div>
          <div>
            <h1>
              I'M MAHMOUD HELAL <span>FRONTEND DEVELOPER</span>
            </h1>
            <p>
              I am a Computer Science enthusiast. I am passionate about Web
              developing, and problem-solving. I am a self-taught programmer and
              I am always looking to improve my skills.
            </p>
            <button className="btn" onClick={() => modalCtx.showModal("About")}>
              MORE ABOUT ME <ArrowForwardRoundedIcon />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
