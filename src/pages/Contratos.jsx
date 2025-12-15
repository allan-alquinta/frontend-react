import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { apiFetch } from "../services/api";

export default function Contratos() {
  const [contratos, setContratos] = useState([]);
  const [estado, setEstado] = useState("Cargando contratos...");

  const [form, setForm] = useState({
    numero_contrato: "",
    fecha_inicio: "",
    fecha_fin: "",
    estado: "",
    cliente: 1,
  });

  useEffect(() => {
    cargarContratos();
  }, []);

  const cargarContratos = async () => {
    try {
      const data = await apiFetch("/contratos/");
      setContratos(data);
      setEstado("");
    } catch (error) {
      setEstado("Error cargando contratos");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await apiFetch("/contratos/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Contrato creado correctamente");

    setForm({
      numero_contrato: "",
      fecha_inicio: "",
      fecha_fin: "",
      estado: "",
      cliente: 1,
    });

    cargarContratos();
  } catch (error) {
    console.error(error);
    alert("Error al crear contrato");
  }
};

  return (
    <DashboardLayout>
      <h1>Contratos</h1>

      {/* FORMULARIO POST */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h3>Crear contrato</h3>

        <input
          type="text"
          name="numero_contrato"
          placeholder="Número contrato"
          value={form.numero_contrato}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="fecha_inicio"
          value={form.fecha_inicio}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="fecha_fin"
          value={form.fecha_fin}
          onChange={handleChange}
          required
        />

        <select
        name="estado"
        value={form.estado}
        onChange={handleChange}
        required>
        <option value="">Seleccione estado</option>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
        </select>

        <button type="submit">Crear contrato</button>
      </form>

      {/* 🔹 ESTADO */}
      {estado && <p>{estado}</p>}

      {/* 🔹 TABLA GET */}
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
