import React, { useState } from 'react'

// make a new context
export const MyContext = React.createContext();

// create the provider
export const ContextProvider = (props) => {

  const [darkTheme, setDarkTheme] = useState(true);
  const [user, setUser] = useState(true);

  const themeClickHandler = () => setDarkTheme(!darkTheme)
  const userChangeHandler = () => setUser(!user)

  return (
    <MyContext.Provider value={{
      themeStatus: darkTheme,
      changeTheme: themeClickHandler,
      user: user,
      changeUser: userChangeHandler
    }}>
      {props.children}
    </MyContext.Provider>
  )
}