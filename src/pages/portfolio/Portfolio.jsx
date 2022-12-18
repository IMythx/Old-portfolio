import { Fragment } from "react";
import Overlay from "../../components/overlay/overlay";
import Header from "../../components/global/Header";
import classes from "./portfolio.module.css";
import BagsPic from "../../assets/shop.jpg";
import CompanyPic from "../../assets/CompanyX.jpg";
import LolPic from "../../assets/lol.jpg";
import DashboardPic from "../../assets/dashboard.jpg";
import MealsPic from "../../assets/meals.jpg";
import PortfolioPic from "../../assets/Portfolio.jpg";
import AuthxPic from "../../assets/authx.jpg";
import WatchesPic from "../../assets/Watches.jpg";
import PortfolioItem from "../../components/portfolio/PortfolioItem";
const Portfolio = () => {
  return (
    <Fragment>
      <Overlay />
      <section className={classes.portfolio}>
        <Header title={"MY"} subTitle={"PORTFOLIO"} />
        <ul>
          <PortfolioItem
            name={"React-Watches"}
            img={WatchesPic}
            sourceCode={"https://github.com/IMythx/React-Ecommerce"}
            title={"REACT"}
            language={"REACT JS"}
            project={"Website"}
            url={"https://react-ec-shop.web.app/"}
          />
          <PortfolioItem
            name={"Company-X"}
            img={CompanyPic}
            sourceCode={"https://github.com/IMythx/COMPANY-X"}
            title={"JAVASCRIPT"}
            language={"Javascript"}
            project={"Website"}
            url={"https://imythx.github.io/COMPANY-X/"}
          />
          <PortfolioItem
            name={"DashBoard"}
            img={DashboardPic}
            sourceCode={"https://github.com/IMythx/ADMIN-DASHBOARD"}
            title={"REACT"}
            language={"Reacr js"}
            project={"Website"}
            url={"https://admin-dashboard-1a076.web.app/"}
          />
          <PortfolioItem
            name={"LolStats"}
            img={LolPic}
            sourceCode={"https://github.com/IMythx/LoLstats"}
            title={"JAVASCRIPT"}
            language={"Javascript"}
            project={"Website"}
            url={"https://imythx.github.io/LoLstats/"}
          />
          <PortfolioItem
            name={"BagsShop"}
            img={BagsPic}
            sourceCode={"https://github.com/IMythx/Bags-Shop"}
            title={"E-COMMERCE JAVASCRIPT"}
            language={"Javascript"}
            project={"Website"}
            url={"https://imythx.github.io/Bags-Shop/"}
          />
          <PortfolioItem
            name={"Meals"}
            img={MealsPic}
            sourceCode={"https://github.com/IMythx/Food-Order-App"}
            title={"REACT"}
            language={"React js"}
            project={"Website"}
            url={"https://imythx.github.io/Food-Order-App/"}
          />
          <PortfolioItem
            name={"Portfolio"}
            img={PortfolioPic}
            sourceCode={"https://github.com/IMythx/My-Portfolio"}
            title={"REACT"}
            language={"React js"}
            project={"Website"}
            url={"https://portfolio-aef3b.web.app/"}
          />
          <PortfolioItem
            name={"AuthxApp"}
            img={AuthxPic}
            sourceCode={"https://github.com/IMythx/Authentication-App"}
            title={"REACT"}
            language={"React js"}
            project={"Website"}
            url={"https://authentication-app-e05a9.web.app/"}
          />
        </ul>
      </section>
    </Fragment>
  );
};

export default Portfolio;
