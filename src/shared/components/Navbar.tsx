import { NavLink } from "react-router";
import "../../styles/shared/components/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clock"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Clock
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
