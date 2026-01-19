import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Form } from "../components/Form";

const apiUrl = import.meta.env.VITE_API_URL;
const agendaName = import.meta.env.VITE_AGENDA_NAME;

export const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    const loadContact = async () => {
      const resp = await fetch(`${apiUrl}/agendas/${agendaName}`);
      const data = await resp.json();

      const found = data.contacts.find(c => c.id === parseInt(id));
      setContact(found);
    };

    loadContact();
  }, [id]);

  const handleSubmit = async (data) => {
    await fetch(`${apiUrl}/agendas/${agendaName}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const resp = await fetch(`${apiUrl}/agendas/${agendaName}`);
    const agendaData = await resp.json();
    dispatch({ type: "SET_AGENDA", payload: agendaData });

    navigate("/");
  };

  if (!contact) return <p>Cargando...</p>;

  return (
    <div className="container">
      <Form
        title="Editar contacto"
        initialValues={{
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          address: contact.address
        }}
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
