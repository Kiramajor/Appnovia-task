import footStyle from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={footStyle.footer}>
        <div className={footStyle.copyright}>
          <p>&copy; 2023</p>
          <div></div>
          <p>ALL RIGHTS RESERVED</p>
        </div>
        <div className={footStyle.lang}>
          <p>ENG</p>
          <div></div>
          <p>FRA</p>
          <div></div>
          <p>SKR</p>
        </div>
      </footer>
    </>
  );
}
