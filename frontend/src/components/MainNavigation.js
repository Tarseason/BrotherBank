import { NavLink, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import Modal from "./Modal";
// import { useState } from "react";

function MainNavigation() {
  const navigate = useNavigate();
  // const [modal, setModal] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    window.alert("Saiu!");
    navigate("/login");
  };
  // const ModalSame = () => {
  //   setModal(!modal);
  // };

  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="ask"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Pedir Favor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="transfer"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                // onClick={ModalSame}
              >
                Transferencia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="historic"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Historico
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addbrother"
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
                onClick={() => {
                  window.alert("Not implemented!");
                }}
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
                  onClick={logoutHandler}
                >
                  Sair
                </NavLink>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* {modal && <Modal />} */}
    </>
  );
}

export default MainNavigation;
