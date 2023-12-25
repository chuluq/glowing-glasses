import { skillInfo } from "@/config/contents";
import styles from "@/styles/skills.module.css";
import { Icons } from "./icons";

export const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical list</span>

      <div className={`container grid ${styles.skills__container}`}>
        {skillInfo.map((skill, index) => {
          const Icon = Icons[skill?.icon ?? "javascript"];
          return (
            <div key={index} className={styles.skills__content}>
              <Icon className={styles.skills__icon} />
              <span className={styles.skills__title}>{skill.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
