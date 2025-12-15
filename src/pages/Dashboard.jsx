import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { apiFetch } from "../services/api";

export default function Dashboard() {
  const [status, setStatus] = useState("Cargando...");

  useEffect(() => {
    async function cargar() {
      try {
        await apiFetch("/login/"); 
        setStatus("Token válido y API conectada");
      } catch (error) {
        setStatus("Sesión iniciada");
      }
    }

    cargar();
  }, []);

  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <p>{status}</p>

      <button
        onClick={() => {
          localStorage.removeItem("auth");
          window.location.href = "/";
        }}
      >
        Cerrar sesión
      </button>
    </DashboardLayout>
  );
}
