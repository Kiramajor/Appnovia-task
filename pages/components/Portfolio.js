import Image from "next/image";
import hand from "../public/img/instagram-img-1.jpg.png";
import mount from "../public/img/instagram-img-2.jpg.png";
import three from "../public/img/instagram-img-3.jpg.png";
import lady from "../public/img/instagram-img-4.jpg.png";
import couple from "../public/img/instagram-img-5.jpg.png";
import guy from "../public/img/instagram-img-6.jpg.png";
import beach from "../public/img/instagram-img-7.jpg.png";
import portStyle from "../styles/Portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <div className={portStyle.social}>
        <h3>Instagram</h3>
        <p>Follow us on @qodeninteractive</p>
      </div>
      <div className={portStyle.boxes}>
        <div>
          <Image src={hand} width={70} alt="hand" />
        </div>
        <div>
          <Image src={mount} width={70} alt="mount" />
        </div>
        <div>
          <Image src={three} width={300} height={300} alt="three" />
        </div>
        <div>
          <Image src={lady} width={300} height={300} alt="lady" />
        </div>
        <div>
          <Image src={couple} width={300} height={300} alt="couple" />
        </div>
        <div>
          <Image src={guy} width={300} height={300} alt="guy" />
        </div>
        <div>
          <Image src={beach} width={300} height={300} alt="beach" />
        </div>
      </div>
    </>
  );
}
