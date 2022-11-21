import Link from "next/link";
import { ParticleTest } from "@src/components/particles.animate";

let styles = {
  main: "h-screen w-full flex flex-col justify-center items-center ",
  mainh1: "text-9xl font-extrabold text-white tracking-widest",
  maindiv: "bg-[#6E0018] px-2 text-sm rounded rotate-12 absolute",
  mainSpan1: "mt-5",
  mainBtn:
    "relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",
  mainSpan2:
    "absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0",
  mainSpan3: "relative block px-8 py-3 bg-[#1A2238] border border-current",
};

const Error404 = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainh1}>404</h1>
      <div className={styles.maindiv}>Page Not Found</div>
      <span className={styles.mainSpan1}>
        <button className={styles.mainBtn}>
          <span className={styles.mainSpan2}></span>
          <span className={styles.mainSpan3}>
            <Link href="/">Go Home</Link>
          </span>
        </button>
      </span>
      <ParticleTest />
    </main>
    
  );
};

export default Error404;
