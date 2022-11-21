import Header from "@src/components/header/index";
import Menu from "@src/components/menu/index";
import Newsletter from "@src/components/newsletter";
import Links from "@src/components/links/index";
import { ParticleTest } from "@src/components/particles.animate";


let styles = {
  head: "bg-boxin",
  body: " px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  
  footer: "bg-boxing",
};

const Contact = () => {
  return (
    <>
      <div className={styles.head}>
        <div className="hidden lg:flex">
          <Header />
        </div>
        <div className="flex lg:hidden">
          <Menu />
        </div>
      </div>
      <div className={styles.body}>
        <Newsletter />
      </div>
      <div className={styles.footer}>
        <Links />
      </div>
      <ParticleTest />
    </>
  );
};

export default Contact;
