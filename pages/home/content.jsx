import Image from "next/image";
import Logo from "@src/assets/img/luffy.jpg";

let styles = {
  title: "uppercase underline text-3xl text-center py-10",
  template: "grid grid-cols-3",
  templateItem1: "flex flex-col bg-green-500",
  templateItem2: "flex flex-row bg-purple-500",
  button: "flex flex-row w-full justify-center py-10"
};

const Content = () => {
  return (
    <>
      <h1 className={styles.title}>Hellow Content</h1>
      <div className={styles.template}>
        {/* COL 1 */}
        <div className={styles.templateItem1}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum
            nostrum iusto eveniet laborum vitae praesentium ipsa, aliquid quas
            libero ipsum eius repellendus quaerat, est debitis mollitia fugiat,
            provident ullam.
          </p>
          <div className={styles.button}>
            <button>envoyer</button>
          </div>
        </div>
        {/* COL 2 */}
        <div className={styles.templateItem1}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            molestiae eaque ut dolor, neque amet quia non voluptatibus! Magnam
            sunt quidem molestiae doloremque possimus commodi laborum, autem
            quasi fugiat in.
          </p>
          <Image src={Logo} alt="logo" />
          <div className={styles.button}>
            <button>envoyer</button>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            commodi culpa possimus dicta odio a facere, consequuntur ad! Aperiam
            sequi itaque fuga praesentium at dolorum illum blanditiis maxime
            ullam corporis.
          </p>
          <img
            src="https://staticc.sportskeeda.com/editor/2022/01/4619c-16428809335980-1920.jpg"
            alt=""
          />
        </div>
        {/* COL 3 */}
        <div className={styles.templateItem2}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            vitae. Temporibus ipsa quasi voluptatibus ullam, repudiandae magni,
            quisquam itaque atque nulla quaerat unde fugiat iusto consectetur
            dolore, illo consequuntur aliquid.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
