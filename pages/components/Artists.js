import Image from "next/image";
import maria from "../../public/img/main-home-image-4-1.jpg.png";
import sophia from "../../public/img/main-home-image-3-1.jpg.png";
import arStyle from "../../styles/Artists.module.css";

export default function Artists() {
  return (
    <section className={arStyle.boxes}>
      <div>
        <Image src={maria} width="100%" height={500} alt="maria" />
      </div>
      <div>
        <Image src={sophia} width="100%" height={500} alt="sophia" />
      </div>
      <div className={arStyle.text}>
        <h1>Meet The Artists Behind The Corsen Maria & Sophia</h1>
        <p>
          Lorem ipsum dolor sit amet, consecteur aipiscing elit, sed do eiusmod
          tempor
        </p>
        <button className={arStyle.btn}>SHOP COLLECTION</button>
      </div>
    </section>
  );
}
