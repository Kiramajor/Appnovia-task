import Image from "next/image";
import man from "../../public/img/main-home-category-img-4.jpg.png";
import woman from "../../public/img/main-home-category-img-5.jpg.png";
import catStyle from "../../styles/Category.module.css";

export default function Category() {
  return (
    <>
      <div className={catStyle.col}>
        <div>
          <Image
            src={man}
            width={500}
            height={500}
            alt="man"
            className={catStyle.img}
          />
          <div className={catStyle.row}>
            <h1 className={catStyle.text}>MAN</h1>
            <button className={catStyle.btn}> SHOP COLLECTION</button>
          </div>
        </div>
        <div>
          <Image
            src={woman}
            width={500}
            height={500}
            alt="woman"
            className={catStyle.img}
          />
          <div className={catStyle.row}>
            <h1 className={catStyle.text}>WOMAN</h1>
            <button className={catStyle.btn}>SHOP COLLECTION</button>
          </div>
        </div>
      </div>
    </>
  );
}
