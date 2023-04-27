import { useState, createContext } from "react";

//  CALL THIS TO USE THE CONTEXT
export const ThemeContext = createContext();

// FUNCTION TO POPULATE THE CONTEXT
export default function ThemeContextProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const [light, setLight] = useState({ text: "#555", ui: "#ddd", bg: "#eee" });
  const [dark, setDark] = useState({ text: "#ddd", ui: "#333", bg: "#555" });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
