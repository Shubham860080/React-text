import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/tabs">Tabs</Link>
      <Link to="/accordion">Accordion</Link>
    </nav>
  );
}

export default Navbar;
