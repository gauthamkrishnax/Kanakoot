import * as React from "react";
import { Link } from "gatsby";
import * as style from "../styles/components/index.module.scss";
import HeroImg from "../assets/illustration.inline.svg";

// markup
const IndexPage = () => {
  return (
    <>
      <main>
        {/* <div  */}
        {/* </div> */}
        <div className={style.sectionOneContainer}>
          <div className={style.sectionOne}>
            <h1>
              Share your<br></br> expense with ease
            </h1>
            <p>
              Kanakoot calculates expense per person to balance money spent
              among groups. Get Directions to solve the who owes whom problem.
            </p>
            <div>
              <Link to="/calculator">
                <button>Calculate Expense</button>
              </Link>
              <a
                href="https://github.com/gauthamkrishnax/Kanakoot#readme"
                rel="noopener"
                aria-label="Learn more about Kanakoot by visiting the github repo"
              >
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <HeroImg className="shapesIllu" />
    </>
  );
};

export default IndexPage;
