import HomePage from "@pages/home/index";
import Head from "next/head";
import Header from "@src/components/header/index";
import Menu from "@src/components/menu/index";
import Introduction from "@src/components/introduction/index";
import Footer from "@src/components/footer/index";

let styles = {
  head: "",
  body: "",
  footer: "",
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Safwan Abubakar</title>
      </Head>

      <div className={styles.head}>
        <div className="hidden lg:flex">
          <Header />
        </div>
        <div className="flex lg:hidden">
          <Menu />
        </div>
      </div>
      <div className={styles.body}>
        <Introduction />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
