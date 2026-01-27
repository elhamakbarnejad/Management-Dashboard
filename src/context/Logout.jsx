import { createContext, useState } from "react";

export const LogoutContext = createContext();

const LogoutProvider = ({ children }) => {
  const [logineduser, setLogineduser] = useState({
    id: 1,
    username: "Elham Akbarnejad",
  });

  const logoutHandler = () => {
    setLogineduser(null);
  };
  return (
    <LogoutContext.Provider value={{ logoutHandler, logineduser }}>
      {children}
    </LogoutContext.Provider>
  );
};

export default LogoutProvider;
