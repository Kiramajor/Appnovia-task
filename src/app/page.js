import Image from "next/image";
import Header from "../components/Header";
import Text from "../components/Text";
import Cart from "../components/Cart";
import Category from "../components/Category";
import Flow from "../components/Flow";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Artists from "../components/Artists";
import Portfolio from "../components/Portfolio";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Text />
      <Cart />
      <Category />
      <Flow />
      <Blog />
      <Newsletter />
      <Artists />
      <Portfolio />
      <Shop />
      <Contact />
      <Footer />
    </>
  );
}
