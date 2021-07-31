import { Link } from "gatsby";
import * as React from "react";
import LogoMark from "../other/LogoMark";
import Button from "../other/Button";

export interface NavbarProps {}

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <div>
            <LogoMark />
            <h4>Kanakoot</h4>
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/404">About</Link>
          </li>
          <li>Contact</li>
          <li>Contribute</li>
          <li>
            <Link to="/calculator" activeClassName="disabled">
              <Button type="primary">Calculator</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
