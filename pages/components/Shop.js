import Image from "next/image";
import fast from "../public/icons/svg (3).png";
import free from "../public/icons/svg (2).png";
import secure from "../public/icons/svg (1).png";
import order from "../public/icons/Frame (4).png";
import shopStyle from "../styles/Shop.module.css";

export default function Shop() {
  return (
    <>
      <div className={shopStyle.boxes}>
        <div className={shopStyle.box}>
          <Image src={fast} width={50} height={20} />
          <p>FAST DELIVERY</p>
        </div>
        <div className={shopStyle.box}>
          <Image src={free} width={50} height={20} />
          <p>FREE RETURNS</p>
        </div>
        <div className={shopStyle.box}>
          <Image src={secure} width={50} height={20} />
          <p>SECURE CHECKOUT</p>
        </div>
        <div className={shopStyle.box}>
          <Image src={order} width={50} height={20} />
          <p>ORDER TRACKING</p>
        </div>
      </div>
    </>
  );
}
