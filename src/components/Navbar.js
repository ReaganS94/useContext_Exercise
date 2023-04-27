import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { isLightTheme, light, dark } = themeContext;
  const { isAuthenticated, toggleAuth } = authContext;

  const auth = isAuthenticated ? "Log out" : "Log in";
  const themeStyles = isLightTheme ? light : dark;

  console.log(themeStyles);

  return (
    <nav style={{ background: themeStyles.ui, color: themeStyles.text }}>
      <span onClick={toggleAuth} style={{ cursor: "pointer", float: "left" }}>
        {auth}
      </span>

      <ThemeToggle />
      <h1>Context App</h1>

      <br />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
