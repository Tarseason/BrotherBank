import { NavLink, useParams } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function HeroNavigation() {
  const params = useParams();
  console.log(params, "+++");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="../login"
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
              to="../register"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Cadastro
            </NavLink>
          </li>
          <li>
            <NavLink
              to="../about"
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
