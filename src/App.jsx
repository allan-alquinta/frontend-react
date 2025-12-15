import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Clientes from "./pages/Clientes";
import Contratos from "./pages/Contratos";
import Pagos from "./pages/Pagos";
import Medidores from "./pages/Medidores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
    path="/clientes"
    element={
      <ProtectedRoute>
        <Clientes />
      </ProtectedRoute>
    }
  />

<Route
    path="/contratos"
    element={
      <ProtectedRoute>
        <Contratos />
      </ProtectedRoute>
    }
  />

  <Route
  path="/pagos"
  element={
    <ProtectedRoute>
      <Pagos />
    </ProtectedRoute>
  }
/>

<Route
  path="/medidores"
  element={
    <ProtectedRoute>
      <Medidores />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
