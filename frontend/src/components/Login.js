import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");

  const emailChangeHandler = (event) => {
    setEmailEntered(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordEntered(event.target.value);
  };

  const longinHandle = async () => {
    const user = {
      email: emailEntered,
      password: passwordEntered,
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
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">E-Mail</label>
      <input
        id="email"
        type="email"
        value={emailEntered}
        onChange={emailChangeHandler}
      />
      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="password"
        value={passwordEntered}
        onChange={passwordChangeHandler}
      />
      <button type="submit"  onClick={submitHandler}>
        <Link to='../home'>
        Login
        </Link>
      </button>
    </form>
  );
}

export default Login;
