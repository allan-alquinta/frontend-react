import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div style={styles.container}>
      <Sidebar />
      <main style={styles.content}>{children}</main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  content: {
    flex: 1,
    padding: "30px",
    background: "#f8fafc",
  },
};
