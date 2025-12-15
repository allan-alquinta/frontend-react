import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.title}>Sistema Eléctrico</h2>

      <nav style={styles.nav}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/clientes" style={styles.link}>Clientes</Link>
        <Link to="/contratos" style={styles.link}>Contratos</Link>
        <Link to="/pagos" style={styles.link}>Pagos</Link>
        <Link to="/medidores" style={styles.link}>Medidores</Link>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    background: "#000000",
    color: "white",
    padding: "20px",
    minHeight: "100vh",
  },
  title: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    opacity: 0.85,
  },
};
