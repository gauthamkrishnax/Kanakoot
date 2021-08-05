import * as React from "react";
import Button from "../other/Button";
import { Link } from "gatsby";

import LogoMark from "../../assets/LogoMark.svg";
import BehanceLogo from "../../assets/behance.inline.svg";
import InstagramLogo from "../../assets/instagram.inline.svg";
import LinkedinLogo from "../../assets/linkedin.inline.svg";
import MailLogo from "../../assets/mail.inline.svg";
import TwitterLogo from "../../assets/twitter.inline.svg";

import * as style from "../../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div>
        <Link className="logo-mark" to="/">
          <img src={LogoMark} alt="kanakoot-logo" /> <h4>Kanakoot</h4>
        </Link>
        <hr />
      </div>

      <div className={style.linkContainer}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a
                href="https://www.buymeacoffee.com/gauthamkrishna"
                rel="noreferer"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gauthamkrishnax/Kanakoot"
                rel="noreferer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gauthamkrishnax/Kanakoot/issues"
                rel="noreferer"
              >
                Issues
              </a>
            </li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gauthamkrishnas/"
                rel="noreferer"
              >
                <LinkedinLogo />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aestheticvisu4ls/">
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/gauthamkrishnax" rel="noreferer">
                <BehanceLogo />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/8thumbi" rel="noreferer">
                <TwitterLogo />
              </a>
            </li>
            <li>
              <a href="mailto:gauthamkrishnax@gmail.com">
                <MailLogo />
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.footerButton}>
          <p>Copyright © 2021 Gautham Krishna S</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
