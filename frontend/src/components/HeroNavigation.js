import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function HeroNavigation() {
  return (
    <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink
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
  )
}

export default HeroNavigation;
