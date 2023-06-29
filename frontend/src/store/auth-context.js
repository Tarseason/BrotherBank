import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggenIn: false,
  userInfo: {},
  token: "",
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const loggoutHandler = () => {
    setIsLoggedIn(false);
  };

  const logginHandler = () => {
    setIsLoggedIn(true);
  };

  const userInfoHandler = (value) => {
    setUserInfo(value);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userInfo: userInfo,
        onLogout: loggoutHandler,
        onLogin: logginHandler,
        infoUser: userInfoHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
