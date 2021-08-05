import * as React from "react";
import { Link } from "gatsby";
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
          <p>
            Kanakoot calculates expense per person to balance money spent among
            groups. Get Directions to solve the who owes whom problem.
          </p>
          <div>
            <Link to="/calculator">
              <button>Calculate Expense</button>
            </Link>
            <a
              href="https://github.com/gauthamkrishnax/Kanakoot"
              rel="noopener"
              aria-label="Learn more about Kanakoot by visiting the github repo"
            >
              <button>Learn More</button>
            </a>
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
