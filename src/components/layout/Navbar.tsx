import { Link } from "gatsby";
import * as React from "react";
import LogoMark from "../../assets/LogoMark.svg";
import Button from "../other/Button";
import DollarLogo from "../../assets/dollar.inline.svg";

import * as style from "../../styles/components/Navbar.module.scss";

export interface NavbarProps {}

const Navbar = () => {
  return (
    <header className={style.container}>
      <Link to="/">
        <div className="logo-mark">
          <img src={LogoMark} alt="logo-alt" />
          <h4>Kanakoot</h4>
        </div>
      </Link>
      <nav className={style.linksContainer}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a
              href="https://github.com/gauthamkrishnax/Kanakoot/issues"
              rel="noreferer"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.buymeacoffee.com/gauthamkrishna"
              rel="noreferer"
            >
              {" "}
              Contribute
            </a>
          </li>
          <li>
            <Link to="/calculator" activeClassName="disabled">
              <Button>
                <span>Calculator</span>
                <DollarLogo />
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
