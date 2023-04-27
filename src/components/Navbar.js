import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav style={{ background: "#eee", color: "#555" }}>
      <span style={{ cursor: "pointer", float: "left" }}>Log in</span>

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
