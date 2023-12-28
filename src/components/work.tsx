import Image from "next/image";
import Link from "next/link";

import { projectInfo } from "@/config/contents";
import { Icons } from "@/components/icons";
import styles from "@/styles/work.module.css";

export const Work = () => {
  return (
    <section id="portfolio" className={`section ${styles.work}`}>
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Recent Works</span>

      <div className={`container grid ${styles.work__container}`}>
        {projectInfo.map((project, index) => {
          return (
            <div key={index} className={styles.work__card}>
              <Image
                src={project.image}
                alt={project.title}
                className={styles.work__img}
              />
              <h3 className={styles.work__title}>{project.title}</h3>
              {project.siteUrl ? (
                <Link
                  href={project.siteUrl}
                  target="_blank"
                  className={styles.work__button}
                >
                  Demo{" "}
                  <Icons.arrowRight
                    size={14}
                    className={styles.work__buttonIcon}
                  />
                </Link>
              ) : project.sourceUrl ? (
                <Link
                  href={project.sourceUrl}
                  target="_blank"
                  className={styles.work__button}
                >
                  Source Code{" "}
                  <Icons.arrowRight
                    size={14}
                    className={styles.work__buttonIcon}
                  />
                </Link>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};
