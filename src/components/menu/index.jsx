import Link from "next/link";
import React, { useState } from "react";
import Name from "@src/components/name/index";
import MenuIcon from "@src/components/menuicon/index";

let styles = {
  header: "flex flex-col text-black",
  nav: "flex flex-col fontNunito text-xl opacity-90 font-medium pt-8 pb-4",
  Accueil: "text-white block px-3 rounded dark:text-white",
  Projets:
    "text-white block py-2 pr-4 pl-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
  Skills:
    "text-white block pr-4 pl-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
  Contact:
    "text-white block py-2 pr-4 pl-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
};

const Menu = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <header className={styles.header}>
      <div>
        <Name />
        <div onClick={toggle}>
          <MenuIcon />
        </div>
      </div>
      {show === true ? (
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
      ) : (
        ""
      )}
    </header>
  );
};

export default Menu;
