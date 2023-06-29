import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const logoutHandler = () => {
    console.log("saiu");
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Pedir Favor
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Historico
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Adicionar Brother
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Ganhar Credito
            </NavLink>
          </li>
          <li>
            <button type="button" onClick={logoutHandler}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Sair
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
