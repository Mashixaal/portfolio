import Header from "@src/components/header/index";
import Menu from "@src/components/menu/index";
import Footer from "@src/components/footer/index";
import ViewProjects from "@src/components/viewprojects/index";
import { ParticleTest } from "@src/components/particles.animate";

let styles = {
  head: "bg-boxing",
  body: " px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  footer: "bg-[boxing]",
};

const Projects = () => {
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
        <ViewProjects />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
        <ParticleTest />
    </>
  );
};

export default Projects;
