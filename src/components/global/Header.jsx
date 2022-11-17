import classes from "./header.module.css";

const Header = ({ title, subTitle }) => {
  return (
    <h1 className={classes.header}>
      {title} <span>{subTitle}</span>
    </h1>
  );
};

export default Header;
