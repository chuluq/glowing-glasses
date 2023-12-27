"use client";

import { useState } from "react";

import { Icons } from "@/components/icons";
import styles from "@/styles/qualification.module.css";
import { educationInfo, workInfo } from "@/config/contents";

export const Qualification = () => {
  const [tabSection, setTabSection] = useState<1 | 2>(1);

  return (
    <section id="qualification" className={`section ${styles.qualification}`}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className={`container ${styles.qualification__container}`}>
        <div className={styles.qualification__tabs}>
          <div
            onClick={() => setTabSection(1)}
            className={
              tabSection === 1
                ? `button--flex ${styles.qualification__button} ${styles.qualification__active}`
                : `button--flex ${styles.qualification__button}`
            }
          >
            <Icons.education size={28} className={styles.qualification__icon} />{" "}
            Education
          </div>
          <div
            onClick={() => setTabSection(2)}
            className={
              tabSection === 2
                ? `button--flex ${styles.qualification__button} ${styles.qualification__active}`
                : `button--flex ${styles.qualification__button}`
            }
          >
            <Icons.service size={28} className={styles.qualification__icon} />{" "}
            Experience
          </div>
        </div>

        <div className={styles.qualification__sections}>
          <div
            className={
              tabSection === 2
                ? `${styles.qualification__content} ${styles.qualification__contentActive}`
                : styles.qualification__content
            }
          >
            {workInfo.map((work, index) => {
              return (
                <div key={index} className={styles.qualification__data}>
                  {index % 2 !== 0 ? (
                    <>
                      <div />
                      <div>
                        <span className={styles.qualification__rounder}></span>
                        <span className={styles.qualification__line}></span>
                      </div>
                    </>
                  ) : null}
                  <div>
                    <h3 className={styles.qualification__title}>
                      {work.title}
                    </h3>
                    <span className={styles.qualification__subtitle}>
                      {work.subtitle}
                    </span>
                    <div className={styles.qualification__calendar}>
                      <Icons.calendar size={14} /> {work.date}
                    </div>
                  </div>
                  {index % 2 === 0 ? (
                    <div>
                      <span className={styles.qualification__rounder}></span>
                      <span className={styles.qualification__line}></span>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div
            className={
              tabSection === 1
                ? `${styles.qualification__content} ${styles.qualification__contentActive}`
                : styles.qualification__content
            }
          >
            {educationInfo.map((education, index) => {
              return (
                <div key={index} className={styles.qualification__data}>
                  {index % 2 !== 0 ? (
                    <>
                      <div />
                      <div>
                        <span className={styles.qualification__rounder}></span>
                        <span className={styles.qualification__line}></span>
                      </div>
                    </>
                  ) : null}
                  <div>
                    <h3 className={styles.qualification__title}>
                      {education.title}
                    </h3>
                    <span className={styles.qualification__subtitle}>
                      {education.subtitle}
                    </span>
                    <div className={styles.qualification__calendar}>
                      <Icons.calendar size={14} /> {education.date}
                    </div>
                  </div>
                  {index % 2 === 0 ? (
                    <div>
                      <span className={styles.qualification__rounder}></span>
                      <span className={styles.qualification__line}></span>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
