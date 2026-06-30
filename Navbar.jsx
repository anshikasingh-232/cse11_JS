function Navbar() {
  return (
    <nav className="navbar">
      <h2>Amazon Clone</h2>

      <input
        type="text"
        placeholder="Search Products..."
      />

      <div>
        <button>Sign In</button>
        <button>Cart (0)</button>
      </div>
    </nav>
  );
}

export default Navbar;