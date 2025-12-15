import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { apiFetch } from "../services/api";

export default function Medidores() {
  const [medidores, setMedidores] = useState([]);
  const [estado, setEstado] = useState("Cargando medidores...");

  useEffect(() => {
    async function cargarMedidores() {
      try {
        const data = await apiFetch("/medidores/");
        setMedidores(data);
        setEstado("");
      } catch (error) {
        setEstado("Error cargando medidores");
      }
    }

    cargarMedidores();
  }, []);

  return (
    <DashboardLayout>
      <h1>Medidores</h1>

      {estado && <p>{estado}</p>}

      {!estado && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>N° Medidor</th>
              <th>Ubicación</th>
              <th>Estado</th>
              <th>Consumo promedio</th>
              <th>Última lectura</th>
            </tr>
          </thead>
          <tbody>
            {medidores.map((m) => (
              <tr key={m.id}>
                <td>{m.numero_medidor}</td>
                <td>{m.ubicacion}</td>
                <td>{m.estado_medidor}</td>
                <td>{m.consumo_promedio}</td>
                <td>{m.ultima_lectura}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DashboardLayout>
  );
}
