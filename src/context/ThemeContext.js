import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

// const lightTheme = {
//   primary: "rgb(255,255,255)",
//   secondary: "rgb(37, 35, 36)",
//   tertiary: "rgb(173, 255, 47))",
// };

// const darkTheme = {
//   primary: "rgb(37, 35, 36)",
//   secondary: "rgb(255,255,255)",
//   tertiary: "rgb(173, 255, 47)",
// };

const lightTheme = {
  "--primary": "rgb(255,255,255)",
  "--secondary": "rgb(37, 35, 36)",
  "--tertiary": "rgb(29, 155, 240)",
  "--alternate": "rgb(173, 255, 47)",
  "--shadow": "rgb(37, 35, 36)"
}

const darkTheme = {
  "--primary": "rgb(37, 35, 36)",
  "--secondary": "rgb(255,255,255)",
  "--tertiary": "rgb(29, 155, 240)",
  "--alternate": "rgb(173, 255, 47)",
  "--shadow": "rgb(0,0,0)"
}


const initialState = {
  darkMode: false,
  themeColor: lightTheme,
};

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);

  const toggleSwitch = () => {
    if (theme.darkMode)
      setTheme({
        darkMode: false,
        themeColor: lightTheme,
      });
    else {
      setTheme({
        darkMode: true,
        themeColor: darkTheme,
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};
