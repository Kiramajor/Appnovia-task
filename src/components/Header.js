import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/corsen-main-logo-x2.png.png";
import search from "../../public/icons/svg (4).png";
import cart from "../../public/icons/cart-button.svg.png";
import bookmark from "../../public/icons/Frame (1).png";
import profile from "../../public/icons/Frame.png";
import bgImg from "../../public/img/rs-module.png";
import headerStyles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <main className={headerStyles.showcase}>
      <Image src={bgImg} width="100%" height="100%" />
      <header className={headerStyles.header}>
        <nav className={headerStyles.navbar}>
          <Image src={logo} alt="logo" width={200} height={10} />
          <ul className={headerStyles.navlinks}>
            <li>
              <Link href="./">HOME</Link>
            </li>
            <li>
              <Link href="./">PAGES</Link>
            </li>
            <li>
              <Link href="./Shop">SHOP</Link>
            </li>
            <li>
              <Link href="./Portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="./Blog">BLOG</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul className={headerStyles.widget}>
            <li className={headerStyles.item}>
              SEARCH
              <Image src={search} width={30} height={30} />
            </li>
            <li className={headerStyles.item}>
              CART
              <Image src={cart} width={30} height={30} />
              <span>0</span>
            </li>
            <li className={headerStyles.item}>
              <Image src={bookmark} width={30} height={30} />
              <span>0</span>
            </li>
            <li className={headerStyles.item}>
              <Image src={profile} width={30} height={30} />
              <span>0</span>
            </li>
          </ul>
        </div>
      </header>
    </main>
  );
}
