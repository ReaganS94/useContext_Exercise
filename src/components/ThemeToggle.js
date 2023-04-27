export default function ThemeToggle() {
  const isLightTheme = false; // :(
  return (
    <span style={{ cursor: "pointer", float: "right" }}>
      {isLightTheme ? "Dark Mode 🌚" : "Light Mode 🌝"}
    </span>
  );
}
