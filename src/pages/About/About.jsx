import { Fragment } from "react";
import Overlay from "../../components/overlay/overlay";
import Header from "../../components/global/Header";
import classes from "./about.module.css";
import img2 from "../../assets/img2.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import ProgressCircle from "../../components/global/ProgressCircle";
import InfoItem from "../../components/about/InfoItem";
import useQuery from "../../hooks/mediaQueries";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const About = ({ isModal = false }) => {
  const { isMobile } = useQuery();
  return (
    <Fragment>
      {!isModal && <Overlay />}
      <section className={`${classes.about} ${isModal ? classes.isModal : ""}`}>
        <Header title={"ABOUT"} subTitle={"ME"} />
        {isMobile && (
          <div className={classes.img}>
            <img src={img2} alt="" />
          </div>
        )}
        <div className={classes.rowOne}>
          <div>
            <h1>PERSONAL INFOS</h1>
            <div>
              <p>
                First Name: <span>Mahmoud</span>
              </p>
              <p>
                Last Name: <span>Helal</span>
              </p>
              <p>
                Age: <span>24</span>
              </p>
              <p>
                Nationality: <span>Egyption</span>
              </p>
              <p>
                Freelance: <span>Available</span>
              </p>
              <p>
                Address: <span>Beni Suef</span>
              </p>
              <p>
                Phone: <span>+20 01023634534</span>
              </p>
              <p>
                Languages: <span>Arabic, English</span>
              </p>
            </div>
            <button className="btn">
              DOWNLOAD CV <DownloadIcon />
            </button>
          </div>
          <div>
            <InfoItem title={"1"} subTitle={"YEARS OF PROGRAMMING KNOWLEDGE"} />
            <InfoItem title={"10"} subTitle={"GITHUB REPOSITORIES"} />
          </div>
        </div>
        <div className={classes.rowTwo}>
          <h1>MY SKILLS</h1>
          <div>
            <div>
              <ProgressCircle progress={"0.97"} />
              <p>HTML</p>
            </div>
            <div>
              <ProgressCircle progress={"0.70"} />
              <p>CSS</p>
            </div>
            <div>
              <ProgressCircle progress={"0.85"} />
              <p>JAVASCRIPT</p>
            </div>
            <div>
              <ProgressCircle progress={"0.90"} />
              <p>REACT JS</p>
            </div>
            <div>
              <ProgressCircle progress={"0.65"} />
              <p>NEXT JS</p>
            </div>
          </div>
        </div>
        <div className={classes.rowThree}>
          <h1>EXTRACURRICULARS & EDUCATION</h1>
          <div>
            {" "}
            <div>
              <div>
                <BusinessCenterIcon />
              </div>
              <div>
                <p>2018-2022</p>
                <p>
                  BACHELOR DEGREE <span>- BENI SUEF UNIVERSITY</span>
                </p>
                <p>Bachelor degree in Geographic information systems</p>
              </div>
            </div>
            <div>
              <div>
                <BusinessCenterIcon />
              </div>
              <div>
                <p>2022</p>
                <p>
                  UDEMY CTF <span>- REACT JS</span>
                </p>
                <p>
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
