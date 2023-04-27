export default function BookList() {
  const isAuthenticated = true;

  return (
    <div className="book-list" style={{ background: "#eee", color: "#555" }}>
      {isAuthenticated ? (
        <ul>
          <li style={{ background: "#ddd" }}>The name of the wind</li>
          <li style={{ background: "#ddd" }}>The way of kings</li>
          <li style={{ background: "#ddd" }}>The final empire</li>
        </ul>
      ) : (
        "Please log in to view the content"
      )}
    </div>
  );
}
