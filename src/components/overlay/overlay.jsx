import { Fragment, useEffect, useState } from "react";
import classes from "./overlay.module.css";
const Overlay = () => {
  const [removed, setIsRemoved] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsRemoved(true), 510);
  }, []);
  return (
    <Fragment>{!removed && <div className={classes.overlay}></div>}</Fragment>
  );
};

export default Overlay;
