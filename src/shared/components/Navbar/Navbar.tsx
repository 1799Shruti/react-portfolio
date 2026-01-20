import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

export interface NavbarProps {
  brand?: string;
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/students", label: "Students" },
  { to: "/clock", label: "Clock" },
  { to: "/materials", label: "Materials" },
  { to: "/counter", label: "Counter" },
];

export function Navbar({
  brand = "MyApp",
  items = defaultNavItems,
}: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>{brand}</h2>

      <ul className={styles.navLinks}>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
