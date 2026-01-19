import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Form } from "../components/Form";
import { API_URL, AGENDA_NAME } from "../env";

export const Demo = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await fetch(`${API_URL}/agendas/${AGENDA_NAME}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        agenda_slug: AGENDA_NAME
      })
    });

    const resp = await fetch(`${API_URL}/agendas/${AGENDA_NAME}`);
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
