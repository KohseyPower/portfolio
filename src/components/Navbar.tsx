import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav style={{ padding: 20 }}>
      <Link to="/">Accueil</Link> | <Link to="/projets">Projets</Link>
    </nav>
  );
}
