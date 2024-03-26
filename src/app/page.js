import Image from "next/image";
import Header from "../../pages/components/Header";
import Text from "../../pages/components/Text";
import Cart from "../../pages/components/Cart";
import Category from "../../pages/components/Category";
import Flow from "../../pages/components/Flow";
import Blog from "../../pages/components/Blog";
import Newsletter from "../../pages/components/Newsletter";
import Artists from "../../pages/components/Artists";
import Portfolio from "../../pages/components/Portfolio";
import Shop from "../../pages/components/Shop";
import Contact from "../../pages/components/Contact";
import Footer from "../../pages/components/Footer";

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
