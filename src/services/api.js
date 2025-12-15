const API_URL = "http://127.0.0.1:8000/api";

// Función base para llamadas con token
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("auth");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Token ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error("Error en la API");
  }

  return response.json();
}
