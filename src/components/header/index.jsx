import Link from "next/link";
import Name from "@src/components/name/index";

let styles = {
  header: "lg:flex lg:py-0 lg:w-full",
  name: "flex justify-center w-full py-8 lg:flex lg:justify-center lg:w-full",
  nav: "flex justify-center w-full justify-around text-white px-10 py-6 opacity-90 lg:flex lg:justify-center lg:text-2xl lg:w-full",
  Accueil: "lg:bg-transparent lg:text-white lg:p-0",
  Projets: "lg:mx-16 lg:text-white",
  Skills: "lg:text-white",
  Contact: "lg:mx-16 lg:text-white",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <Name />
      </div>
      <nav className={styles.nav}>
        <Link href="/">
          <button className={styles.Accueil}>Accueil</button>
        </Link>
        <Link href="/projects">
          <button className={styles.Projets}>Projets</button>
        </Link>
        <Link href="/skills">
          <button className={styles.Skills}>Skills</button>
        </Link>
        <Link href="/contact">
          <button className={styles.Contact}>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
