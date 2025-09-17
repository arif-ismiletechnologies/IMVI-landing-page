import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <MyContext.Provider value={{ value, setValue, isDarkTheme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
