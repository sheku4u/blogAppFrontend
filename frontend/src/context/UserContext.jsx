import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [usernameForBackend, setUsernameForBackend] = useState();

  // Save user context data to local storage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("userInfo", JSON.stringify(userInfo));
  //   localStorage.setItem(
  //     "usernameForBackend",
  //     JSON.stringify(usernameForBackend)
  //   );
  // }, [userInfo, usernameForBackend]);
  const setUserinformation = (user) => {
    setUserInfo(user);
    setUsernameForBackend(user);
    window.localStorage.setItem("userInfo", user);
    window.localStorage.setItem("usernameForBackend", user);
  };


  const logoutUserContext=()=>{
    setUserInfo(null)
    setUsernameForBackend(null)
window.localStorage.getItem("userInfo")
window.localStorage.getItem("usernameForBackend")
  }

  
  // Load user context data from local storage on component mount
  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem("userInfo");
  //   const storedUsername = localStorage.getItem("usernameForBackend");

  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  //   if (storedUsername) {
  //     setUsernameForBackend(JSON.parse(storedUsername));
  //   }
  // }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        usernameForBackend,
        setUsernameForBackend,
        setUserinformation,
        logoutUserContext
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
