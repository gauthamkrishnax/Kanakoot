import * as React from "react";
import LogoMark from "../other/LogoMark";
import Button from "../other/Button";
import { Link } from "gatsby";

import behance from "../../assets/behance.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <div>
          <LogoMark /> <h4>Kanakoot</h4>
          <hr />
        </div>
      </Link>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Calculator</li>
            <li>About</li>
            <li>Contribute</li>
            <li>Github</li>
            <li>Issues</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <ul>
            <li>
              <img src={linkedin} alt="Linkedin Logo" />
            </li>
            <li>
              <img src={instagram} alt="Instagram Logo" />
            </li>
            <li>
              <img src={behance} alt="Behance Logo" />
            </li>
            <li>
              <img src={twitter} alt="Twitter Logo" />
            </li>
            <li>
              <img src={mail} alt="Mail Logo" />
            </li>
          </ul>
        </nav>
        <div>
          <Button type="secondary">Change to Dark Mode</Button>
          <span>Copyright © 2021 Gautham Krishna S</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
