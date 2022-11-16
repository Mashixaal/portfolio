import Image from "next/image";
import Link from "next/link";
import CVonline from "@src/assets/img/viewprojectsIMG/cvonline.png";
import Landingpage from "@src/assets/img/viewprojectsIMG/landingpage.png";
import Mazebank from "@src/assets/img/viewprojectsIMG/mazebank.png";
import AgenceEclair from "@src/assets/img/viewprojectsIMG/agenceeclair.png";
import Portfolio from "@src/assets/img/viewprojectsIMG/portfolio.png";
import MetaCode from "@src/assets/img/viewprojectsIMG/metacode.png";
import tsParticles from "@src/components/particles.animate";

let styles = {};

const ViewProjects = () => {
  return (
    <section>
      {/* lg: BLOG DU HAUT */}
      <div className="lg:flex lg:justify-around">
        {/* BLOG 1 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={AgenceEclair} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Agence Eclair</h5>
              <p class="text-gray-700 text-base mb-4">
              Ce projet est une travail d&apos;équipe. Il est préparée pour
                apprendre comment construire et gérer une agence web, comment
                déléguer des tâches sur github et comment faire les git merge
                etc.
              </p>
              <Link
                href="https://agence-eclair.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* BLOG 2 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Landingpage} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Landing Page
              </h5>
              <p class="text-gray-700 text-base mb-4">
                Ce projet a pour but d&apos;apprendre à coder la page
                d&apos;accueil d&apos;un site Web de manière responsive.
              </p>
              <Link
                href="https://int-landing-page.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* BLOG 3 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Mazebank} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Maze Bank</h5>
              <p class="text-gray-700 text-base mb-4">
              Il s&apos;agit d&apos;un système de compte bancaire codé pour
                créer des transactions de dépôt et de retrait. Il est codé avec
                html, css et javascript.
              </p>
              <Link
                href="https://abubakars-mazebank.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <tsParticles />
      {/* lg: BLOG DU BAS */}
      <div className="lg:flex lg:justify-around">
        {/* BLOG 3 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Portfolio} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Portfolio</h5>
              <p class="text-gray-700 text-base mb-4">
              Ce projet est un projet Next.js. React.js y est également
                utilisé. Il s&apos;agit d&apos;un travail individuel visant à
                apprendre à utiliser un framework.
              </p>
              <Link
                href="https://abubakars-portfolio.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* BLOG 4 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={MetaCode} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Meta Code</h5>
              <p class="text-gray-700 text-base mb-4">
              Ce projet est la deuxième projet de travail d&apos;équipe. on a codé en WordPress 
              </p>
              <Link
                href="https://metacode-mekg.fr/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* BLOG 6 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={CVonline} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">CV</h5>
              <p class="text-gray-700 text-base mb-4">
                Ce projet est codé en vanilla. Il ne contient que du html et du
                css.
              </p>
              <Link
                href="https://cv-emir.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProjects;