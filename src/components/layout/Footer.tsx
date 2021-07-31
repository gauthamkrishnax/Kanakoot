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
      <Link to="/">
        <div className="logo-mark">
          <img src={LogoMark} alt="kanakoot-logo" /> <h4>Kanakoot</h4>
          <hr />
        </div>
      </Link>
      <div className={style.linkContainer}>
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
              <LinkedinLogo />
            </li>
            <li>
              <InstagramLogo />
            </li>
            <li>
              <BehanceLogo />
            </li>
            <li>
              <TwitterLogo />
            </li>
            <li>
              <MailLogo />
            </li>
          </ul>
        </nav>
        <div className={style.footerButton}>
          <Button>Change to Dark Mode</Button>
          <p>Copyright © 2021 Gautham Krishna S</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
