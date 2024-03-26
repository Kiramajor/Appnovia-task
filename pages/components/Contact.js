import Image from "next/image";
import logo from "../public/img/corsen-main-logo-x2.png.png";
import arrow from "../public/icons/svg.qodef-svg--button-arrow.png";
import conStyle from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={conStyle.main}>
        <div className={conStyle.col}>
          <Image src={logo} alt="logo" width={100} height={100} />
          <p>
            Lorem ipsum dolor sit amet, consecteur aipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className={conStyle.col}>
          <h3>SUPPORT</h3>
          <ul>
            <li>Help & Contact Us</li>
            <li>Return & Referees</li>
            <li>Online Stores</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={conStyle.col}>
          <h3>COMPANY</h3>
          <div className={conStyle.long}></div>
          <div className={conStyle.short}></div>
          <div className={conStyle.long}></div>
          <div className={conStyle.short}></div>
        </div>
        <div className={conStyle.col}>
          <h3>LOCATIONS</h3>
          <ul>
            <li>Vienna, HarmaLguane Austria</li>
            <li>Berlin Baschalee Germany</li>
            <li>The Plazza London, UK</li>
          </ul>
        </div>
        <div className={conStyle.col}>
          <h3>
            <b>Get The Latest News</b>
          </h3>
          <div>
            <input type="email" name="email" placeholder="E-mail address" />
            <Image src={arrow} width={50} height={10} />
          </div>
        </div>
      </div>
    </>
  );
}
