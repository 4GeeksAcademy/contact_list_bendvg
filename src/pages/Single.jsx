import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Form } from "../components/Form";
import { API_URL, AGENDA_NAME } from "../env";

export const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    const loadContact = async () => {
      const resp = await fetch(`${API_URL}/agendas/${AGENDA_NAME}`);
      const data = await resp.json();

      const found = data.contacts.find(c => c.id === parseInt(id));
      setContact(found);
    };

    loadContact();
  }, [id]);

  const handleSubmit = async (data) => {
    await fetch(`${API_URL}/agendas/${AGENDA_NAME}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        agenda_slug: AGENDA_NAME
      })
    });

    const resp = await fetch(`${API_URL}/agendas/${AGENDA_NAME}`);
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
