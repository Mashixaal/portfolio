import Header from "@src/components/header/index";
import Menu from "@src/components/menu/index";
import Footer from "@src/components/footer/index";
import ViewProjects from "@src/components/viewprojects/index";

let styles = {
  head: "bg-[#6E0018]",
  body: "bg-[brown] px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  footer: "bg-[#6E0018]",
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
    </>
  );
};

export default Projects;
