import classes from "./progressCircle.module.css";

const ProgressCircle = ({ progress = "0.75" }) => {
  const angle = progress * 360;
  return (
    <div
      style={{
        background: `radial-gradient(#111 56%, transparent 57.5%),
            conic-gradient(transparent 0deg ${angle}deg, #252525 ${angle}deg 360deg),
            #ffb400`,
        borderRadius: "50%",
        width: `120px`,
        height: `120px`,
      }}
      className={classes.circle}
    >
      {progress * 100}%
    </div>
  );
};

export default ProgressCircle;
