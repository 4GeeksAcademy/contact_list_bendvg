import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Form } from "../components/Form";

export const Demo = () => {
  const { dispatch } = useGlobalReducer();
  const apiUrl = import.meta.env.VITE_API_URL;
  const agendaName = import.meta.env.VITE_AGENDA_NAME;
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await fetch(`${apiUrl}/agendas/${agendaName}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address
      })
    });

    const resp = await fetch(`${apiUrl}/agendas/${agendaName}`);
    const agendaData = await resp.json();

    dispatch({ type: "SET_AGENDA", payload: agendaData });

    navigate("/");
  };

  return (
    <div className="container">
      <Form
        title="Crear contacto"
        placeholders={{
          name: "Nombre completo",
          email: "Correo personal",
          phone: "Número móvil",
          address: "Dirección completa"
        }}
        onSubmit={handleSubmit}
      />

      <br />

      <Link to="/">
        <span className="text-decoration-underline">Back home</span>
      </Link>
    </div>
  );
};
