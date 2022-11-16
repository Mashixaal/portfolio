import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

let styles = {
  section: "lg:flex lg:justify-start flex justify-center pb-4   opacity-75",
  px: "px-4",
  pr: "pr-4",
};

const Links = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.pr}>
          <a
            href="https://github.com/Mashixaal"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/abubakar-safwan"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
        <div className={styles.px}>
          <a href="tel:+33751058507">
          </a>
        </div>
      </section>
    </>
  );
};

export default Links;
