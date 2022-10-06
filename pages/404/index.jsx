import Link from "next/link";

let styles = {
  error: "flex w-screen h-screen items-center justify-center",
};

const error404 = () => {
  return (
    <div className={styles.error}>
      <h1>ERROR 404</h1>
      <Link href="/">
        <button>Retour à la page d'accuil</button>
      </Link>
    </div>
  );
};

export default error404;
