import styles from "@/styles/contact.module.css";
import { Icons } from "./icons";
import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className={`section contact`}>
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className={`container grid ${styles.contact__container}`}>
        <div className={styles.contact__info}>
          <div className={styles.contact__card}>
            <Icons.mail size={32} className={styles.contact__cardIcon} />
            <h3 className={styles.contact__cardTitle}>Email</h3>
            <span className={styles.contact__cardData}>
              choirulchuluq10@gmail.com
            </span>
            <Link
              href="mailto:choirulchuluq10@gmail.com"
              target="_blank"
              className={styles.contact__button}
            >
              Write me
              <Icons.arrowRight
                size={14}
                className={styles.contact__buttonIcon}
              />
            </Link>
          </div>
          <div className={styles.contact__card}>
            <Icons.whatsapp
              size={32}
              width={32}
              height={32}
              className={styles.contact__cardIcon}
            />
            <h3 className={styles.contact__cardTitle}>WhatsApp</h3>
            <span className={styles.contact__cardData}>+62-878-9471-0683</span>
            <Link
              href="https://wa.me/6287894710683"
              target="_blank"
              className={styles.contact__button}
            >
              Write me
              <Icons.arrowRight
                size={14}
                className={styles.contact__buttonIcon}
              />
            </Link>
          </div>
          <div className={styles.contact__card}>
            <Icons.instagram size={32} className={styles.contact__cardIcon} />
            <h3 className={styles.contact__cardTitle}>Instagram</h3>
            <span className={styles.contact__cardData}>Choirul Chuluq</span>
            <Link
              href="https://www.instagram.com/choirulchuluq/"
              target="_blank"
              className={styles.contact__button}
            >
              Write me
              <Icons.arrowRight
                size={14}
                className={styles.contact__buttonIcon}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
