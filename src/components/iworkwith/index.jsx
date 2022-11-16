import Image from "next/image";
import Html from "@src/assets/img/iworkwithIMG/Html.png";
import Css from "@src/assets/img/iworkwithIMG/Css.png";
import Webpack from "@src/assets/img/iworkwithIMG/Webpack.png";
import Bootstrap from "@src/assets/img/iworkwithIMG/Bootstrap.png";
import Tailwind from "@src/assets/img/iworkwithIMG/Tailwind.png";
import Wordpress from "@src/assets/img/iworkwithIMG/Wordpress.png";
import Reactjs from "@src/assets/img/iworkwithIMG/Reactjs.png";
import Nextjs from "@src/assets/img/iworkwithIMG/Nextjs.png";
import Php from "@src/assets/img/iworkwithIMG/Php.png";
import Sql from "@src/assets/img/iworkwithIMG/Sql.png";
import Nodejs from "@src/assets/img/iworkwithIMG/Nodejs.png";
import Mongodb from "@src/assets/img/iworkwithIMG/Mongodb.png";
import PhpmyAdmin from "@src/assets/img/iworkwithIMG/PhpmyAdmin.png";
import Symfony from "@src/assets/img/iworkwithIMG/Symfony.png";
import Git from "@src/assets/img/iworkwithIMG/Git.png";
import Javascript from "@src/assets/img/iworkwithIMG/Javascript.png";

let styles = {
  section: "lg:ml-24 lg:-mt-20",
  div1: "lg:grid lg:grid-cols-2",
  leftColumn: "lg:-ml-20",
  iworkwith:
    "text-center text-white pb-20 text-4xl font-extrabold lg:text-center lg:pb-40 lg:text-6xl",
  rightColumn: "lg:ml-20",
  ol: "relative border-l border-gray-200 dark:border-gray-700",
  li: "mb-10 ml-6 lg:mb-28 lg:ml-6",
  span: "flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-gray-300 lg:w-32 lg:h-32 lg:p-6",
  h3: "uppercase mb-2 pl-2 text-lg font-semibold text-white lg:text-3xl lg:pl-40 lg:pt-6",
  time: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4",
};

const IworkWith = () => { 
  return (
    <section className={styles.section}>
      <div className={styles.iworkwith}>
        <h1>Je travaille avec...</h1>
      </div>
      <div className={styles.div1}>
        {/* lg: left column */}
        <div className={styles.leftColumn}>
          <ol class={styles.ol}>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Html} />
              </span>
              <h3 class={styles.h3}>Html</h3>
              <time class={styles.time}>Depuis avril 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Css} />
              </span>
              <h3 class={styles.h3}>Css</h3>
              <time class={styles.time}>Depuis mai 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Git} />
              </span>
              <h3 class={styles.h3}>Git</h3>
              <time class={styles.time}>Depuis juin 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Javascript} />
              </span>
              <h3 class={styles.h3}>Javascript</h3>
              <time class={styles.time}>Depuis août 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Tailwind} />
              </span>
              <h3 class={styles.h3}>Tailwind</h3>
              <time class={styles.time}>Depuis juillet 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Bootstrap} />
              </span>
              <h3 class={styles.h3}>Bootstrap</h3>
              <time class={styles.time}>Depuis juillet 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Webpack} />
              </span>
              <h3 class={styles.h3}>Webpack</h3>
              <time class={styles.time}>Depuis septembre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Wordpress} />
              </span>
              <h3 class={styles.h3}>Wordpress</h3>
              <time class={styles.time}>Depuis septembre 2022</time>
            </li>
          </ol>
        </div>
        {/* lg: right column */}
        <div className={styles.rightColumn}>
          <ol class={styles.ol}>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Nodejs} />
              </span>
              <h3 class={styles.h3}>Node js</h3>
              <time class={styles.time}>Depuis septembre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Nextjs} />
              </span>
              <h3 class={styles.h3}>Next js</h3>
              <time class={styles.time}>Depuis octobre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Reactjs} />
              </span>
              <h3 class={styles.h3}>React js</h3>
              <time class={styles.time}>Depuis octobre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Php} />
              </span>
              <h3 class={styles.h3}>Php</h3>
              <time class={styles.time}>Depuis octobre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={PhpmyAdmin} />
              </span>
              <h3 class={styles.h3}>Php My Admin</h3>
              <time class={styles.time}>Depuis octobre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Sql} />
              </span>
              <h3 class={styles.h3}>Sql</h3>
              <time class={styles.time}>Depuis octobre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Symfony} />
              </span>
              <h3 class={styles.h3}>Symfony</h3>
              <time class={styles.time}>Depuis novembre 2022</time>
            </li>
            <li class={styles.li}>
              <span class={styles.span}>
                <Image src={Mongodb} />
              </span>
              <h3 class={styles.h3}>Mongo db</h3>
              <time class={styles.time}>Depuis décembre 2022</time>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default IworkWith;
