import classes from "./cursor.module.css";
import { useEffect, useState } from "react";
const Cursor = () => {
  const [position, setPosition] = useState({
    top: "0",
    left: "0",
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosition(
        (prev) =>
          (prev = {
            top: e.pageY,
            left: e.pageX,
          })
      );
    });
    window.addEventListener("wheel", (e) => {
      setPosition(
        (prev) =>
          (prev = {
            top: e.pageY,
            left: e.pageX,
          })
      );
    });
  }, []);

  return (
    <div className={classes.cursor}>
      <div
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      ></div>
      <div
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      ></div>
    </div>
  );
};

export default Cursor;
