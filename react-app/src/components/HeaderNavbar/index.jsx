import { NavLink } from "react-router-dom";
import { ROUTES } from "../../data";

import s from "./styles.module.css";

const activeClassname = ({ isActive }) => {
  if (isActive) return s.active;
};

export const HeaderNavbar = () => {
  return (
    <nav>
      <NavLink className={activeClassname} to={ROUTES.home}>
        Home
      </NavLink>
      <NavLink className={activeClassname} to={ROUTES.about}>
        About
      </NavLink>
      <NavLink className={activeClassname} to={ROUTES.contact}>
        Contact
      </NavLink>
      <NavLink className={activeClassname} to={ROUTES.posts}>
        Posts
      </NavLink>
    </nav>
  );
};
