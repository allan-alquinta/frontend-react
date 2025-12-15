import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });

      const data = await response.json();

      
      if (!response.ok) {
        setError(data.error || "Credenciales inválidas");
        return;
      }

      localStorage.setItem("auth", data.token);
      navigate("/dashboard");

    } catch (err) {
      setError("Error de red o servidor apagado");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>

      <label>Usuario</label>
      <input value={user} onChange={(e) => setUser(e.target.value)} />

      <label>Contraseña</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button type="submit">Ingresar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
