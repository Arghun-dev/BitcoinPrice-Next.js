import Link from "next/link";

// styles
import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          <h3>Bitcoin</h3>
        </li>
        <div className={styles.navLinks}>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a className={styles.navbarItem__link}>Home</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about">
              <a className={styles.navbarItem__link}>About</a>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
