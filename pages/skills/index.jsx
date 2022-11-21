import Header from "@src/components/header/index";
import Menu from "@src/components/menu/index";
import Footer from "@src/components/footer/index";
import IworkWith from "@src/components/iworkwith/index";

let styles = {
  head: "bg-blue.png",
  body: "bg-[url('../../src/assets/img/bgimage/energy.jpg')] px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  footer: "bg-blue.png",
};

const Skills = () => {
  return (
    <>
      <div>
        <div className="hidden lg:flex">
          <Header />
        </div>
        <div className="flex lg:hidden">
          <Menu />
        </div>
      </div>
      <div >
        <IworkWith />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Skills;
