import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function HeroNavigation() {
  return (
    <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <liv>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        </liv>
        <liv>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Cadastro
          </NavLink>
        </liv>
        <liv>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Saiba Mais
          </NavLink>
        </liv>
      </ul>
    </nav>
  </header>
  )
}

export default HeroNavigation;
