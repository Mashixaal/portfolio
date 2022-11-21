import Links from "@src/components/links";

let styles = {
  footer: "fontNunito text-white opacity-90 bg-boxing",
  div: "px-16 py-0 lg:grid lg:grid-cols-2",
  div1: "lg:py-4 lg:pl-72",
  div2: "pt-6 lg:pt-12",
  div3: "flex pt-2 pb-3",
  div4: "flex pt-2",
  div5: "flex pt-1",
  h6: "font-bold pr-2",
  hr: "w-64 lg:w-64",
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.div3}>
            {/* <h4>Contactez-moi:</h4> */}
          </div>
          {/* <hr className={styles.hr} /> */}
          <div className={styles.div4}>
            {/* <h6 className={styles.h6}>Tel:</h6> */}
            {/* <a href="tel:+33751058507">+33751058507</a> */}
          </div>
          <div className={styles.div5}>
            {/* <h6 className={styles.h6}>E-mail:</h6> */}
            
          </div>
        </div>
        <div className={styles.div2}>
          <Links />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
