import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function BookList() {
  const theme = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);

  const { isLightTheme, light, dark } = theme;

  const themeStyles = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: themeStyles.bg, color: themeStyles.text }}
    >
      {isAuthenticated ? (
        <ul>
          <li style={{ background: themeStyles.ui }}>The name of the wind</li>
          <li style={{ background: themeStyles.ui }}>The way of kings</li>
          <li style={{ background: themeStyles.ui }}>The final empire</li>
        </ul>
      ) : (
        "Please log in to view the content"
      )}
    </div>
  );
}
