import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <liv>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Pedir Favor
          </NavLink>
        </liv>
        <liv>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Historico
          </NavLink>
        </liv>
        <liv>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Adicionar Brother
          </NavLink>
        </liv>
        <liv>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Ganhar Credito
          </NavLink>
        </liv>
      </ul>
    </nav>
  </header>
  )
}

export default MainNavigation;
