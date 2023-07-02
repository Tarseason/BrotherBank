import { NavLink, useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function HeroNavigation() {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              onClick={() => {
                navigate("/login");
              }}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                navigate("/register");
              }}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Cadastro
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                navigate("/about");
              }}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Saiba Mais
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeroNavigation;
