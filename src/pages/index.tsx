import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";
import * as style from "../styles/components/index.module.scss";
import heroImg from "../assets/hero.svg";

// markup
const IndexPage = () => {
  return (
    <main>
      {/* <div  */}
      {/* </div> */}
      <div className={style.sectionOneContainer}>
        <div className={style.sectionOne}>
          <h1>
            Share your<br></br> expense with ease
          </h1>
          <h5>
            Kanakoot calculates expense per person to balance money spent among
            groups. Get Directions to solve the who owes whom problem.
          </h5>
          <div>
            <Link to="/calculator">
              <button>Calculate Expense</button>
            </Link>
            <Link to="/about">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
        <img
          src={heroImg}
          alt="section illustration"
          className={style.illu}
        ></img>
      </div>
    </main>
  );
};

export default IndexPage;
