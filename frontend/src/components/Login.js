import React, { useEffect, useReducer, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

function Login() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState();
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid & passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const longinHandle = async () => {
    const user = {
      email: emailState.value,
      password: passwordState.value,
    };

    const requisicao = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = requisicao.json();
    return result;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const result = await longinHandle();

    localStorage.setItem("token", JSON.stringify(result.token));
    localStorage.setItem("userInfo", JSON.stringify(result.user));

    ctx.infoUser(result);
    navigate("../home");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">E-Mail</label>
      <input
        id="email"
        type="email"
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />
      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="password"
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
      />
      <button type="submit" onClick={submitHandler} disabled={!formIsValid}>
        Login
      </button>
    </form>
  );
}

export default Login;
