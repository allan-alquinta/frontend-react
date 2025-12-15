import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { apiFetch } from "../services/api";

export default function Pagos() {
  const [pagos, setPagos] = useState([]);
  const [estado, setEstado] = useState("Cargando pagos...");

  useEffect(() => {
    async function cargarPagos() {
      try {
        const data = await apiFetch("/pagos/");
        setPagos(data);
        setEstado("");
      } catch (error) {
        setEstado("Error cargando pagos");
      }
    }

    cargarPagos();
  }, []);

  return (
    <DashboardLayout>
      <h1>Pagos</h1>

      {estado && <p>{estado}</p>}

      {!estado && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Método</th>
              <th>Referencia</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((pago) => (
              <tr key={pago.id}>
                <td>{pago.fecha_pago}</td>
                <td>${pago.monto_pagado}</td>
                <td>{pago.metodo_pago}</td>
                <td>{pago.numero_referencia}</td>
                <td>{pago.estado_pago}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DashboardLayout>
  );
}
