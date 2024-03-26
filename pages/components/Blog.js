import Image from "next/image";
import leatherjacket from "../../public/img/Blog-list-img-1.jpg.png";
import twin from "../../public/img/Blog-list-img-2.jpg.png";
import dude from "../../public/img/Blog-list-img-3.jpg.png";
import blogStyle from "../../styles/Blog.module.css";

export default function Blogs() {
  return (
    <>
      <div className={blogStyle.text}>
        <h1>Read Our Blog Posts</h1>
        <p>
          Lorem ipsum dolor sitammet, consecteur adipising ecteur elit, sed do
          elusmod.
        </p>
      </div>
      <div className={blogStyle.boxes}>
        <div>
          <p className={blogStyle.date}>SEPTEMBE 29, 2022</p>
          <Image src={leatherjacket} width={500} height={500} alt="jacket" />
          <div className={blogStyle.post}>
            <p>
              FASHION <span className={blogStyle.line}>1</span> INSPIRATION
            </p>
            <div className={blogStyle.hr}></div>
            <p>Top 10 Winter Essentials For 2022 You Should Try</p>
            <a href="#">READ MORE</a>
          </div>
        </div>
        <div>
          <p className={blogStyle.date}>SEPTEMBE 28, 2022</p>
          <Image src={twin} width={500} height={700} alt="jacket" />
          <div className={blogStyle.post}>
            <p>
              FASHION <span className={blogStyle.line}>1</span> INSPIRATION
            </p>
            <div className={blogStyle.hr}></div>
            <p>The Complete Communication Skills Master Class For Work</p>
            <a href="#">READ MORE</a>
          </div>
        </div>
        <div>
          <p className={blogStyle.date}>SEPTEMBE 29, 2022</p>
          <Image src={dude} width={500} height={500} alt="jacket" />
          <div className={blogStyle.post}>
            <p>
              FASHION <span className={blogStyle.line}>1</span> INSPIRATION
            </p>
            <div className={blogStyle.hr}></div>
            <p>Premium Consultant Course For You</p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
    </>
  );
}
