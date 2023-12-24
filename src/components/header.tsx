"use client";

import { useState } from "react";
import Link from "next/link";

import { menus } from "@/config/menus";
import { Icons } from "@/components/icons";
import styles from "@/styles/header.module.css";

export const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#home");

  const toggleMenu = () => {
    setShowMenu(!isShowMenu);
  };

  const toggleActiveMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.nav__logo}>
          Chuluq
        </Link>

        <div
          className={
            isShowMenu
              ? `${styles.nav__menu} ${styles.showMenu}`
              : styles.nav__menu
          }
        >
          <ul className={styles.nav__list}>
            {menus.map((menu, index) => {
              const Icon = Icons[menu.icon];
              return (
                <li key={index} className={styles.nav__item}>
                  <Link
                    href={menu.url}
                    onClick={() => toggleActiveMenu(menu.url)}
                    className={
                      activeMenu === menu.url
                        ? `${styles.nav__link} ${styles.activeLink}`
                        : styles.nav__link
                    }
                  >
                    <Icon size={19.2} className={styles.nav__icon} />{" "}
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Icons.close
            size={24}
            onClick={toggleMenu}
            className={styles.nav__close}
          />
        </div>

        <div className={styles.nav__toggle} onClick={toggleMenu}>
          <Icons.menu size={17.6} />
        </div>
      </nav>
    </header>
  );
};
