import Image from "next/image";
import blackJacket from "../public/img/Main-product-list-1.jpg.png";
import leatherJacket from "../public/img/Main-product-list-2.jpg.png";
import blackOutfit from "../public/img/Main-product-list-3.jpg.png";
import tShirt from "../public/img/Main-product-list-4.jpg.png";
import blackVest from "../public/img/product-new-img-1.jpg.png";
import ukJacket from "../public/img/Main-product-list-2.jpg (1).png";
import beigeShirt from "../public/img/Main-product-list-7.jpg.png";
import blackHat from "../public/img/Main-product-list-8.jpg.png";
import bookmark from "../public/icons/Frame (1).png";
import view from "../public/icons/quick-view.svg.png";
import cart from "../public/icons/cart-button.svg.png";
import cartStyle from "../styles/Cart.module.css";

export default function Cart() {
  return (
    <section>
      <div className={cartStyle.cartText}>
        <div>
          <ul className={cartStyle.cartList}>
            <li>
              <b>ALL PRODUCTS</b>
            </li>
            <li>
              <b>LIFESTYLE</b>
            </li>
            <li>
              <b>BRAND</b>
            </li>
            <li className={cartStyle.grey}>
              <b>OUTWEAR</b>
            </li>
          </ul>
        </div>
        <div>
          <select>
            <option>FILTER</option>
          </select>
        </div>
      </div>
      <div className={cartStyle.boxes}>
        <div className={cartStyle.box}>
          <div className={cartStyle.icons}>
            <button className={cartStyle.btn}>NEW</button>
            <div>
              <Image src={bookmark} width={20} height={10} />
              <Image src={view} width={25} height={10} />
            </div>
          </div>
          <Image
            src={blackJacket}
            width={339}
            height={339}
            alt="black-jacket"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>BLACK JACKET</p>
              <p>$950.00</p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.bookmark}>
            <Image src={bookmark} width={20} height={10} />
            <Image src={view} width={25} height={10} />
          </div>

          <Image
            src={leatherJacket}
            width={339}
            height={339}
            alt="leather-jacket"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>BLACK JACKET</p>
              <p>$300.00</p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.icons}>
            <button className={cartStyle.btn}>SALE</button>
            <div>
              <Image src={bookmark} width={20} height={10} />
              <Image src={view} width={25} height={10} />
            </div>
          </div>

          <Image
            src={blackOutfit}
            width={339}
            height={339}
            alt="black-outfit"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>BLACK JACKET</p>
              <p>
                $220.00 <span>$180.00</span>{" "}
              </p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.bookmark}>
            <Image src={bookmark} width={20} height={10} />
            <Image src={view} width={25} height={10} />
          </div>
          <Image
            src={tShirt}
            width={350}
            height={350}
            alt="t-jacket"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>T-SHIRT</p>
              <p>$120.00</p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.bookmark}>
            <Image src={bookmark} width={20} height={10} />
            <Image src={view} width={25} height={10} />
          </div>
          <Image
            src={blackVest}
            width={350}
            height={350}
            alt="black-vest"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>BLACK VEST</p>
              <p>$85.00</p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.bookmark}>
            <Image src={bookmark} width={20} height={10} />
            <Image src={view} width={25} height={10} />
          </div>
          <Image
            src={ukJacket}
            width={350}
            height={350}
            alt="black-vest"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>UK BOOTS</p>
              <p>
                <b>LEATHER</b> JACKET
              </p>
              <p>$300.00</p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.icons}>
            <button className={cartStyle.btn}>
              <b>NEW</b>
            </button>
            <div>
              <Image src={bookmark} width={20} height={10} />
              <Image src={view} width={25} height={10} />
            </div>
          </div>
          <Image
            src={beigeShirt}
            width={350}
            height={350}
            alt="beige-shirt"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>BEIGE T-SHIRT</p>
              <p>$60.00</p>
            </div>
            <div>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={cartStyle.box}>
          <div className={cartStyle.bookmark}>
            <Image src={bookmark} width={20} height={10} />
            <Image src={view} width={25} height={10} />
          </div>
          <Image
            src={blackHat}
            width={350}
            height={350}
            alt="black-hat"
            className={cartStyle.img}
          />
          <div className={cartStyle.save}>
            <div>
              <p>BLACK HAT</p>
              <p>$45.00</p>
            </div>
            <div className={cartStyle}>
              <Image src={cart} width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
