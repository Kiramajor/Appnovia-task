import Image from "next/image";
import arrow from "../../public/icons/svg.qodef-svg--button-arrow.png";
import newStyle from "../../styles/Newsletter.module.css";

export default function Newsletter() {
  return (
    <>
      <div className={newStyle.main}>
        <h1>Sign up to our newsletter for all the latest news & discounts.</h1>
        <div className={newStyle.fix}>
          <input type="email" name="email" placeholder="E-mail address" />
          <Image src={arrow} width={50} height={10} />
        </div>
      </div>
    </>
  );
}
