import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { apiFetch } from "../services/api";

export default function Contratos() {
  const [contratos, setContratos] = useState([]);
  const [estado, setEstado] = useState("Cargando contratos...");

  useEffect(() => {
    async function cargarContratos() {
      try {
        const data = await apiFetch("/contratos/");
        setContratos(data);
        setEstado("");
      } catch (error) {
        setEstado("Error cargando contratos");
      }
    }

    cargarContratos();
  }, []);

  return (
    <DashboardLayout>
      <h1>Contratos</h1>

      {estado && <p>{estado}</p>}

      {!estado && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>N° Contrato</th>
              <th style={{ textAlign: "left" }}>Fecha inicio</th>
              <th style={{ textAlign: "left" }}>Fecha término</th>
              <th style={{ textAlign: "left" }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((contrato) => (
              <tr key={contrato.id}>
                <td>{contrato.numero_contrato}</td>
                <td>{contrato.fecha_inicio}</td>
                <td>{contrato.fecha_fin}</td>
                <td>{contrato.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DashboardLayout>
  );
}
