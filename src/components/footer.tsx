import { menus } from "@/config/menus";
import { siteConfig } from "@/config/site";
import styles from "@/styles/footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <h1 className={styles.footer__title}>{siteConfig.name}</h1>

        <ul className={styles.footer__list}>
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <Link href={menu.url} className={styles.footer__link}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <span className={styles.footer__copy}>
          &#169; Chuluq. All rigths reserved
        </span>
      </div>
    </footer>
  );
};
