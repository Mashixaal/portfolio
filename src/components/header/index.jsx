import Link from "next/link";
import logosafwan from "@src/assets/img/logo/logo-safwan.png";
import Image from "next/image";

let styles = {
  header: "lg:flex flex lg:py-0 lg:w-full lg:bg-boxing ",
  nav: "flex justify-center w-full justify-around text-white px-10 py-6 opacity-90 lg:flex lg:justify-center lg:text-2xl lg:w-full",
  Accueil: "lg:bg-transparent m-1 lg:text-white lg:text-bold lg:p-0",
  Projets: "lg:mx-16 m-1 lg:text-white",
  Contact: "lg:text-bold m-1 lg:text-white",
  image: "h-auto w-40 flex lg:flex lg:ml-5",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <Image
          src={logosafwan}
          alt="logo"
          title="Safwan"
          height={100}
          width={100}
        />
      </div>
      <div className={styles.name}></div>
      <nav className={styles.nav}>
        <Link href="/accueil">
          <button className={styles.Accueil}>Accueil</button>
        </Link>
        <Link href="/projects">
          <button className={styles.Projets}>Projets</button>
        </Link>
        <Link href="/contact">
          <button className={styles.Contact}>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
