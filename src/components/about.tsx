import Image from "next/image";
import Link from "next/link";

import { aboutInfo } from "@/config/contents";
import { Icons } from "@/components/icons";
import styles from "@/styles/about.module.css";

export const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className={`container grid ${styles.about__container}`}>
        <Image
          src="/images/profile.jpg"
          alt="about-img"
          width={350}
          height={350}
          className={styles.about__img}
        />

        <div className={styles.about__data}>
          <Info />

          <p className={styles.about__description}>
            Hey there! I&rsquo;m Chuluq, a web developer who loves bringing
            digital ideas to life. I&rsquo;ve got skills in [Programming
            Languages, e.g., JavaScript, TypeScript] and [Frameworks, e.g.,
            React, Next.js]. Whether it&rsquo;s revamping a website or tackling
            a new project, I&rsquo;m all about clean code and user-friendly
            design. I believe every project is a chance to make something
            awesome. Let&rsquo;s chat about your next project and how we can
            make it stand out online!
          </p>

          <Link
            download="chuluq-cv"
            href="/cv_chuluq.pdf"
            className="button button--flex"
          >
            Download CV <Icons.skill size={24} className="button__icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Info = () => {
  return (
    <div className={`grid ${styles.about__info}`}>
      {aboutInfo.map((about, index) => {
        const Icon = Icons[about?.icon ?? "experience"];
        return (
          <div key={index} className={styles.about__box}>
            <Icon size={24} className={styles.about__icon} />
            <h3 className={styles.about__title}>{about.title}</h3>
            <span className={styles.about__subtitle}>{about.subtitle}</span>
          </div>
        );
      })}
    </div>
  );
};
