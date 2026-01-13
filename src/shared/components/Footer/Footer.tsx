import styles from "./Footer.module.css";

export interface FooterProps {
  copyright?: string;
}

export function Footer({ copyright = "MyApp" }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {year} {copyright}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
