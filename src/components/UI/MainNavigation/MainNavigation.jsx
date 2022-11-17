import classes from "./nav.module.css";
import PersonIcon from "@mui/icons-material/Person";
import HouseIcon from "@mui/icons-material/House";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { NavLink } from "react-router-dom";
import useQuery from "../../../hooks/mediaQueries";

const Navigation = () => {
  const { isTablet } = useQuery();
  return (
    <ul className={classes.nav}>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {!isTablet && <p>HOME</p>}
          <HouseIcon />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {!isTablet && <p>ABOUT</p>}
          <PersonIcon />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/portfolio"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {!isTablet && <p>PORTFOLIO</p>}

          <BusinessCenterIcon />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {!isTablet && <p>CONTACT</p>}

          <EmailRoundedIcon />
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
