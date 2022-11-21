import Image from "next/image";
import profil from "@src/assets/img/profilIMG/profil.png";
import ViewBtn from "@src/components/viewbtn/index";
// import ParticlesTest from "@src/components/particles.animate/index";


let styles = {
  section: "flex flex-col lg:grid lg:grid-cols-2 min-h-screen bg-black",
  div1: "flex justify-center mt-20 relative overflow-hidden bg-no-repeat bg-cover",
  Image:
  "rounded-3xl border-[#14ffec] max-w-xs rounded-full hover:scale-110 transition duration-300 ease-in-out",
  div2: "pt-40  opacity-90",
  div2h2: "text-[orange] text-lg lg:text-3xl",
  div2span: "text-[violet] text-3xl font-bold text-[] pl-1 lg:text-5xl",
  div3: " pt-6 mr-4 text-2xl text-[#1FC3FF] lg:text-7xl",
  div4: "text-md mr-10 fontNunito text-white pt-4 leading-loose lg:text-2xl",
  div5: "mt-8",
}; 

const Introduction = () => {
  return (
    <>
      <section className={styles.section}>
        {/* lg: left column */}
        <div>
          <div className={styles.div1}>
            <Image
              src={profil}
              alt="profil"
              title="Safwan"
              height={500}
              width={450}
              className={styles.Image}
            />
          </div>
        </div>
        {/* lg: right column */}
        <div>
          <div className={styles.div2}>
          <h2 className={styles.div2h2}>
          Bonjour! Je suis
          <span className={styles.div2span}>Safwan Abubakar</span>
          </h2>
          </div>
          <div className={styles.div3}>
          <h1>Développeur Web Full-stack</h1>
          </div>
          <div className={styles.div4}>
          <p>
          Je suis actuellement en formation au sein de l&apos;Access Code
              School, en tant que futur développeur web et web mobile. Je suis à
              la recherche d&apos;opportunités pour mon stage qui démarrera le 9
              janvier jusqu&apos;à 3 mars 2023.
              </p>
              </div>
              <div className={styles.div5}>
              <ViewBtn />
              </div>
            </div>
      </section>
    </>
  );
};

export default Introduction;
