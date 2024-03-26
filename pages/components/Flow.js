import Image from "next/image";
import flow from "../public/img/div.elementor-background-overlay.png";
import arrowLeft from "../public/icons/Frame (3).png";
import logo from "../public/icons/Video-clients-img-5.png.png";
import flowStyle from "../styles/Flow.module.css";

export default function Flow() {
  return (
    <section className={flowStyle.flow}>
      <div className={flowStyle.main}>
        <div>
          <p>
            Accusantium dolemque laudantium, totam rem aperiam. seed ut
            perspiciatis unde omnis iste natuserror sit voluptaem.
          </p>
          <div className={flowStyle.center}>x</div>
          <div className={flowStyle.list}>
            <p>BOUTIQUE</p>
            <Image src={logo} width={100} height={30} />
            <p>MANGENTLE</p>
            <p>FLOWSTUDIO</p>
            <p>
              <b>OX</b>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={flow}
          width={500}
          height={500}
          alt="flow"
          className={flowStyle.img}
        />
        <div className={flowStyle.text}>
          <h1>ONYX x THE FLOW</h1>
          <a href="#">READ MORE</a>
        </div>
      </div>
    </section>
  );
}
