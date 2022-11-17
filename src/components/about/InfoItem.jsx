import classes from "./infoItem.module.css";

const InfoItem = ({ title, subTitle }) => {
  return (
    <div className={classes.item}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default InfoItem;
